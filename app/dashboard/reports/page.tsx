"use client"

import { mockTransactions, mockCategories, mockAccounts } from "@/lib/mock-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, TrendingDown, Calendar, Download, FileText } from "lucide-react"

export default function ReportsPage() {
  // Calculate monthly trends
  const monthlyData = Array.from({ length: 12 }, (_, i) => {
    const month = new Date(2024, i, 1).toLocaleString("default", { month: "short" })
    const monthTransactions = mockTransactions.filter((t) => {
      const tMonth = new Date(t.date).getMonth()
      return tMonth === i
    })

    const income = monthTransactions.filter((t) => t.type === "Income").reduce((sum, t) => sum + t.amount, 0)
    const expense = monthTransactions.filter((t) => t.type === "Expense").reduce((sum, t) => sum + t.amount, 0)

    return {
      month,
      income,
      expense,
      net: income - expense,
    }
  })

  // Category analysis
  const categoryAnalysis = mockCategories
    .map((cat) => {
      const transactions = mockTransactions.filter((t) => t.categoryId === cat.categoryId)
      const total = transactions.reduce((sum, t) => (t.type === "Expense" ? sum + t.amount : sum), 0)
      const count = transactions.length

      return {
        category: cat.title,
        total,
        count,
        average: count > 0 ? total / count : 0,
      }
    })
    .filter((item) => item.total > 0)
    .sort((a, b) => b.total - a.total)

  // Account distribution
  const accountData = mockAccounts.map((acc) => ({
    name: acc.accountName,
    value: acc.balance,
  }))

  // Income vs Expense ratio
  const totalIncome = mockTransactions.filter((t) => t.type === "Income").reduce((sum, t) => sum + t.amount, 0)
  const totalExpense = mockTransactions.filter((t) => t.type === "Expense").reduce((sum, t) => sum + t.amount, 0)
  const netSavings = totalIncome - totalExpense

  // Export functions for PDF and CSV
  const exportToCSV = () => {
    const headers = ["Date", "Category", "Description", "Amount", "Type"]
    const csvContent = [
      headers.join(","),
      ...mockTransactions.map((t) => {
        const category = mockCategories.find((c) => c.categoryId === t.categoryId)?.title || "Unknown"
        return [t.date, category, t.title, t.amount, t.type].join(",")
      }),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `financial-report-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const exportToPDF = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Financial Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; }
            .summary { margin: 20px 0; }
            .summary-item { display: inline-block; margin-right: 40px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>Financial Report</h1>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          
          <div class="summary">
            <div class="summary-item">
              <strong>Total Income:</strong> $${totalIncome.toFixed(2)}
            </div>
            <div class="summary-item">
              <strong>Total Expenses:</strong> $${totalExpense.toFixed(2)}
            </div>
            <div class="summary-item">
              <strong>Net Savings:</strong> $${netSavings.toFixed(2)}
            </div>
          </div>

          <h2>Transaction Details</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
            ${mockTransactions
              .map(
                (t) => `
              <tr>
                <td>${t.date}</td>
                <td>${mockCategories.find((c) => c.categoryId === t.categoryId)?.title || "Unknown"}</td>
                <td>${t.title}</td>
                <td>$${t.amount.toFixed(2)}</td>
                <td>${t.type}</td>
              </tr>
            `,
              )
              .join("")}
          </table>
        </body>
      </html>
    `

    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `financial-report-${new Date().toISOString().split("T")[0]}.pdf`
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">Comprehensive financial insights and trends</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={exportToCSV} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button onClick={exportToPDF} variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">From all sources</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${totalExpense.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">All spending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Savings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${netSavings.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">Income - Expenses</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trend</CardTitle>
          <CardDescription>Income and expenses over the year</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#10b981" name="Income" strokeWidth={2} />
              <Line type="monotone" dataKey="expense" stroke="#ef4444" name="Expense" strokeWidth={2} />
              <Line type="monotone" dataKey="net" stroke="#3b82f6" name="Net" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Net Income Area Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Net Income Trend</CardTitle>
          <CardDescription>Your savings trend throughout the year</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="net" fill="#3b82f6" stroke="#3b82f6" name="Net Income" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Category Analysis</CardTitle>
          <CardDescription>Top spending categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryAnalysis}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#f59e0b" name="Total Spent" />
              <Bar dataKey="average" fill="#8b5cf6" name="Average" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Category Breakdown</CardTitle>
          <CardDescription>Analysis of spending by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-right py-3 px-4 font-semibold">Total</th>
                  <th className="text-right py-3 px-4 font-semibold">Count</th>
                  <th className="text-right py-3 px-4 font-semibold">Average</th>
                </tr>
              </thead>
              <tbody>
                {categoryAnalysis.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50">
                    <td className="py-3 px-4">{item.category}</td>
                    <td className="text-right py-3 px-4 font-medium">${item.total.toFixed(2)}</td>
                    <td className="text-right py-3 px-4">{item.count}</td>
                    <td className="text-right py-3 px-4">${item.average.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
