import { type NextRequest, NextResponse } from "next/server"
import { getBudgetsCollection, getCategoriesCollection, getTransactionsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { ObjectId } from "mongodb"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const budgetsCollection = await getBudgetsCollection()
    const budgets = await budgetsCollection.find({ userId: user._id }).toArray()

    // Get categories for reference
    const categoriesCollection = await getCategoriesCollection()
    const categories = await categoriesCollection.find({ userId: user._id }).toArray()

    // Calculate spent for each budget from transactions
    const transactionsCollection = await getTransactionsCollection()

    const enrichedBudgets = await Promise.all(
      budgets.map(async (budget) => {
        const category = categories.find((c) => c._id!.equals(budget.categoryId))

        // Calculate spent from transactions in the budget period
        const transactions = await transactionsCollection
          .find({
            userId: user._id,
            categoryId: budget.categoryId,
            type: "expense",
            date: {
              $gte: budget.startDate,
              $lte: budget.endDate,
            },
          })
          .toArray()

        const spent = transactions.reduce((sum, t) => sum + t.amount, 0)

        return {
          id: budget._id!.toString(),
          categoryId: budget.categoryId.toString(),
          categoryName: category?.name || "Unknown",
          amount: budget.amount,
          spent: spent,
          period: budget.period,
          startDate: budget.startDate.toISOString(),
          endDate: budget.endDate.toISOString(),
        }
      }),
    )

    return NextResponse.json({ budgets: enrichedBudgets }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get budgets error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { categoryId, amount, period, startDate, endDate } = await request.json()

    if (!categoryId || !amount || !period || !startDate || !endDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const budgetsCollection = await getBudgetsCollection()
    const result = await budgetsCollection.insertOne({
      categoryId: new ObjectId(categoryId),
      amount: Number.parseFloat(amount),
      spent: 0,
      period,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      userId: user._id!,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: "Budget created successfully", budgetId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create budget error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
