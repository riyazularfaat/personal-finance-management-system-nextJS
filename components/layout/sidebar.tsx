"use client"

import type React from "react"

import { useAuth } from "@/lib/auth-context"
import { mockMenus, mockRoleMenuAccess } from "@/lib/mock-data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Icons from "lucide-react"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const { user } = useAuth()
  const pathname = usePathname()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  if (!user) return null

  // Get accessible menus for current user
  const userMenuAccess = mockRoleMenuAccess.filter((access) => access.roleId === user.roleId && access.isView)
  const accessibleMenuIds = new Set(userMenuAccess.map((access) => access.menuId))

  // Filter and organize menus
  const visibleMenus = mockMenus.filter((menu) => accessibleMenuIds.has(menu.menuId))
  const parentMenus = visibleMenus.filter((menu) => menu.parentMenu === null)
  const childMenus = (parentId: string | null) => visibleMenus.filter((menu) => menu.parentMenu === parentId)

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => (prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]))
  }

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className: string }>
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const isActive = (url: string) => pathname === url

  return (
    <aside className="w-64 border-r border-border bg-background min-h-screen flex flex-col">
      <div className="p-4 border-b border-border">
        <h1 className="font-bold text-xl">Finance Manager</h1>
        <p className="text-xs text-muted-foreground mt-1">{user.name}</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {parentMenus.map((menu) => {
          const children = childMenus(menu.menuId)
          const hasChildren = children.length > 0
          const isExpanded = expandedMenus.includes(menu.menuId)

          return (
            <div key={menu.menuId}>
              {hasChildren ? (
                <button
                  onClick={() => toggleMenu(menu.menuId)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-accent text-foreground"
                >
                  <span className="flex items-center gap-2">
                    {getIcon(menu.menuIcon)}
                    {menu.menuName}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  href={menu.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(menu.url) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
                  }`}
                >
                  {getIcon(menu.menuIcon)}
                  {menu.menuName}
                </Link>
              )}

              {hasChildren && isExpanded && (
                <div className="ml-4 space-y-1 mt-1">
                  {children.map((child) => (
                    <Link
                      key={child.menuId}
                      href={child.url}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive(child.url) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {getIcon(child.menuIcon)}
                      {child.menuName}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
