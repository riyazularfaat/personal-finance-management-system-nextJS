import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection, getRolesCollection } from "@/lib/db/collections"

export async function GET(request: NextRequest) {
  try {
    const usersCollection = await getUsersCollection()
    const users = await usersCollection.find({}).toArray()

    const rolesCollection = await getRolesCollection()
    const roles = await rolesCollection.find({}).toArray()

    return NextResponse.json({
      success: true,
      userCount: users.length,
      roleCount: roles.length,
      users: users.map((u) => ({
        email: u.email,
        username: u.username,
        hasPassword: !!u.password,
        passwordLength: u.password?.length || 0,
      })),
      roles: roles.map((r) => ({ name: r.name })),
    })
  } catch (error) {
    console.error("[v0] Test DB error:", error)
    return NextResponse.json({ error: "Database connection failed", details: String(error) }, { status: 500 })
  }
}
