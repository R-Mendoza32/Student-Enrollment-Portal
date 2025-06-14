import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, UserPlus, Key, AlertTriangle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, type = "button", className = "" }: ButtonProps) => (
  <button
    type={type}
    className={`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
  >
    {children}
  </button>
);

const AccessControl = () => {
  const userRoles = [
    { id: 1, name: "John Admin", email: "john@university.edu", role: "Super Admin", lastLogin: "2024-01-15", status: "Active" },
    { id: 2, name: "Sarah Manager", email: "sarah@university.edu", role: "Registrar", lastLogin: "2024-01-14", status: "Active" },
    { id: 3, name: "Mike Faculty", email: "mike@university.edu", role: "Faculty", lastLogin: "2024-01-13", status: "Active" },
    { id: 4, name: "Lisa Support", email: "lisa@university.edu", role: "Support", lastLogin: "2024-01-10", status: "Inactive" },
  ];

  const permissions = [
    { module: "Student Management", admin: true, registrar: true, faculty: false, support: false },
    { module: "Faculty Management", admin: true, registrar: false, faculty: false, support: false },
    { module: "Financial Records", admin: true, registrar: true, faculty: false, support: false },
    { module: "Reports", admin: true, registrar: true, faculty: true, support: false },
    { module: "System Settings", admin: true, registrar: false, faculty: false, support: false },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Control & Security</h1>
        <p className="text-gray-600 text-sm">
          Manage user permissions, roles, and system security settings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Total Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">47</div>
            <p className="text-xs text-gray-600">Active system users</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Admin Users</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">5</div>
            <p className="text-xs text-gray-600">Super administrators</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Role Types</CardTitle>
            <Key className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">6</div>
            <p className="text-xs text-gray-600">Different access levels</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Failed Logins</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">3</div>
            <p className="text-xs text-gray-600">Failed attempts (24h)</p>
          </CardContent>
        </Card>
      </div>

      {/* User Management */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900">User Management</h2>
        <div className="flex gap-4">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
            Manage Roles
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-0">
        <CardContent className="p-0">
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active' ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1">
                          Edit
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-1">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Permissions Matrix */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900">Role Permissions</h2>
        <Card className="shadow-lg border-0">
          <CardContent className="p-0">
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Module</TableHead>
                    <TableHead>Admin</TableHead>
                    <TableHead>Registrar</TableHead>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Support</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {permissions.map((permission, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{permission.module}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.admin ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {permission.admin ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.registrar ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {permission.registrar ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.faculty ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {permission.faculty ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.support ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {permission.support ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccessControl;
