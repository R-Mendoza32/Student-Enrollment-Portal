
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, GraduationCap, Award, BookOpen, Calendar, Settings, FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Faculty = () => {
  const facultyMembers = [
    { id: 1, name: "Dr. Sarah Johnson", department: "Computer Science", position: "Professor", status: "Active", courses: 3 },
    { id: 2, name: "Prof. Michael Chen", department: "Mathematics", position: "Associate Professor", status: "Active", courses: 2 },
    { id: 3, name: "Dr. Emily Rodriguez", department: "Biology", position: "Assistant Professor", status: "Active", courses: 4 },
    { id: 4, name: "Prof. David Wilson", department: "Physics", position: "Professor", status: "On Leave", courses: 0 },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Faculty Management</h1>
        <p className="text-gray-600 text-sm">
          Manage faculty members, departments, and course assignments
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Total Faculty</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">24</div>
            <p className="text-xs text-gray-600">Active faculty members</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Active Courses</CardTitle>
            <GraduationCap className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">45</div>
            <p className="text-xs text-gray-600">Courses this semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Departments</CardTitle>
            <Award className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-600">Academic departments</p>
          </CardContent>
        </Card>
      </div>

        {/* Faculty Section Header */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Faculty Members</h2>
              <p className="text-gray-600 text-xs mt-1">Manage faculty profiles and assignments</p>
            </div>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3">
              <UserPlus className="w-5 h-5 mr-2" />
              Add Faculty Member
            </Button>
          </div>
        </div>

        {/* Faculty Table */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900 py-4">Name</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4">Department</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4">Position</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4">Courses</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facultyMembers.map((faculty) => (
                  <TableRow key={faculty.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-semibold text-gray-900 py-4">{faculty.name}</TableCell>
                    <TableCell className="py-4">{faculty.department}</TableCell>
                    <TableCell className="py-4">{faculty.position}</TableCell>
                    <TableCell className="py-4 text-center">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                        {faculty.courses}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        faculty.status === 'Active'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {faculty.status}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  );
};

export default Faculty;
