"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Wallet } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showDbCheck, setShowDbCheck] = useState(false)
    const [dbStatus, setDbStatus] = useState<any>(null)

    const checkDatabase = async () => {
        try {
            const res = await fetch("/api/test-db")
            const data = await res.json()
            setDbStatus(data)
            setShowDbCheck(true)
        } catch (err) {
            setDbStatus({ error: "Failed to check database" })
            setShowDbCheck(true)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        console.log("[v0] Attempting login with:", email)

        try {
            await login(email, password)
            console.log("[v0] Login successful, redirecting to dashboard")
            router.push("/dashboard")
        } catch (err) {
            console.error("[v0] Login error:", err)
            setError(err instanceof Error ? err.message : "Login failed")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <Wallet className="w-8 h-8 text-primary" />
                        <span className="text-2xl font-bold">FinanceManager</span>
                    </Link>
                </div>
                <Card className="border-2">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Welcome Back</CardTitle>
                        <CardDescription>Sign in to your account to continue</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md">
                                    <div className="flex gap-2 items-start">
                                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{error}</p>
                                            <button
                                                type="button"
                                                onClick={checkDatabase}
                                                className="text-xs underline mt-2 hover:no-underline"
                                            >
                                                Check Database Status
                                            </button>
                                        </div>
                                    </div>
                                    {showDbCheck && dbStatus && (
                                        <div className="mt-3 p-2 bg-background/50 rounded text-xs">
                                            <pre className="overflow-auto">{JSON.stringify(dbStatus, null, 2)}</pre>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isLoading}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>

                            <div className="text-center text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-primary hover:underline font-medium">
                                    Sign up
                                </Link>
                            </div>
                        </form>

                        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                            <p className="text-xs font-medium mb-2">Demo Credentials:</p>
                            <div className="space-y-1 text-xs text-muted-foreground">
                                <p>Admin: admin@example.com / admin123</p>
                                <p>User: user@example.com / user123</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
