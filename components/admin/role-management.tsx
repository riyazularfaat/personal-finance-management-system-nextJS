"use client"

import { useState } from "react"
import { mockRoles } from "@/lib/mock-data"
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
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit2, Trash2 } from "lucide-react"

export function RoleManagement() {
  const [roles, setRoles] = useState(mockRoles)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [roleName, setRoleName] = useState("")

  const handleAddRole = () => {
    if (!roleName.trim()) {
      console.log("[v0] Role name is empty")
      alert("Please enter a role name")
      return
    }

    console.log("[v0] Adding/updating role:", { editingId, roleName })
    if (editingId) {
      setRoles(roles.map((r) => (r.roleId === editingId ? { ...r, roleName } : r)))
      setEditingId(null)
    } else {
      const newRole = {
        roleId: `role-${Date.now()}`,
        roleName,
      }
      setRoles([...roles, newRole])
      console.log("[v0] Role added successfully:", newRole)
    }
    setRoleName("")
    setIsOpen(false)
  }

  const handleEdit = (role: (typeof mockRoles)[0]) => {
    console.log("[v0] Editing role:", role)
    setRoleName(role.roleName)
    setEditingId(role.roleId)
    setIsOpen(true)
  }

  const handleDelete = (id: string) => {
    console.log("[v0] Deleting role:", id)
    setRoles(roles.filter((r) => r.roleId !== id))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Roles</CardTitle>
          <CardDescription>Manage system roles and permissions</CardDescription>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null)
                setRoleName("")
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Role" : "Add New Role"}</DialogTitle>
              <DialogDescription>{editingId ? "Update role details" : "Create a new system role"}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="roleName">Role Name</Label>
                <Input
                  id="roleName"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="e.g., Manager, Viewer"
                />
              </div>

              <Button onClick={handleAddRole} className="w-full">
                {editingId ? "Update Role" : "Add Role"}
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
                <TableHead>Role Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.roleId}>
                  <TableCell className="font-medium">{role.roleName}</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(role)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(role.roleId)}>
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
