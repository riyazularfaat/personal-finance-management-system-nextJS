import { type NextRequest, NextResponse } from "next/server"
import { getTransactionsCollection, getAccountsCollection, getCategoriesCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const transactionsCollection = await getTransactionsCollection()
    const accountsCollection = await getAccountsCollection()
    const categoriesCollection = await getCategoriesCollection()

    // Get all user data
    const transactions = await transactionsCollection.find({ userId: user._id }).toArray()
    const accounts = await accountsCollection.find({ userId: user._id }).toArray()
    const categories = await categoriesCollection.find({ userId: user._id }).toArray()

    // Calculate stats
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)
    const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)
    const totalExpenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

    // Recent transactions
    const recentTransactions = transactions
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 5)
      .map((t) => {
        const category = categories.find((c) => c._id!.equals(t.categoryId))
        return {
          id: t._id!.toString(),
          title: t.title,
          amount: t.amount,
          type: t.type,
          categoryName: category?.name || "Unknown",
          date: t.date.toISOString(),
        }
      })

    // Category breakdown
    const categoryBreakdown = categories
      .filter((c) => c.type === "expense")
      .map((category) => {
        const categoryTransactions = transactions.filter(
          (t) => t.type === "expense" && t.categoryId.equals(category._id!),
        )
        const total = categoryTransactions.reduce((sum, t) => sum + t.amount, 0)
        return {
          name: category.name,
          value: total,
        }
      })
      .filter((c) => c.value > 0)

    return NextResponse.json(
      {
        totalBalance,
        totalIncome,
        totalExpenses,
        netBalance: totalIncome - totalExpenses,
        recentTransactions,
        categoryBreakdown,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Get dashboard stats error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
