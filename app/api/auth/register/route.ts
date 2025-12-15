import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection, getRolesCollection } from "@/lib/db/collections"
import { hashPassword } from "@/lib/db/utils"

export async function POST(request: NextRequest) {
  try {
    const { username, email, password, currency = "USD" } = await request.json()

    if (!username || !email || !password) {
      return NextResponse.json({ error: "Username, email and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const usersCollection = await getUsersCollection()
    const existingUser = await usersCollection.findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Get default "User" role
    const rolesCollection = await getRolesCollection()
    const userRole = await rolesCollection.findOne({ name: "User" })

    if (!userRole) {
      return NextResponse.json({ error: "Default role not found. Please seed the database first." }, { status: 500 })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const result = await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
      roleId: userRole._id!,
      currency,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "User created successfully", userId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Register error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
