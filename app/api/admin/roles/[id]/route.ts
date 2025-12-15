import { type NextRequest, NextResponse } from "next/server"
import { getRolesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
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

    const { name, description } = await request.json()
    const roleId = new ObjectId(params.id)

    await rolesCollection.updateOne(
      { _id: roleId },
      {
        $set: {
          name,
          description,
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ message: "Role updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Update role error:", error)
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

    const roleId = new ObjectId(params.id)
    await rolesCollection.deleteOne({ _id: roleId })

    return NextResponse.json({ message: "Role deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Delete role error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
