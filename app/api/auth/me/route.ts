import { type NextRequest, NextResponse } from "next/server"
import {
  getUsersCollection,
  getSessionsCollection,
  getRolesCollection,
  getRoleMenuAccessCollection,
  getMenusCollection,
} from "@/lib/db/collections"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("session_token")?.value

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // Find session
    const sessionsCollection = await getSessionsCollection()
    const session = await sessionsCollection.findOne({ token })

    if (!session || session.expiresAt < new Date()) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 })
    }

    // Get user
    const usersCollection = await getUsersCollection()
    const user = await usersCollection.findOne({ _id: session.userId })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Get role
    const rolesCollection = await getRolesCollection()
    const role = await rolesCollection.findOne({ _id: user.roleId })

    // Get menus accessible by this role
    const roleMenuAccessCollection = await getRoleMenuAccessCollection()
    const menusCollection = await getMenusCollection()

    const accessList = await roleMenuAccessCollection.find({ roleId: user.roleId, isView: true }).toArray()
    const menuIds = accessList.map((access) => access.menuId)
    const menus = await menusCollection
      .find({ _id: { $in: menuIds } })
      .sort({ order: 1 })
      .toArray()

    // Return user data
    const userData = {
      id: user._id!.toString(),
      username: user.username,
      email: user.email,
      roleId: user.roleId.toString(),
      roleName: role?.name || "User",
      currency: user.currency,
      menus: menus.map((menu) => ({
        id: menu._id!.toString(),
        name: menu.name,
        url: menu.url,
        icon: menu.icon,
        parentId: menu.parentId?.toString() || null,
        order: menu.order,
      })),
    }

    return NextResponse.json({ user: userData }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
