import { type NextRequest, NextResponse } from "next/server"
import { getAccountsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const accountsCollection = await getAccountsCollection()
    const accounts = await accountsCollection.find({ userId: user._id }).toArray()

    const accountsData = accounts.map((account) => ({
      id: account._id!.toString(),
      name: account.name,
      type: account.type,
      balance: account.balance,
    }))

    return NextResponse.json({ accounts: accountsData }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get accounts error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, type, balance } = await request.json()

    if (!name || !type || balance === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const accountsCollection = await getAccountsCollection()
    const result = await accountsCollection.insertOne({
      name,
      type,
      balance: Number.parseFloat(balance),
      userId: user._id!,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "Account created successfully", accountId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create account error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
