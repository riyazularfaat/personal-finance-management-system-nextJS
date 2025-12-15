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
"[project]/personal-finance-system/lib/db/collections.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAccountsCollection",
    ()=>getAccountsCollection,
    "getBudgetsCollection",
    ()=>getBudgetsCollection,
    "getCategoriesCollection",
    ()=>getCategoriesCollection,
    "getMenusCollection",
    ()=>getMenusCollection,
    "getRoleMenuAccessCollection",
    ()=>getRoleMenuAccessCollection,
    "getRolesCollection",
    ()=>getRolesCollection,
    "getSessionsCollection",
    ()=>getSessionsCollection,
    "getTransactionsCollection",
    ()=>getTransactionsCollection,
    "getUsersCollection",
    ()=>getUsersCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/mongodb.ts [app-route] (ecmascript)");
;
async function getUsersCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("users");
}
async function getRolesCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("roles");
}
async function getMenusCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("menus");
}
async function getRoleMenuAccessCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("role_menu_access");
}
async function getCategoriesCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("categories");
}
async function getAccountsCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("accounts");
}
async function getTransactionsCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("transactions");
}
async function getBudgetsCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("budgets");
}
async function getSessionsCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDatabase"])();
    return db.collection("sessions");
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
"[project]/personal-finance-system/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/db/collections.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/db/utils.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        console.log("[v0] Login API called");
        const { email, password } = await request.json();
        if (!email || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Email and password are required"
            }, {
                status: 400
            });
        }
        // Find user by email
        const usersCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUsersCollection"])();
        const user = await usersCollection.findOne({
            email
        });
        if (!user) {
            console.log("[v0] User not found:", email);
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // Verify password
        const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.password);
        if (!isValid) {
            console.log("[v0] Invalid password for:", email);
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // Get user role
        const rolesCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRolesCollection"])();
        const role = await rolesCollection.findOne({
            _id: user.roleId
        });
        // Create session
        const sessionsCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionsCollection"])();
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateToken"])();
        const expiresAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionExpiry"])();
        await sessionsCollection.insertOne({
            userId: user._id,
            token,
            expiresAt,
            createdAt: new Date()
        });
        // Return user data without password
        const userData = {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            roleId: user.roleId.toString(),
            roleName: role?.name || "User",
            currency: user.currency
        };
        console.log("[v0] Login successful for:", email);
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: userData
        }, {
            status: 200
        });
        // Set cookie
        response.cookies.set("session_token", token, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7
        });
        return response;
    } catch (error) {
        console.error("[v0] Login error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error. Please make sure the database is seeded."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00b81cca._.js.map