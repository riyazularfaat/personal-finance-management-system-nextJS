import { type NextRequest, NextResponse } from "next/server"
import { getSessionsCollection } from "@/lib/db/collections"

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("session_token")?.value

    if (token) {
      // Delete session from database
      const sessionsCollection = await getSessionsCollection()
      await sessionsCollection.deleteOne({ token })
    }

    const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 })

    // Clear cookie
    response.cookies.delete("session_token")

    return response
  } catch (error) {
    console.error("[v0] Logout error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
