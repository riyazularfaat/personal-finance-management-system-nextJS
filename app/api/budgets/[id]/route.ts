import { type NextRequest, NextResponse } from "next/server"
import { getBudgetsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { categoryId, amount, period, startDate, endDate } = await request.json()
    const budgetId = new ObjectId(params.id)

    const budgetsCollection = await getBudgetsCollection()
    await budgetsCollection.updateOne(
      { _id: budgetId, userId: user._id },
      {
        $set: {
          categoryId: new ObjectId(categoryId),
          amount: Number.parseFloat(amount),
          period,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ message: "Budget updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Update budget error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const budgetId = new ObjectId(params.id)
    const budgetsCollection = await getBudgetsCollection()

    await budgetsCollection.deleteOne({ _id: budgetId, userId: user._id })

    return NextResponse.json({ message: "Budget deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Delete budget error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
