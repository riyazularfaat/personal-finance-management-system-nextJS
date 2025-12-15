module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/personal-finance-system/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAccounts",
    ()=>mockAccounts,
    "mockBudgets",
    ()=>mockBudgets,
    "mockCategories",
    ()=>mockCategories,
    "mockMenus",
    ()=>mockMenus,
    "mockRoleMenuAccess",
    ()=>mockRoleMenuAccess,
    "mockRoles",
    ()=>mockRoles,
    "mockTransactions",
    ()=>mockTransactions,
    "mockUsers",
    ()=>mockUsers
]);
const mockRoles = [
    {
        roleId: "role-1",
        roleName: "Admin"
    },
    {
        roleId: "role-2",
        roleName: "User"
    }
];
const mockUsers = [
    {
        userId: "user-1",
        name: "John Administrator",
        userName: "admin",
        email: "admin@example.com",
        password: "admin123",
        profilePicture: "/placeholder.svg?height=40&width=40",
        currency: "USD",
        roleId: "role-1"
    },
    {
        userId: "user-2",
        name: "Jane Doe",
        userName: "janedoe",
        email: "jane@example.com",
        password: "user123",
        profilePicture: "/placeholder.svg?height=40&width=40",
        currency: "USD",
        roleId: "role-2"
    }
];
const mockMenus = [
    {
        menuId: "menu-1",
        menuName: "Dashboard",
        url: "/dashboard",
        menuIcon: "LayoutDashboard",
        parentMenu: null,
        menuOrder: 1
    },
    {
        menuId: "menu-2",
        menuName: "Transactions",
        url: "/dashboard/transactions",
        menuIcon: "CreditCard",
        parentMenu: null,
        menuOrder: 2
    },
    {
        menuId: "menu-3",
        menuName: "Accounts",
        url: "/dashboard/accounts",
        menuIcon: "Wallet",
        parentMenu: null,
        menuOrder: 3
    },
    {
        menuId: "menu-4",
        menuName: "Budget",
        url: "/dashboard/budget",
        menuIcon: "TrendingUp",
        parentMenu: null,
        menuOrder: 4
    },
    {
        menuId: "menu-5",
        menuName: "Reports",
        url: "/dashboard/reports",
        menuIcon: "BarChart3",
        parentMenu: null,
        menuOrder: 5
    },
    {
        menuId: "menu-6",
        menuName: "Settings",
        url: "/dashboard/settings",
        menuIcon: "Settings",
        parentMenu: null,
        menuOrder: 6
    },
    {
        menuId: "menu-7",
        menuName: "Admin Panel",
        url: "/dashboard/admin",
        menuIcon: "Shield",
        parentMenu: null,
        menuOrder: 7
    },
    {
        menuId: "menu-8",
        menuName: "User Management",
        url: "/dashboard/admin/users",
        menuIcon: "Users",
        parentMenu: "menu-7",
        menuOrder: 1
    },
    {
        menuId: "menu-9",
        menuName: "Role Management",
        url: "/dashboard/admin/roles",
        menuIcon: "Shield",
        parentMenu: "menu-7",
        menuOrder: 2
    }
];
const mockRoleMenuAccess = [
    // Admin has full access to all menus
    {
        roleId: "role-1",
        menuId: "menu-1",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-2",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-3",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-4",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-5",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-6",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-7",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-8",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    {
        roleId: "role-1",
        menuId: "menu-9",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: true
    },
    // Regular User has limited access
    {
        roleId: "role-2",
        menuId: "menu-1",
        isView: true,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-2",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-3",
        isView: true,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-4",
        isView: true,
        isCreate: true,
        isEdit: true,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-5",
        isView: true,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-6",
        isView: true,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-7",
        isView: false,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-8",
        isView: false,
        isCreate: false,
        isEdit: false,
        isDelete: false
    },
    {
        roleId: "role-2",
        menuId: "menu-9",
        isView: false,
        isCreate: false,
        isEdit: false,
        isDelete: false
    }
];
const mockCategories = [
    {
        categoryId: "cat-1",
        title: "Salary",
        icon: "DollarSign"
    },
    {
        categoryId: "cat-2",
        title: "Freelance",
        icon: "Briefcase"
    },
    {
        categoryId: "cat-3",
        title: "Investment",
        icon: "TrendingUp"
    },
    {
        categoryId: "cat-4",
        title: "Groceries",
        icon: "ShoppingCart"
    },
    {
        categoryId: "cat-5",
        title: "Utilities",
        icon: "Zap"
    },
    {
        categoryId: "cat-6",
        title: "Entertainment",
        icon: "Music"
    },
    {
        categoryId: "cat-7",
        title: "Transportation",
        icon: "Car"
    },
    {
        categoryId: "cat-8",
        title: "Healthcare",
        icon: "Heart"
    },
    {
        categoryId: "cat-9",
        title: "Education",
        icon: "BookOpen"
    }
];
const mockTransactions = [
    {
        transactionId: "trans-1",
        categoryId: "cat-1",
        title: "Monthly Salary",
        amount: 5000,
        description: "Monthly salary from employer",
        date: "2024-12-01",
        type: "Income"
    },
    {
        transactionId: "trans-2",
        categoryId: "cat-4",
        title: "Grocery Shopping",
        amount: 150.5,
        description: "Weekly groceries",
        date: "2024-12-03",
        type: "Expense"
    },
    {
        transactionId: "trans-3",
        categoryId: "cat-5",
        title: "Electricity Bill",
        amount: 120,
        description: "Monthly electricity bill",
        date: "2024-12-02",
        type: "Expense"
    },
    {
        transactionId: "trans-4",
        categoryId: "cat-6",
        title: "Movie Tickets",
        amount: 30,
        description: "Cinema with friends",
        date: "2024-12-04",
        type: "Expense"
    },
    {
        transactionId: "trans-5",
        categoryId: "cat-2",
        title: "Freelance Project",
        amount: 800,
        description: "Web development project",
        date: "2024-12-05",
        type: "Income"
    },
    {
        transactionId: "trans-6",
        categoryId: "cat-7",
        title: "Gas",
        amount: 50,
        description: "Fuel for car",
        date: "2024-12-05",
        type: "Expense"
    }
];
const mockBudgets = [
    {
        budgetId: "budget-1",
        categoryId: "cat-4",
        limitAmount: 400,
        period: "Monthly"
    },
    {
        budgetId: "budget-2",
        categoryId: "cat-5",
        limitAmount: 150,
        period: "Monthly"
    },
    {
        budgetId: "budget-3",
        categoryId: "cat-6",
        limitAmount: 200,
        period: "Monthly"
    },
    {
        budgetId: "budget-4",
        categoryId: "cat-7",
        limitAmount: 250,
        period: "Monthly"
    }
];
const mockAccounts = [
    {
        accountId: "acc-1",
        accountName: "Checking Account",
        balance: 5000,
        accountType: "Checking"
    },
    {
        accountId: "acc-2",
        accountName: "Savings Account",
        balance: 15000,
        accountType: "Savings"
    },
    {
        accountId: "acc-3",
        accountName: "Investment Account",
        balance: 25000,
        accountType: "Investment"
    }
];
}),
"[project]/personal-finance-system/components/layout/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Sidebar() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [expandedMenus, setExpandedMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    if (!user) return null;
    // Get accessible menus for current user
    const userMenuAccess = __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRoleMenuAccess"].filter((access)=>access.roleId === user.roleId && access.isView);
    const accessibleMenuIds = new Set(userMenuAccess.map((access)=>access.menuId));
    // Filter and organize menus
    const visibleMenus = __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockMenus"].filter((menu)=>accessibleMenuIds.has(menu.menuId));
    const parentMenus = visibleMenus.filter((menu)=>menu.parentMenu === null);
    const childMenus = (parentId)=>visibleMenus.filter((menu)=>menu.parentMenu === parentId);
    const toggleMenu = (menuId)=>{
        setExpandedMenus((prev)=>prev.includes(menuId) ? prev.filter((id)=>id !== menuId) : [
                ...prev,
                menuId
            ]);
    };
    const getIcon = (iconName)=>{
        const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[iconName];
        return IconComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
            lineNumber: 35,
            columnNumber: 28
        }, this) : null;
    };
    const isActive = (url)=>pathname === url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 border-r border-border bg-background min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-xl",
                        children: "Finance Manager"
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 overflow-y-auto p-4 space-y-2",
                children: parentMenus.map((menu)=>{
                    const children = childMenus(menu.menuId);
                    const hasChildren = children.length > 0;
                    const isExpanded = expandedMenus.includes(menu.menuId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleMenu(menu.menuId),
                                className: "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-accent text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getIcon(menu.menuIcon),
                                            menu.menuName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                lineNumber: 56,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: menu.url,
                                className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(menu.url) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`,
                                children: [
                                    getIcon(menu.menuIcon),
                                    menu.menuName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this),
                            hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4 space-y-1 mt-1",
                                children: children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: child.url,
                                        className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${isActive(child.url) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`,
                                        children: [
                                            getIcon(child.menuIcon),
                                            child.menuName
                                        ]
                                    }, child.menuId, true, {
                                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 17
                            }, this)
                        ]
                    }, menu.menuId, true, {
                        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/personal-finance-system/components/layout/sidebar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/personal-finance-system/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/personal-finance-system/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/personal-finance-system/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/personal-finance-system/components/layout/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Header() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-border bg-background h-16 flex items-center justify-between px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Welcome back,"
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/components/layout/header.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/components/layout/header.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal-finance-system/components/layout/header.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: handleLogout,
                className: "gap-2 bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/components/layout/header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    "Logout"
                ]
            }, void 0, true, {
                fileName: "[project]/personal-finance-system/components/layout/header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/personal-finance-system/components/layout/header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/personal-finance-system/app/dashboard/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/components/layout/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal-finance-system/components/layout/header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DashboardLayout({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Redirect to login if not authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) {
            router.push("/");
        }
    }, [
        user,
        router
    ]);
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/personal-finance-system/app/dashboard/layout.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/personal-finance-system/app/dashboard/layout.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal$2d$finance$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/personal-finance-system/app/dashboard/layout.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal-finance-system/app/dashboard/layout.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/personal-finance-system/app/dashboard/layout.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f495bc2e._.js.map