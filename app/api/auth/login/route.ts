import { type NextRequest, NextResponse } from "next/server"
import { getUsersCollection, getSessionsCollection, getRolesCollection } from "@/lib/db/collections"
import { verifyPassword, generateToken, getSessionExpiry } from "@/lib/db/utils"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Login API called")
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user by email
    const usersCollection = await getUsersCollection()
    const user = await usersCollection.findOne({ email })

    if (!user) {
      console.log("[v0] User not found:", email)
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      console.log("[v0] Invalid password for:", email)
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Get user role
    const rolesCollection = await getRolesCollection()
    const role = await rolesCollection.findOne({ _id: user.roleId })

    // Create session
    const sessionsCollection = await getSessionsCollection()
    const token = generateToken()
    const expiresAt = getSessionExpiry()

    await sessionsCollection.insertOne({
      userId: user._id!,
      token,
      expiresAt,
      createdAt: new Date(),
    })

    // Return user data without password
    const userData = {
      id: user._id!.toString(),
      username: user.username,
      email: user.email,
      roleId: user.roleId.toString(),
      roleName: role?.name || "User",
      currency: user.currency,
    }

    console.log("[v0] Login successful for:", email)

    const response = NextResponse.json({ user: userData }, { status: 200 })

    // Set cookie
    response.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please make sure the database is seeded." },
      { status: 500 },
    )
  }
}
