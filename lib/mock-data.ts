import type { User, Role, Menu, RoleMenuAccess, Category, Transaction, Budget, Account } from "./types"

// Mock Roles
export const mockRoles: Role[] = [
  { roleId: "role-1", roleName: "Admin" },
  { roleId: "role-2", roleName: "User" },
]

// Mock Users
export const mockUsers: User[] = [
  {
    userId: "user-1",
    name: "John Administrator",
    userName: "admin",
    email: "admin@example.com",
    password: "admin123",
    profilePicture: "/placeholder.svg?height=40&width=40",
    currency: "USD",
    roleId: "role-1",
  },
  {
    userId: "user-2",
    name: "Jane Doe",
    userName: "janedoe",
    email: "jane@example.com",
    password: "user123",
    profilePicture: "/placeholder.svg?height=40&width=40",
    currency: "USD",
    roleId: "role-2",
  },
]

// Mock Hierarchical Menu
export const mockMenus: Menu[] = [
  {
    menuId: "menu-1",
    menuName: "Dashboard",
    url: "/dashboard",
    menuIcon: "LayoutDashboard",
    parentMenu: null,
    menuOrder: 1,
  },
  {
    menuId: "menu-2",
    menuName: "Transactions",
    url: "/dashboard/transactions",
    menuIcon: "CreditCard",
    parentMenu: null,
    menuOrder: 2,
  },
  {
    menuId: "menu-3",
    menuName: "Accounts",
    url: "/dashboard/accounts",
    menuIcon: "Wallet",
    parentMenu: null,
    menuOrder: 3,
  },
  {
    menuId: "menu-4",
    menuName: "Budget",
    url: "/dashboard/budget",
    menuIcon: "TrendingUp",
    parentMenu: null,
    menuOrder: 4,
  },
  {
    menuId: "menu-5",
    menuName: "Reports",
    url: "/dashboard/reports",
    menuIcon: "BarChart3",
    parentMenu: null,
    menuOrder: 5,
  },
  {
    menuId: "menu-6",
    menuName: "Settings",
    url: "/dashboard/settings",
    menuIcon: "Settings",
    parentMenu: null,
    menuOrder: 6,
  },
  {
    menuId: "menu-7",
    menuName: "Admin Panel",
    url: "/dashboard/admin",
    menuIcon: "Shield",
    parentMenu: null,
    menuOrder: 7,
  },
  {
    menuId: "menu-8",
    menuName: "User Management",
    url: "/dashboard/admin/users",
    menuIcon: "Users",
    parentMenu: "menu-7",
    menuOrder: 1,
  },
  {
    menuId: "menu-9",
    menuName: "Role Management",
    url: "/dashboard/admin/roles",
    menuIcon: "Shield",
    parentMenu: "menu-7",
    menuOrder: 2,
  },
]

// Mock RoleMenuAccess - Controls what each role can see and do
export const mockRoleMenuAccess: RoleMenuAccess[] = [
  // Admin has full access to all menus
  { roleId: "role-1", menuId: "menu-1", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-2", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-3", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-4", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-5", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-6", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-7", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-8", isView: true, isCreate: true, isEdit: true, isDelete: true },
  { roleId: "role-1", menuId: "menu-9", isView: true, isCreate: true, isEdit: true, isDelete: true },

  // Regular User has limited access
  { roleId: "role-2", menuId: "menu-1", isView: true, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-2", isView: true, isCreate: true, isEdit: true, isDelete: false },
  { roleId: "role-2", menuId: "menu-3", isView: true, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-4", isView: true, isCreate: true, isEdit: true, isDelete: false },
  { roleId: "role-2", menuId: "menu-5", isView: true, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-6", isView: true, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-7", isView: false, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-8", isView: false, isCreate: false, isEdit: false, isDelete: false },
  { roleId: "role-2", menuId: "menu-9", isView: false, isCreate: false, isEdit: false, isDelete: false },
]

// Mock Categories
export const mockCategories: Category[] = [
  { categoryId: "cat-1", title: "Salary", icon: "DollarSign" },
  { categoryId: "cat-2", title: "Freelance", icon: "Briefcase" },
  { categoryId: "cat-3", title: "Investment", icon: "TrendingUp" },
  { categoryId: "cat-4", title: "Groceries", icon: "ShoppingCart" },
  { categoryId: "cat-5", title: "Utilities", icon: "Zap" },
  { categoryId: "cat-6", title: "Entertainment", icon: "Music" },
  { categoryId: "cat-7", title: "Transportation", icon: "Car" },
  { categoryId: "cat-8", title: "Healthcare", icon: "Heart" },
  { categoryId: "cat-9", title: "Education", icon: "BookOpen" },
]

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    transactionId: "trans-1",
    categoryId: "cat-1",
    title: "Monthly Salary",
    amount: 5000,
    description: "Monthly salary from employer",
    date: "2024-12-01",
    type: "Income",
  },
  {
    transactionId: "trans-2",
    categoryId: "cat-4",
    title: "Grocery Shopping",
    amount: 150.5,
    description: "Weekly groceries",
    date: "2024-12-03",
    type: "Expense",
  },
  {
    transactionId: "trans-3",
    categoryId: "cat-5",
    title: "Electricity Bill",
    amount: 120,
    description: "Monthly electricity bill",
    date: "2024-12-02",
    type: "Expense",
  },
  {
    transactionId: "trans-4",
    categoryId: "cat-6",
    title: "Movie Tickets",
    amount: 30,
    description: "Cinema with friends",
    date: "2024-12-04",
    type: "Expense",
  },
  {
    transactionId: "trans-5",
    categoryId: "cat-2",
    title: "Freelance Project",
    amount: 800,
    description: "Web development project",
    date: "2024-12-05",
    type: "Income",
  },
  {
    transactionId: "trans-6",
    categoryId: "cat-7",
    title: "Gas",
    amount: 50,
    description: "Fuel for car",
    date: "2024-12-05",
    type: "Expense",
  },
]

// Mock Budgets
export const mockBudgets: Budget[] = [
  { budgetId: "budget-1", categoryId: "cat-4", limitAmount: 400, period: "Monthly" },
  { budgetId: "budget-2", categoryId: "cat-5", limitAmount: 150, period: "Monthly" },
  { budgetId: "budget-3", categoryId: "cat-6", limitAmount: 200, period: "Monthly" },
  { budgetId: "budget-4", categoryId: "cat-7", limitAmount: 250, period: "Monthly" },
]

// Mock Accounts
export const mockAccounts: Account[] = [
  {
    accountId: "acc-1",
    accountName: "Checking Account",
    balance: 5000,
    accountType: "Checking",
  },
  {
    accountId: "acc-2",
    accountName: "Savings Account",
    balance: 15000,
    accountType: "Savings",
  },
  {
    accountId: "acc-3",
    accountName: "Investment Account",
    balance: 25000,
    accountType: "Investment",
  },
]
