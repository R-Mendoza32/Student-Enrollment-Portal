
import { SharedLayout } from "@/components/shared-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, GraduationCap, Award } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Faculty = () => {
  const facultyMembers = [
    { id: 1, name: "Dr. Sarah Johnson", department: "Computer Science", position: "Professor", status: "Active", courses: 3 },
    { id: 2, name: "Prof. Michael Chen", department: "Mathematics", position: "Associate Professor", status: "Active", courses: 2 },
    { id: 3, name: "Dr. Emily Rodriguez", department: "Biology", position: "Assistant Professor", status: "Active", courses: 4 },
    { id: 4, name: "Prof. David Wilson", department: "Physics", position: "Professor", status: "On Leave", courses: 0 },
  ];

  return (
    <SharedLayout breadcrumb="Faculty Management">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Academic departments</p>
            </CardContent>
          </Card>
        </div>

        {/* Add Faculty Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Faculty Members</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Faculty Member
          </Button>
        </div>

        {/* Faculty Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facultyMembers.map((faculty) => (
                  <TableRow key={faculty.id}>
                    <TableCell className="font-medium">{faculty.name}</TableCell>
                    <TableCell>{faculty.department}</TableCell>
                    <TableCell>{faculty.position}</TableCell>
                    <TableCell>{faculty.courses}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        faculty.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {faculty.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SharedLayout>
  );
};

export default Faculty;
