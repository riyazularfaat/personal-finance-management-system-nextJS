"use client"

import { useState } from "react"
import { mockTransactions, mockCategories } from "@/lib/mock-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Edit2 } from "lucide-react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(mockTransactions)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    categoryId: "",
    type: "Expense" as "Income" | "Expense",
    description: "",
    date: new Date().toISOString().split("T")[0],
  })

  const handleAddTransaction = () => {
    if (editingId) {
      setTransactions(
        transactions.map((t) =>
          t.transactionId === editingId ? { ...t, ...formData, amount: Number.parseFloat(formData.amount) } : t,
        ),
      )
      setEditingId(null)
    } else {
      const newTransaction = {
        transactionId: `trans-${Date.now()}`,
        categoryId: formData.categoryId,
        title: formData.title,
        amount: Number.parseFloat(formData.amount),
        description: formData.description,
        date: formData.date,
        type: formData.type,
      }
      setTransactions([...transactions, newTransaction])
    }
    setFormData({
      title: "",
      amount: "",
      categoryId: "",
      type: "Expense",
      description: "",
      date: new Date().toISOString().split("T")[0],
    })
    setIsOpen(false)
  }

  const handleEdit = (transaction: (typeof mockTransactions)[0]) => {
    setFormData({
      title: transaction.title,
      amount: transaction.amount.toString(),
      categoryId: transaction.categoryId,
      type: transaction.type,
      description: transaction.description,
      date: transaction.date,
    })
    setEditingId(transaction.transactionId)
    setIsOpen(true)
  }

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter((t) => t.transactionId !== id))
  }

  const getCategoryName = (categoryId: string) => {
    return mockCategories.find((c) => c.categoryId === categoryId)?.title || "Unknown"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground mt-2">Manage your income and expenses</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null)
                setFormData({
                  title: "",
                  amount: "",
                  categoryId: "",
                  type: "Expense",
                  description: "",
                  date: new Date().toISOString().split("T")[0],
                })
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Transaction" : "Add New Transaction"}</DialogTitle>
              <DialogDescription>
                {editingId ? "Update the transaction details below" : "Enter the details for your new transaction"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Grocery Shopping"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value as "Income" | "Expense" })}
                  >
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Income">Income</SelectItem>
                      <SelectItem value="Expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.categoryId}
                  onValueChange={(value) => setFormData({ ...formData, categoryId: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCategories.map((cat) => (
                      <SelectItem key={cat.categoryId} value={cat.categoryId}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Add any notes about this transaction"
                />
              </div>

              <Button onClick={handleAddTransaction} className="w-full">
                {editingId ? "Update Transaction" : "Add Transaction"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Total: {transactions.length} transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{transaction.title}</p>
                        <p className="text-xs text-muted-foreground">{transaction.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryName(transaction.categoryId)}</TableCell>
                    <TableCell>
                      <Badge variant={transaction.type === "Income" ? "default" : "destructive"}>
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell
                      className={
                        transaction.type === "Income" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
                      }
                    >
                      {transaction.type === "Income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(transaction)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(transaction.transactionId)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
