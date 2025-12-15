"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User, AuthContextType } from "./types"

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          // Map API response to User type
          setUser({
            userId: data.user.id,
            username: data.user.username,
            email: data.user.email,
            roleId: data.user.roleId,
            roleName: data.user.roleName,
            currency: data.user.currency,
            password: "", // Not needed on client side
          })
        }
      } catch (error) {
        console.error("[v0] Auth check failed:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      console.log("[v0] Attempting login...")
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        console.error("[v0] Received non-JSON response from API")
        throw new Error("Server error. Please make sure the database is seeded and MongoDB is connected.")
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }

      setUser({
        userId: data.user.id,
        username: data.user.username,
        email: data.user.email,
        roleId: data.user.roleId,
        roleName: data.user.roleName,
        currency: data.user.currency,
        password: "",
      })
    } catch (error) {
      console.error("[v0] Login error:", error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
    setUser(null)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
