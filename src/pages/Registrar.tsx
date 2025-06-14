import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, BookOpen, Calendar, Search, FileText, GraduationCap, Settings, Database } from "lucide-react";

const students = [
  { id: "2023-001", name: "Juan Dela Cruz", program: "BS Computer Science" },
  { id: "2022-045", name: "Maria Santos", program: "BS Education" },
];

const courses = [
  { code: "CS101", title: "Introduction to Programming", units: 3, dept: "Comp Sci" },
  { code: "ENG201", title: "Philippine Literature", units: 3, dept: "Humanities" },
];

const events = [
  { name: "Enrollment Period", date: "August 1 - August 15, 2024" },
  { name: "Classes Start", date: "August 19, 2024" },
];

const Registrar = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header with Search */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Registrar Functions</h1>
          <p className="text-gray-600 text-sm mt-1">Manage student records, course catalog, and academic calendar</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search..." className="w-64 pl-10" />
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <span className="sr-only">Notifications</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11c0-3.07-1.64-5-5.958V4a1 1 0 1 0-2 0v1.042C6.64 5.36 5 7.929 5 11v3.159c0 .538-.214 1.055-.595 1.436L3 17h5m7 0v1a3 3 0 1 1-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Total Students</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">1,247</div>
            <p className="text-xs text-gray-600">Active enrollments</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Course Catalog</CardTitle>
            <BookOpen className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">156</div>
            <p className="text-xs text-gray-600">Available courses</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Academic Events</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-600">Events this semester</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Records */}
        <Card className="shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Student Records</CardTitle>
            <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white">+ Add Student</Button>
          </CardHeader>
          <CardContent>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search student ID or name..." className="pl-10" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">STUDENT ID</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">NAME</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">PROGRAM</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2 font-medium">{s.id}</td>
                      <td className="px-3 py-2">{s.name}</td>
                      <td className="px-3 py-2">{s.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-right mt-3">
              <a href="#" className="text-blue-600 text-sm hover:underline">View All Students</a>
            </div>
          </CardContent>
        </Card>

        {/* Course Catalog */}
        <Card className="shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Course Catalog</CardTitle>
            <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white">+ Add Course</Button>
          </CardHeader>
          <CardContent>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search course..." className="pl-10" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">COURSE CODE</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">COURSE TITLE</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">UNITS</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c.code} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2 font-medium">{c.code}</td>
                      <td className="px-3 py-2">{c.title}</td>
                      <td className="px-3 py-2">{c.units}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-right mt-3">
              <a href="#" className="text-green-600 text-sm hover:underline">View All Courses</a>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Academic Calendar */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Academic Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
            <div className="mb-2 md:mb-0">
              <label className="block text-sm font-medium mb-1">Select Academic Term</label>
              <Select defaultValue="2024-2025 First Semester">
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-2025 First Semester">2024-2025 First Semester</SelectItem>
                  <SelectItem value="2024-2025 Second Semester">2024-2025 Second Semester</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="mt-2 md:mt-6 w-fit bg-gray-800 hover:bg-gray-900 text-white">+ Add New Event</Button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="font-semibold mb-3 text-gray-900">Events for 2024-2025 First Semester</div>
            <ul>
              {events.map((e, i) => (
                <li key={i} className="flex justify-between items-center border-b last:border-b-0 py-3">
                  <div>
                    <div className="font-medium text-gray-900">{e.name}</div>
                    <div className="text-sm text-gray-600">{e.date}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registrar;
