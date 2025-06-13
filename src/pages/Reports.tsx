
import { SharedLayout } from "@/components/shared-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Calendar, FileText } from "lucide-react";

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
    <SharedLayout breadcrumb="Reports">
      <div className="space-y-6">
        {/* Report Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Automated reports</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Connected systems</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Available Reports</h2>
          <div className="space-x-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Create Custom Report
            </Button>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{report.name}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    report.type === 'Academic' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {report.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">
                    Last generated: {report.lastGenerated}
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Generate
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SharedLayout>
  );
};

export default Reports;
