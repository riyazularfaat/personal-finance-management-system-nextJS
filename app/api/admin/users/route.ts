import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection, getRolesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { hashPassword } from "@/lib/db/utils"
import { ObjectId } from "mongodb"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is admin
    const rolesCollection = await getRolesCollection()
    const role = await rolesCollection.findOne({ _id: user.roleId })

    if (role?.name !== "Admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const usersCollection = await getUsersCollection()
    const users = await usersCollection.find({}).toArray()
    const roles = await rolesCollection.find({}).toArray()

    const usersData = users.map((u) => {
      const userRole = roles.find((r) => r._id!.equals(u.roleId))
      return {
        id: u._id!.toString(),
        username: u.username,
        email: u.email,
        roleId: u.roleId.toString(),
        roleName: userRole?.name || "Unknown",
        currency: u.currency,
        createdAt: u.createdAt.toISOString(),
      }
    })

    return NextResponse.json({ users: usersData }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is admin
    const rolesCollection = await getRolesCollection()
    const role = await rolesCollection.findOne({ _id: user.roleId })

    if (role?.name !== "Admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { username, email, password, roleId, currency } = await request.json()

    if (!username || !email || !password || !roleId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const usersCollection = await getUsersCollection()
    const existingUser = await usersCollection.findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashedPassword = await hashPassword(password)
    const result = await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
      roleId: new ObjectId(roleId),
      currency: currency || "USD",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "User created successfully", userId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
