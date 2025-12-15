import { type NextRequest, NextResponse } from "next/server"
import { getRolesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"

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

    const roles = await rolesCollection.find({}).toArray()

    const rolesData = roles.map((r) => ({
      id: r._id!.toString(),
      name: r.name,
      description: r.description,
      createdAt: r.createdAt.toISOString(),
    }))

    return NextResponse.json({ roles: rolesData }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get roles error:", error)
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

    const { name, description } = await request.json()

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const result = await rolesCollection.insertOne({
      name,
      description: description || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "Role created successfully", roleId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create role error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
