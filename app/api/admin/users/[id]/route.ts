import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection, getRolesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { hashPassword } from "@/lib/db/utils"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
    const userId = new ObjectId(params.id)

    const usersCollection = await getUsersCollection()
    const updateData: any = {
      username,
      email,
      roleId: new ObjectId(roleId),
      currency,
      updatedAt: new Date(),
    }

    // Only update password if provided
    if (password) {
      updateData.password = await hashPassword(password)
    }

    await usersCollection.updateOne({ _id: userId }, { $set: updateData })

    return NextResponse.json({ message: "User updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Update user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
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

    const userId = new ObjectId(params.id)
    const usersCollection = await getUsersCollection()

    await usersCollection.deleteOne({ _id: userId })

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Delete user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
