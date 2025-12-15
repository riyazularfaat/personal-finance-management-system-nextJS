import { type NextRequest, NextResponse } from "next/server"
import { getTransactionsCollection, getAccountsCollection } from "@/lib/db/collections"
import { getCurrentUser } from "@/lib/db/auth-middleware"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, amount, type, categoryId, accountId, date, description } = await request.json()
    const transactionId = new ObjectId(params.id)

    const transactionsCollection = await getTransactionsCollection()
    const accountsCollection = await getAccountsCollection()

    // Get old transaction to reverse account balance
    const oldTransaction = await transactionsCollection.findOne({ _id: transactionId, userId: user._id })
    if (!oldTransaction) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 })
    }

    // Reverse old balance
    const oldBalanceChange = oldTransaction.type === "income" ? -oldTransaction.amount : oldTransaction.amount
    await accountsCollection.updateOne({ _id: oldTransaction.accountId }, { $inc: { balance: oldBalanceChange } })

    // Update transaction
    await transactionsCollection.updateOne(
      { _id: transactionId, userId: user._id },
      {
        $set: {
          title,
          amount: Number.parseFloat(amount),
          type,
          categoryId: new ObjectId(categoryId),
          accountId: new ObjectId(accountId),
          date: new Date(date),
          description,
          updatedAt: new Date(),
        },
      },
    )

    // Apply new balance
    const newBalanceChange = type === "income" ? Number.parseFloat(amount) : -Number.parseFloat(amount)
    await accountsCollection.updateOne({ _id: new ObjectId(accountId) }, { $inc: { balance: newBalanceChange } })

    return NextResponse.json({ message: "Transaction updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Update transaction error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const transactionId = new ObjectId(params.id)
    const transactionsCollection = await getTransactionsCollection()
    const accountsCollection = await getAccountsCollection()

    // Get transaction to reverse account balance
    const transaction = await transactionsCollection.findOne({ _id: transactionId, userId: user._id })
    if (!transaction) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 })
    }

    // Reverse balance
    const balanceChange = transaction.type === "income" ? -transaction.amount : transaction.amount
    await accountsCollection.updateOne({ _id: transaction.accountId }, { $inc: { balance: balanceChange } })

    // Delete transaction
    await transactionsCollection.deleteOne({ _id: transactionId, userId: user._id })

    return NextResponse.json({ message: "Transaction deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Delete transaction error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
