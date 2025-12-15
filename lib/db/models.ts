import type { ObjectId } from "mongodb"

// User Model
export interface UserModel {
  _id?: ObjectId
  username: string
  email: string
  password: string // hashed
  roleId: ObjectId
  currency: string
  createdAt: Date
  updatedAt: Date
}

// Role Model
export interface RoleModel {
  _id?: ObjectId
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

// Menu Model
export interface MenuModel {
  _id?: ObjectId
  name: string
  url: string
  icon: string
  parentId?: ObjectId | null
  order: number
  createdAt: Date
  updatedAt: Date
}

// RoleMenuAccess Model
export interface RoleMenuAccessModel {
  _id?: ObjectId
  roleId: ObjectId
  menuId: ObjectId
  isView: boolean
  isCreate: boolean
  isEdit: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

// Category Model
export interface CategoryModel {
  _id?: ObjectId
  name: string
  type: "income" | "expense"
  icon: string
  color: string
  userId: ObjectId
  createdAt: Date
  updatedAt: Date
}

// Account Model
export interface AccountModel {
  _id?: ObjectId
  name: string
  type: "checking" | "savings" | "investment" | "credit_card"
  balance: number
  userId: ObjectId
  createdAt: Date
  updatedAt: Date
}

// Transaction Model
export interface TransactionModel {
  _id?: ObjectId
  title: string
  amount: number
  type: "income" | "expense"
  categoryId: ObjectId
  accountId: ObjectId
  date: Date
  description?: string
  userId: ObjectId
  createdAt: Date
  updatedAt: Date
}

// Budget Model
export interface BudgetModel {
  _id?: ObjectId
  categoryId: ObjectId
  amount: number
  spent: number
  period: "monthly" | "yearly"
  startDate: Date
  endDate: Date
  userId: ObjectId
  createdAt: Date
  updatedAt: Date
}

// Session Model for authentication
export interface SessionModel {
  _id?: ObjectId
  userId: ObjectId
  token: string
  expiresAt: Date
  createdAt: Date
}
