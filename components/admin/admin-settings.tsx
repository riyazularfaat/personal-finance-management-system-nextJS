"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings, Database, Shield } from "lucide-react"

export function AdminSettings() {
  const [settings, setSettings] = useState({
    systemName: "Personal Finance System",
    maxUsers: 100,
    sessionTimeout: 30,
    enableNotifications: true,
    backupFrequency: "Weekly",
  })

  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    console.log("[v0] Saving admin settings:", settings)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleBackup = () => {
    console.log("[v0] Creating backup...")
    alert("Backup created successfully!")
  }

  const handleRestore = () => {
    console.log("[v0] Restoring backup...")
    alert("Backup restored successfully!")
  }

  const handleClearCache = () => {
    console.log("[v0] Clearing cache...")
    alert("Cache cleared successfully!")
  }

  const handleResetSystem = () => {
    if (window.confirm("Are you sure you want to reset the system? This cannot be undone.")) {
      console.log("[v0] Resetting system...")
      alert("System reset successfully!")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            <div>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure system-wide settings and preferences</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="systemName">System Name</Label>
              <Input
                id="systemName"
                value={settings.systemName}
                onChange={(e) => setSettings({ ...settings, systemName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxUsers">Max Users</Label>
              <Input
                id="maxUsers"
                type="number"
                value={settings.maxUsers}
                onChange={(e) => setSettings({ ...settings, maxUsers: Number(e.target.value) })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => setSettings({ ...settings, sessionTimeout: Number(e.target.value) })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backupFrequency">Backup Frequency</Label>
              <select
                id="backupFrequency"
                value={settings.backupFrequency}
                onChange={(e) => setSettings({ ...settings, backupFrequency: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" />
              <div>
                <p className="font-medium">Enable Notifications</p>
                <p className="text-sm text-muted-foreground">Send system alerts and updates</p>
              </div>
            </div>
            <button
              onClick={() => setSettings({ ...settings, enableNotifications: !settings.enableNotifications })}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                settings.enableNotifications ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
              }`}
            >
              {settings.enableNotifications ? "Enabled" : "Disabled"}
            </button>
          </div>

          <Button onClick={handleSave} size="lg" className="w-full">
            Save Settings
          </Button>

          {isSaved && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              Settings saved successfully!
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            <div>
              <CardTitle>Database Maintenance</CardTitle>
              <CardDescription>Manage system data and backups</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full bg-transparent" onClick={handleBackup}>
              Create Backup
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={handleRestore}>
              Restore Backup
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={handleClearCache}>
              Clear Cache
            </Button>
            <Button variant="destructive" className="w-full" onClick={handleResetSystem}>
              Reset System
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
