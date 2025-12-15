import { getDatabase } from "@/lib/mongodb"
import type {
  UserModel,
  RoleModel,
  MenuModel,
  RoleMenuAccessModel,
  CategoryModel,
  AccountModel,
  TransactionModel,
  BudgetModel,
  SessionModel,
} from "./models"

export async function getUsersCollection() {
  const db = await getDatabase()
  return db.collection<UserModel>("users")
}

export async function getRolesCollection() {
  const db = await getDatabase()
  return db.collection<RoleModel>("roles")
}

export async function getMenusCollection() {
  const db = await getDatabase()
  return db.collection<MenuModel>("menus")
}

export async function getRoleMenuAccessCollection() {
  const db = await getDatabase()
  return db.collection<RoleMenuAccessModel>("role_menu_access")
}

export async function getCategoriesCollection() {
  const db = await getDatabase()
  return db.collection<CategoryModel>("categories")
}

export async function getAccountsCollection() {
  const db = await getDatabase()
  return db.collection<AccountModel>("accounts")
}

export async function getTransactionsCollection() {
  const db = await getDatabase()
  return db.collection<TransactionModel>("transactions")
}

export async function getBudgetsCollection() {
  const db = await getDatabase()
  return db.collection<BudgetModel>("budgets")
}

export async function getSessionsCollection() {
  const db = await getDatabase()
  return db.collection<SessionModel>("sessions")
}
