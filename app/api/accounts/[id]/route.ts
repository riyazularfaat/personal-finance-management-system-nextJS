import { type NextRequest, NextResponse } from "next/server"
import { getAccountsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, type, balance } = await request.json()
    const accountId = new ObjectId(params.id)

    const accountsCollection = await getAccountsCollection()
    await accountsCollection.updateOne(
      { _id: accountId, userId: user._id },
      {
        $set: {
          name,
          type,
          balance: Number.parseFloat(balance),
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ message: "Account updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Update account error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const accountId = new ObjectId(params.id)
    const accountsCollection = await getAccountsCollection()

    await accountsCollection.deleteOne({ _id: accountId, userId: user._id })

    return NextResponse.json({ message: "Account deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Delete account error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
