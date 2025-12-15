import type { NextRequest } from "next/server"
import { getUsersCollection, getSessionsCollection } from "./collections"

export async function getCurrentUser(request: NextRequest) {
  const token = request.cookies.get("session_token")?.value

  if (!token) {
    return null
  }

  const sessionsCollection = await getSessionsCollection()
  const session = await sessionsCollection.findOne({ token })

  if (!session || session.expiresAt < new Date()) {
    return null
  }

  const usersCollection = await getUsersCollection()
  const user = await usersCollection.findOne({ _id: session.userId })

  return user
}
