"use client"

import { useContext, useState } from "react"
import { AuthContext } from "@/lib/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Lock, Bell } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { user, logout } = useContext(AuthContext) || {}
  const router = useRouter()

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    userName: user?.userName || "",
    currency: user?.currency || "USD",
  })

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    transactionAlerts: true,
    budgetAlerts: true,
    weeklyReport: false,
  })

  const [isSaved, setIsSaved] = useState(false)

  const handleProfileSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handlePasswordChange = () => {
    if (password.new === password.confirm) {
      setIsSaved(true)
      setPassword({ current: "", new: "", confirm: "" })
      setTimeout(() => setIsSaved(false), 2000)
    } else {
      alert("Passwords do not match")
    }
  }

  const handleNotificationSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                value={profile.userName}
                onChange={(e) => setProfile({ ...profile, userName: e.target.value })}
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Preferred Currency</Label>
              <select
                id="currency"
                value={profile.currency}
                onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>CAD</option>
              </select>
            </div>
          </div>
          <Button onClick={handleProfileSave} size="lg">
            Save Profile
          </Button>
        </CardContent>
      </Card>

      {/* Password Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            <div>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password regularly for security</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input
                id="current"
                type="password"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input
                id="new"
                type="password"
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={handlePasswordChange} size="lg">
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <div>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to receive updates</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              { key: "emailNotifications", label: "Email Notifications", desc: "Receive updates via email" },
              { key: "transactionAlerts", label: "Transaction Alerts", desc: "Get notified of large transactions" },
              { key: "budgetAlerts", label: "Budget Alerts", desc: "Alerts when approaching budget limits" },
              { key: "weeklyReport", label: "Weekly Report", desc: "Receive weekly financial summary" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [item.key]: !notifications[item.key as keyof typeof notifications],
                    })
                  }
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    notifications[item.key as keyof typeof notifications]
                      ? "bg-blue-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {notifications[item.key as keyof typeof notifications] ? "On" : "Off"}
                </button>
              </div>
            ))}
          </div>
          <Button onClick={handleNotificationSave} size="lg" className="w-full">
            Save Preferences
          </Button>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Logout</CardTitle>
          <CardDescription>End your current session</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={() => {
              logout?.()
              router.push("/")
            }}
            size="lg"
          >
            Logout
          </Button>
        </CardContent>
      </Card>

      {isSaved && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
          Changes saved successfully!
        </div>
      )}
    </div>
  )
}
