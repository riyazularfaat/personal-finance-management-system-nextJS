"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, TrendingUp, Wallet, Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">FinanceManager</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 10,000+ users worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
            Powerful personal finance management designed for individuals who want to track expenses, manage budgets,
            and achieve their financial goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-base px-8">
                Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Manage Your Money</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools to track, analyze, and optimize your financial health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transaction Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor all your income and expenses in one place with detailed categorization and smart insights.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set spending limits for each category and track your progress with visual indicators and alerts.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiple Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage checking, savings, investment, and credit card accounts all in one unified dashboard.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is protected with industry-standard encryption and secure authentication protocols.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reports & Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gain insights with comprehensive reports, charts, and export capabilities for detailed analysis.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Role-Based Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Admin controls for families or teams with customizable permissions and access levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make Better Financial Decisions with Real-Time Insights
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our platform provides you with the tools and visibility you need to understand your spending patterns,
              identify opportunities to save, and work toward your financial goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Visualize your financial health with intuitive dashboards and charts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Set budgets and receive alerts when you're approaching limits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Export reports to PDF or CSV for tax preparation and planning
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Total Balance</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-2xl font-bold">$52,450.00</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Monthly Income</span>
                  <span className="text-sm text-green-500">+15%</span>
                </div>
                <p className="text-2xl font-bold">$8,500.00</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Monthly Expenses</span>
                  <span className="text-sm text-red-500">-5%</span>
                </div>
                <p className="text-2xl font-bold">$3,200.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users who have already transformed their financial lives.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Start Free Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6 text-primary" />
              <span className="font-semibold">FinanceManager</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 FinanceManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
