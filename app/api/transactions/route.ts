import { type NextRequest, NextResponse } from "next/server"
import { getTransactionsCollection, getCategoriesCollection, getAccountsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { ObjectId } from "mongodb"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const transactionsCollection = await getTransactionsCollection()
    const transactions = await transactionsCollection.find({ userId: user._id }).sort({ date: -1 }).toArray()

    // Get categories and accounts for reference
    const categoriesCollection = await getCategoriesCollection()
    const accountsCollection = await getAccountsCollection()

    const categories = await categoriesCollection.find({ userId: user._id }).toArray()
    const accounts = await accountsCollection.find({ userId: user._id }).toArray()

    const enrichedTransactions = transactions.map((transaction) => {
      const category = categories.find((c) => c._id!.equals(transaction.categoryId))
      const account = accounts.find((a) => a._id!.equals(transaction.accountId))

      return {
        id: transaction._id!.toString(),
        title: transaction.title,
        amount: transaction.amount,
        type: transaction.type,
        categoryId: transaction.categoryId.toString(),
        categoryName: category?.name || "Unknown",
        accountId: transaction.accountId.toString(),
        accountName: account?.name || "Unknown",
        date: transaction.date.toISOString(),
        description: transaction.description,
      }
    })

    return NextResponse.json({ transactions: enrichedTransactions }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get transactions error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, amount, type, categoryId, accountId, date, description } = await request.json()

    if (!title || !amount || !type || !categoryId || !accountId || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transactionsCollection = await getTransactionsCollection()
    const accountsCollection = await getAccountsCollection()

    const result = await transactionsCollection.insertOne({
      title,
      amount: Number.parseFloat(amount),
      type,
      categoryId: new ObjectId(categoryId),
      accountId: new ObjectId(accountId),
      date: new Date(date),
      description,
      userId: user._id!,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    // Update account balance
    const balanceChange = type === "income" ? Number.parseFloat(amount) : -Number.parseFloat(amount)
    await accountsCollection.updateOne({ _id: new ObjectId(accountId) }, { $inc: { balance: balanceChange } })

    return NextResponse.json(
      { message: "Transaction created successfully", transactionId: result.insertedId.toString() },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Create transaction error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
