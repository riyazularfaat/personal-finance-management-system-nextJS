"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!user) return null

  return (
    <header className="border-b border-border bg-background h-16 flex items-center justify-between px-6">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back,</p>
        <p className="font-semibold">{user.name}</p>
      </div>
      <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 bg-transparent">
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </header>
  )
}
