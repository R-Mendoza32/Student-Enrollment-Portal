
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Calendar, FileText, TrendingUp, Database, PieChart, Settings } from "lucide-react";

const Reports = () => {
  const reportTypes = [
    { name: "Student Enrollment Report", description: "Comprehensive enrollment data and trends", lastGenerated: "2024-01-15", type: "Academic" },
    { name: "Financial Summary", description: "Revenue, payments, and outstanding balances", lastGenerated: "2024-01-14", type: "Financial" },
    { name: "Faculty Performance", description: "Teaching loads and course evaluations", lastGenerated: "2024-01-13", type: "Academic" },
    { name: "Attendance Analytics", description: "Student attendance patterns and insights", lastGenerated: "2024-01-12", type: "Academic" },
    { name: "Budget Analysis", description: "Department budgets and expense tracking", lastGenerated: "2024-01-11", type: "Financial" },
    { name: "Graduation Tracking", description: "Student progress and completion rates", lastGenerated: "2024-01-10", type: "Academic" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600 text-sm">
          Generate comprehensive reports and analyze institutional data
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Reports Generated</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">47</div>
            <p className="text-xs text-gray-600">Generated this month</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Scheduled Reports</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-600">Automated reports active</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Data Sources</CardTitle>
            <Database className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-600">Connected systems</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900">Available Reports</h2>
        <div className="space-x-2">
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white">
            <FileText className="w-4 h-4 mr-2" />
            Create Custom Report
          </Button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report, index) => (
          <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{report.name}</CardTitle>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  report.type === 'Academic' ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-700'
                }`}>
                  {report.type}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>
              <div className="space-y-3">
                <p className="text-xs text-gray-500">
                  Last generated: {report.lastGenerated}
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-gray-800 hover:bg-gray-900 text-white">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;
