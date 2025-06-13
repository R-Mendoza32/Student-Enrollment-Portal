
import { SharedLayout } from "@/components/shared-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, UserPlus, Key } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <SharedLayout breadcrumb="Access Control">
      <div className="space-y-6">
        {/* Access Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">Active system users</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Super administrators</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Role Types</CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Different access levels</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">In the last 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">User Management</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        <Card>
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
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Permissions</Button>
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
          <h2 className="text-xl font-semibold">Role Permissions</h2>
          <Card>
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
                          permission.admin ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {permission.admin ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.registrar ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {permission.registrar ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.faculty ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {permission.faculty ? 'Allowed' : 'Denied'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          permission.support ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
    </SharedLayout>
  );
};

export default AccessControl;
