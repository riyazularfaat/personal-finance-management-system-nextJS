"use client"

import { useState } from "react"
import { mockBudgets, mockCategories, mockTransactions } from "@/lib/mock-data"
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
import { Progress } from "@/components/ui/progress"
import { Plus, Edit2, Trash2, AlertCircle } from "lucide-react"

export default function BudgetPage() {
  const [budgets, setBudgets] = useState(mockBudgets)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    categoryId: "",
    limitAmount: "",
    period: "Monthly",
  })

  const handleAddBudget = () => {
    if (editingId) {
      setBudgets(
        budgets.map((b) =>
          b.budgetId === editingId
            ? {
                ...b,
                categoryId: formData.categoryId,
                limitAmount: Number.parseFloat(formData.limitAmount),
                period: formData.period as "Monthly" | "Yearly",
              }
            : b,
        ),
      )
      setEditingId(null)
    } else {
      const newBudget = {
        budgetId: `budget-${Date.now()}`,
        categoryId: formData.categoryId,
        limitAmount: Number.parseFloat(formData.limitAmount),
        period: formData.period as "Monthly" | "Yearly",
      }
      setBudgets([...budgets, newBudget])
    }
    setFormData({ categoryId: "", limitAmount: "", period: "Monthly" })
    setIsOpen(false)
  }

  const handleEdit = (budget: (typeof mockBudgets)[0]) => {
    setFormData({
      categoryId: budget.categoryId,
      limitAmount: budget.limitAmount.toString(),
      period: budget.period,
    })
    setEditingId(budget.budgetId)
    setIsOpen(true)
  }

  const handleDelete = (id: string) => {
    setBudgets(budgets.filter((b) => b.budgetId !== id))
  }

  const getCategoryName = (categoryId: string) => {
    return mockCategories.find((c) => c.categoryId === categoryId)?.title || "Unknown"
  }

  const getSpentAmount = (categoryId: string) => {
    return mockTransactions
      .filter((t) => t.categoryId === categoryId && t.type === "Expense")
      .reduce((sum, t) => sum + t.amount, 0)
  }

  const getProgressPercentage = (categoryId: string, limitAmount: number) => {
    const spent = getSpentAmount(categoryId)
    return Math.min((spent / limitAmount) * 100, 100)
  }

  const getTotalBudgetLimit = () => budgets.reduce((sum, b) => sum + b.limitAmount, 0)
  const getTotalSpent = () => budgets.reduce((sum, b) => sum + getSpentAmount(b.categoryId), 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Budget</h1>
          <p className="text-muted-foreground mt-2">Set and track your spending limits</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null)
                setFormData({ categoryId: "", limitAmount: "", period: "Monthly" })
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Budget" : "Add New Budget"}</DialogTitle>
              <DialogDescription>
                {editingId ? "Update your budget details" : "Set a spending limit for a category"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
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
                <Label htmlFor="limitAmount">Spending Limit</Label>
                <Input
                  id="limitAmount"
                  type="number"
                  step="0.01"
                  value={formData.limitAmount}
                  onChange={(e) => setFormData({ ...formData, limitAmount: e.target.value })}
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">Period</Label>
                <Select value={formData.period} onValueChange={(value) => setFormData({ ...formData, period: value })}>
                  <SelectTrigger id="period">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleAddBudget} className="w-full">
                {editingId ? "Update Budget" : "Add Budget"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${getTotalBudgetLimit().toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${getTotalSpent().toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${getTotalBudgetLimit() - getTotalSpent() >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              ${(getTotalBudgetLimit() - getTotalSpent()).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">To spend</p>
          </CardContent>
        </Card>
      </div>

      {/* Budgets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
          <CardDescription>Your spending budgets and progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgets.map((budget) => {
              const spent = getSpentAmount(budget.categoryId)
              const percentage = getProgressPercentage(budget.categoryId, budget.limitAmount)
              const isOverBudget = spent > budget.limitAmount

              return (
                <div key={budget.budgetId} className="space-y-2 pb-4 border-b last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{getCategoryName(budget.categoryId)}</p>
                      <p className="text-sm text-muted-foreground">
                        ${spent.toFixed(2)} spent of ${budget.limitAmount.toFixed(2)} ({budget.period})
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(budget)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(budget.budgetId)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Progress value={percentage} className={isOverBudget ? "bg-red-100" : ""} />
                  {isOverBudget && (
                    <p className="text-xs text-red-600 font-semibold">
                      Over budget by ${(spent - budget.limitAmount).toFixed(2)}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
