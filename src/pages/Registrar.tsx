
import { SharedLayout } from "@/components/shared-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, BookOpen } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Registrar = () => {
  const enrollmentRequests = [
    { id: 1, studentName: "Alice Smith", course: "Computer Science 101", semester: "Fall 2024", status: "Pending", date: "2024-01-15" },
    { id: 2, studentName: "Bob Johnson", course: "Mathematics 201", semester: "Fall 2024", status: "Approved", date: "2024-01-14" },
    { id: 3, studentName: "Carol Davis", course: "Biology 301", semester: "Fall 2024", status: "Under Review", date: "2024-01-13" },
    { id: 4, studentName: "David Wilson", course: "Physics 205", semester: "Fall 2024", status: "Rejected", date: "2024-01-12" },
  ];

  return (
    <SharedLayout breadcrumb="Registrar">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Fall 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registration Period</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Days remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Enrollment Requests</h2>
          <div className="space-x-2">
            <Button variant="outline">Export Data</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Enrollment Requests Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrollmentRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.studentName}</TableCell>
                    <TableCell>{request.course}</TableCell>
                    <TableCell>{request.semester}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        request.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {request.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Review</Button>
                        {request.status === 'Pending' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Approve</Button>
                        )}
                      </div>
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

export default Registrar;
