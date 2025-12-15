import clientPromise from "@/lib/mongodb"
import { hashPassword } from "@/lib/db/utils"

async function seed() {
  console.log("[v0] Starting database seed...")

  const client = await clientPromise
  const db = client.db("personal_finance")

  // Create roles
  const rolesCollection = db.collection("roles")
  await rolesCollection.deleteMany({})

  const adminRole = await rolesCollection.insertOne({
    name: "Admin",
    description: "Administrator with full access",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const userRole = await rolesCollection.insertOne({
    name: "User",
    description: "Regular user with limited access",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  console.log("[v0] Roles created")

  // Create menus
  const menusCollection = db.collection("menus")
  await menusCollection.deleteMany({})

  const dashboard = await menusCollection.insertOne({
    name: "Dashboard",
    url: "/dashboard",
    icon: "LayoutDashboard",
    parentId: null,
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const transactions = await menusCollection.insertOne({
    name: "Transactions",
    url: "/dashboard/transactions",
    icon: "Receipt",
    parentId: null,
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const accounts = await menusCollection.insertOne({
    name: "Accounts",
    url: "/dashboard/accounts",
    icon: "Wallet",
    parentId: null,
    order: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const budget = await menusCollection.insertOne({
    name: "Budget",
    url: "/dashboard/budget",
    icon: "PiggyBank",
    parentId: null,
    order: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const reports = await menusCollection.insertOne({
    name: "Reports",
    url: "/dashboard/reports",
    icon: "BarChart3",
    parentId: null,
    order: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const admin = await menusCollection.insertOne({
    name: "Admin Panel",
    url: "/dashboard/admin",
    icon: "Shield",
    parentId: null,
    order: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const settings = await menusCollection.insertOne({
    name: "Settings",
    url: "/dashboard/settings",
    icon: "Settings",
    parentId: null,
    order: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  console.log("[v0] Menus created")

  // Create role menu access
  const roleMenuAccessCollection = db.collection("role_menu_access")
  await roleMenuAccessCollection.deleteMany({})

  const allMenus = [dashboard, transactions, accounts, budget, reports, admin, settings]

  // Admin has access to all menus
  for (const menu of allMenus) {
    await roleMenuAccessCollection.insertOne({
      roleId: adminRole.insertedId,
      menuId: menu.insertedId,
      isView: true,
      isCreate: true,
      isEdit: true,
      isDelete: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  // User has access to all except admin panel
  for (const menu of allMenus) {
    if (menu.insertedId.equals(admin.insertedId)) continue

    await roleMenuAccessCollection.insertOne({
      roleId: userRole.insertedId,
      menuId: menu.insertedId,
      isView: true,
      isCreate: true,
      isEdit: true,
      isDelete: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  console.log("[v0] Role menu access created")

  // Create users
  const usersCollection = db.collection("users")
  await usersCollection.deleteMany({})

  const adminPassword = await hashPassword("admin123")
  const userPassword = await hashPassword("user123")

  const adminUser = await usersCollection.insertOne({
    username: "Admin User",
    email: "admin@example.com",
    password: adminPassword,
    roleId: adminRole.insertedId,
    currency: "USD",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const regularUser = await usersCollection.insertOne({
    username: "Regular User",
    email: "user@example.com",
    password: userPassword,
    roleId: userRole.insertedId,
    currency: "USD",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  console.log("[v0] Users created")

  // Create categories for regular user
  const categoriesCollection = db.collection("categories")
  await categoriesCollection.deleteMany({})

  const salaryCategory = await categoriesCollection.insertOne({
    name: "Salary",
    type: "income",
    icon: "💼",
    color: "#10b981",
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const freelanceCategory = await categoriesCollection.insertOne({
    name: "Freelance",
    type: "income",
    icon: "💻",
    color: "#3b82f6",
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const groceriesCategory = await categoriesCollection.insertOne({
    name: "Groceries",
    type: "expense",
    icon: "🛒",
    color: "#ef4444",
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const transportCategory = await categoriesCollection.insertOne({
    name: "Transport",
    type: "expense",
    icon: "🚗",
    color: "#f59e0b",
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const entertainmentCategory = await categoriesCollection.insertOne({
    name: "Entertainment",
    type: "expense",
    icon: "🎬",
    color: "#8b5cf6",
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  console.log("[v0] Categories created")

  // Create accounts for regular user
  const accountsCollection = db.collection("accounts")
  await accountsCollection.deleteMany({})

  const checkingAccount = await accountsCollection.insertOne({
    name: "Main Checking",
    type: "checking",
    balance: 5000,
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const savingsAccount = await accountsCollection.insertOne({
    name: "Emergency Fund",
    type: "savings",
    balance: 10000,
    userId: regularUser.insertedId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  console.log("[v0] Accounts created")

  // Create sample transactions for regular user
  const transactionsCollection = db.collection("transactions")
  await transactionsCollection.deleteMany({})

  await transactionsCollection.insertMany([
    {
      title: "Monthly Salary",
      amount: 5000,
      type: "income",
      categoryId: salaryCategory.insertedId,
      accountId: checkingAccount.insertedId,
      date: new Date("2024-01-01"),
      description: "January salary payment",
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Freelance Project",
      amount: 1500,
      type: "income",
      categoryId: freelanceCategory.insertedId,
      accountId: checkingAccount.insertedId,
      date: new Date("2024-01-15"),
      description: "Website development project",
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Weekly Groceries",
      amount: 250,
      type: "expense",
      categoryId: groceriesCategory.insertedId,
      accountId: checkingAccount.insertedId,
      date: new Date("2024-01-05"),
      description: "Supermarket shopping",
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Gas Station",
      amount: 60,
      type: "expense",
      categoryId: transportCategory.insertedId,
      accountId: checkingAccount.insertedId,
      date: new Date("2024-01-10"),
      description: "Fuel for car",
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Movie Tickets",
      amount: 30,
      type: "expense",
      categoryId: entertainmentCategory.insertedId,
      accountId: checkingAccount.insertedId,
      date: new Date("2024-01-20"),
      description: "Weekend movie",
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

  console.log("[v0] Transactions created")

  // Create budgets for regular user
  const budgetsCollection = db.collection("budgets")
  await budgetsCollection.deleteMany({})

  await budgetsCollection.insertMany([
    {
      categoryId: groceriesCategory.insertedId,
      amount: 800,
      spent: 0,
      period: "monthly",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-31"),
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: transportCategory.insertedId,
      amount: 300,
      spent: 0,
      period: "monthly",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-31"),
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: entertainmentCategory.insertedId,
      amount: 200,
      spent: 0,
      period: "monthly",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-31"),
      userId: regularUser.insertedId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

  console.log("[v0] Budgets created")

  console.log("[v0] Database seeded successfully!")
  console.log("\n[v0] You can now login with:")
  console.log("[v0] Admin: admin@example.com / admin123")
  console.log("[v0] User: user@example.com / user123")

  process.exit(0)
}

seed().catch((error) => {
  console.error("[v0] Error seeding database:", error)
  process.exit(1)
})
