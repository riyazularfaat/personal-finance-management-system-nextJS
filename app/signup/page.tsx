"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Wallet, Database } from "lucide-react"

export default function SignupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [needsSeeding, setNeedsSeeding] = useState(false)
    const [isSeeding, setIsSeeding] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSeedDatabase = async () => {
        setIsSeeding(true)
        setError("")
        setNeedsSeeding(false)

        try {
            const response = await fetch("/api/seed", {
                method: "POST",
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to seed database")
            }

            setSuccess(true)
            setError("")
            setTimeout(() => {
                setSuccess(false)
                setNeedsSeeding(false)
            }, 3000)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to seed database")
        } finally {
            setIsSeeding(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setSuccess(false)
        setNeedsSeeding(false)

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long")
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    currency: "USD",
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.error && data.error.includes("seed the database")) {
                    setNeedsSeeding(true)
                }
                throw new Error(data.error || "Registration failed")
            }

            setSuccess(true)
            setTimeout(() => {
                router.push("/login")
            }, 2000)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Registration failed")
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
                        <CardTitle className="text-2xl">Create Your Account</CardTitle>
                        <CardDescription>Start managing your finances today</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md flex gap-2 items-start">
                                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm">{error}</p>
                                </div>
                            )}

                            {success && (
                                <div className="bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 px-4 py-3 rounded-md flex gap-2 items-start">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm">
                                        {needsSeeding
                                            ? "Database seeded successfully! You can now sign up."
                                            : "Account created successfully! Redirecting to login..."}
                                    </p>
                                </div>
                            )}

                            {needsSeeding && !success && (
                                <div className="bg-blue-500/10 border border-blue-500 rounded-md p-4 space-y-3">
                                    <div className="flex gap-2 items-start text-blue-700 dark:text-blue-400">
                                        <Database className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <div className="text-sm">
                                            <p className="font-medium mb-1">Database Not Initialized</p>
                                            <p className="text-xs opacity-90">
                                                Click the button below to set up the database with default roles and demo users.
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        type="button"
                                        onClick={handleSeedDatabase}
                                        disabled={isSeeding}
                                        className="w-full bg-transparent"
                                        variant="outline"
                                    >
                                        {isSeeding ? "Seeding Database..." : "Initialize Database"}
                                    </Button>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium">
                                    Username
                                </label>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="johndoe"
                                    value={formData.username}
                                    onChange={handleChange}
                                    disabled={isLoading || success}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isLoading || success}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Minimum 6 characters"
                                    value={formData.password}
                                    onChange={handleChange}
                                    disabled={isLoading || success}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium">
                                    Confirm Password
                                </label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    disabled={isLoading || success}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading || success}>
                                {isLoading ? "Creating account..." : "Sign Up"}
                            </Button>

                            <div className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link href="/login" className="text-primary hover:underline font-medium">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
