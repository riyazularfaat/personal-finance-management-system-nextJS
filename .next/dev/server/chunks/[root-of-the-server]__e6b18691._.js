module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/personal-finance-system/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDatabase",
    ()=>getDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if ("TURBOPACK compile-time truthy", 1) {
    // In development mode, use a global variable to preserve the MongoClient across hot reloads
    const globalWithMongo = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    if (!globalWithMongo._mongoClientPromise) {
        client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else //TURBOPACK unreachable
;
const __TURBOPACK__default__export__ = clientPromise;
async function getDatabase() {
    const client = await clientPromise;
    return client.db("personal_finance");
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/personal-finance-system/lib/db/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateToken",
    ()=>generateToken,
    "getSessionExpiry",
    ()=>getSessionExpiry,
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
async function hashPassword(password) {
    const salt = await __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].genSalt(10);
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, salt);
}
async function verifyPassword(password, hashedPassword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
function generateToken() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("hex");
}
function getSessionExpiry() {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    return expiryDate;
}
}),
"[project]/personal-finance-system/app/api/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/db/utils.ts [app-route] (ecmascript)");
;
;
;
async function POST() {
    try {
        console.log("[v0] Starting database seed...");
        const client = await __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        const db = client.db("personal_finance");
        // Create roles
        const rolesCollection = db.collection("roles");
        await rolesCollection.deleteMany({});
        const adminRole = await rolesCollection.insertOne({
            name: "Admin",
            description: "Administrator with full access",
            createdAt: new Date(),
            updatedAt: new Date()
        });
        const userRole = await rolesCollection.insertOne({
            name: "User",
            description: "Regular user with limited access",
            createdAt: new Date(),
            updatedAt: new Date()
        });
        console.log("[v0] Roles created");
        // Create menus
        const menusCollection = db.collection("menus");
        await menusCollection.deleteMany({});
        const menus = await menusCollection.insertMany([
            {
                name: "Dashboard",
                url: "/dashboard",
                icon: "LayoutDashboard",
                parentId: null,
                order: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Transactions",
                url: "/dashboard/transactions",
                icon: "Receipt",
                parentId: null,
                order: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Accounts",
                url: "/dashboard/accounts",
                icon: "Wallet",
                parentId: null,
                order: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Budget",
                url: "/dashboard/budget",
                icon: "PiggyBank",
                parentId: null,
                order: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Reports",
                url: "/dashboard/reports",
                icon: "BarChart3",
                parentId: null,
                order: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Admin Panel",
                url: "/dashboard/admin",
                icon: "Shield",
                parentId: null,
                order: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Settings",
                url: "/dashboard/settings",
                icon: "Settings",
                parentId: null,
                order: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        console.log("[v0] Menus created");
        // Create role menu access
        const roleMenuAccessCollection = db.collection("role_menu_access");
        await roleMenuAccessCollection.deleteMany({});
        const menuIds = Object.values(menus.insertedIds);
        // Admin has access to all menus
        for (const menuId of menuIds){
            await roleMenuAccessCollection.insertOne({
                roleId: adminRole.insertedId,
                menuId: menuId,
                isView: true,
                isCreate: true,
                isEdit: true,
                isDelete: true,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        // User has access to all except admin panel (index 5)
        for(let i = 0; i < menuIds.length; i++){
            if (i === 5) continue; // Skip admin panel
            await roleMenuAccessCollection.insertOne({
                roleId: userRole.insertedId,
                menuId: menuIds[i],
                isView: true,
                isCreate: true,
                isEdit: true,
                isDelete: true,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        console.log("[v0] Role menu access created");
        // Create users
        const usersCollection = db.collection("users");
        await usersCollection.deleteMany({});
        const adminPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])("admin123");
        const userPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])("user123");
        const adminUser = await usersCollection.insertOne({
            username: "Admin User",
            email: "admin@example.com",
            password: adminPassword,
            roleId: adminRole.insertedId,
            currency: "USD",
            createdAt: new Date(),
            updatedAt: new Date()
        });
        const regularUser = await usersCollection.insertOne({
            username: "Regular User",
            email: "user@example.com",
            password: userPassword,
            roleId: userRole.insertedId,
            currency: "USD",
            createdAt: new Date(),
            updatedAt: new Date()
        });
        console.log("[v0] Users created");
        // Create categories for regular user
        const categoriesCollection = db.collection("categories");
        await categoriesCollection.deleteMany({});
        const categories = await categoriesCollection.insertMany([
            {
                name: "Salary",
                type: "income",
                icon: "💼",
                color: "#10b981",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Freelance",
                type: "income",
                icon: "💻",
                color: "#3b82f6",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Groceries",
                type: "expense",
                icon: "🛒",
                color: "#ef4444",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Transport",
                type: "expense",
                icon: "🚗",
                color: "#f59e0b",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Entertainment",
                type: "expense",
                icon: "🎬",
                color: "#8b5cf6",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        console.log("[v0] Categories created");
        // Create accounts for regular user
        const accountsCollection = db.collection("accounts");
        await accountsCollection.deleteMany({});
        const accounts = await accountsCollection.insertMany([
            {
                name: "Main Checking",
                type: "checking",
                balance: 5000,
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Emergency Fund",
                type: "savings",
                balance: 10000,
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        console.log("[v0] Accounts created");
        // Create sample transactions
        const transactionsCollection = db.collection("transactions");
        await transactionsCollection.deleteMany({});
        const accountIds = Object.values(accounts.insertedIds);
        const categoryIds = Object.values(categories.insertedIds);
        await transactionsCollection.insertMany([
            {
                title: "Monthly Salary",
                amount: 5000,
                type: "income",
                categoryId: categoryIds[0],
                accountId: accountIds[0],
                date: new Date("2024-01-01"),
                description: "January salary payment",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Freelance Project",
                amount: 1500,
                type: "income",
                categoryId: categoryIds[1],
                accountId: accountIds[0],
                date: new Date("2024-01-15"),
                description: "Website development project",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Weekly Groceries",
                amount: 250,
                type: "expense",
                categoryId: categoryIds[2],
                accountId: accountIds[0],
                date: new Date("2024-01-05"),
                description: "Supermarket shopping",
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        console.log("[v0] Transactions created");
        // Create budgets
        const budgetsCollection = db.collection("budgets");
        await budgetsCollection.deleteMany({});
        await budgetsCollection.insertMany([
            {
                categoryId: categoryIds[2],
                amount: 800,
                spent: 0,
                period: "monthly",
                startDate: new Date("2024-01-01"),
                endDate: new Date("2024-01-31"),
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId: categoryIds[3],
                amount: 300,
                spent: 0,
                period: "monthly",
                startDate: new Date("2024-01-01"),
                endDate: new Date("2024-01-31"),
                userId: regularUser.insertedId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        console.log("[v0] Budgets created");
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Database seeded successfully!",
            credentials: {
                admin: {
                    email: "admin@example.com",
                    password: "admin123"
                },
                user: {
                    email: "user@example.com",
                    password: "user123"
                }
            }
        });
    } catch (error) {
        console.error("[v0] Error seeding database:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to seed database",
            details: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e6b18691._.js.map