// TypeScript interfaces for Personal Finance Management System

export interface User {
  userId: string
  name: string
  userName: string
  email: string
  password: string
  profilePicture: string
  currency: string
  roleId: string
}

export interface Role {
  roleId: string
  roleName: string
}

export interface Menu {
  menuId: string
  menuName: string
  url: string
  menuIcon: string
  parentMenu: string | null
  menuOrder: number
}

export interface RoleMenuAccess {
  roleId: string
  menuId: string
  isView: boolean
  isCreate: boolean
  isEdit: boolean
  isDelete: boolean
}

export interface Category {
  categoryId: string
  title: string
  icon: string
}

export interface Transaction {
  transactionId: string
  categoryId: string
  title: string
  amount: number
  description: string
  date: string
  type: "Income" | "Expense"
}

export interface Budget {
  budgetId: string
  categoryId: string
  limitAmount: number
  period: "Monthly" | "Yearly"
}

export interface Account {
  accountId: string
  accountName: string
  balance: number
  accountType: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}
