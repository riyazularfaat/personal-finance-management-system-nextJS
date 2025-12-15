"use client"

import { useState } from "react"
import { mockUsers, mockRoles } from "@/lib/mock-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit2, Trash2 } from "lucide-react"

export function UserManagement() {
  const [users, setUsers] = useState(mockUsers)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    roleId: "",
    currency: "USD",
  })

  const handleAddUser = () => {
    if (!formData.name || !formData.userName || !formData.email || !formData.roleId) {
      console.log("[v0] Form validation failed:", formData)
      alert("Please fill in all fields")
      return
    }

    console.log("[v0] Adding/updating user:", { editingId, formData })
    if (editingId) {
      setUsers(users.map((u) => (u.userId === editingId ? { ...u, ...formData } : u)))
      setEditingId(null)
    } else {
      const newUser = {
        userId: `user-${Date.now()}`,
        ...formData,
        password: "temporary123",
        profilePicture: "/placeholder.svg?height=40&width=40",
      }
      setUsers([...users, newUser])
      console.log("[v0] User added successfully:", newUser)
    }
    setFormData({ name: "", userName: "", email: "", roleId: "", currency: "USD" })
    setIsOpen(false)
  }

  const handleEdit = (user: (typeof mockUsers)[0]) => {
    console.log("[v0] Editing user:", user)
    setFormData({
      name: user.name,
      userName: user.userName,
      email: user.email,
      roleId: user.roleId,
      currency: user.currency,
    })
    setEditingId(user.userId)
    setIsOpen(true)
  }

  const handleDelete = (id: string) => {
    console.log("[v0] Deleting user:", id)
    setUsers(users.filter((u) => u.userId !== id))
  }

  const getRoleName = (roleId: string) => {
    return mockRoles.find((r) => r.roleId === roleId)?.roleName || "Unknown"
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage system users and their roles</CardDescription>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null)
                setFormData({ name: "", userName: "", email: "", roleId: "", currency: "USD" })
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit User" : "Add New User"}</DialogTitle>
              <DialogDescription>{editingId ? "Update user details" : "Create a new system user"}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userName">Username</Label>
                  <Input
                    id="userName"
                    value={formData.userName}
                    onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="roleId">Role</Label>
                  <Select
                    value={formData.roleId}
                    onValueChange={(value) => setFormData({ ...formData, roleId: value })}
                  >
                    <SelectTrigger id="roleId">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockRoles.map((role) => (
                        <SelectItem key={role.roleId} value={role.roleId}>
                          {role.roleName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => setFormData({ ...formData, currency: value })}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleAddUser} className="w-full">
                {editingId ? "Update User" : "Add User"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">@{user.userName}</p>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge>{getRoleName(user.roleId)}</Badge>
                  </TableCell>
                  <TableCell>{user.currency}</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(user)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(user.userId)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
