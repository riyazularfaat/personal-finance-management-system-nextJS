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
"[project]/personal-finance-system/app/api/test-db/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/db/collections.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const usersCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUsersCollection"])();
        const users = await usersCollection.find({}).toArray();
        const rolesCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$db$2f$collections$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRolesCollection"])();
        const roles = await rolesCollection.find({}).toArray();
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            userCount: users.length,
            roleCount: roles.length,
            users: users.map((u)=>({
                    email: u.email,
                    username: u.username,
                    hasPassword: !!u.password,
                    passwordLength: u.password?.length || 0
                })),
            roles: roles.map((r)=>({
                    name: r.name
                }))
        });
    } catch (error) {
        console.error("[v0] Test DB error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Database connection failed",
            details: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f15623d._.js.map