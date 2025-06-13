
import { SharedLayout } from "@/components/shared-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, Receipt, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Accounting = () => {
  const recentTransactions = [
    { id: 1, studentName: "Alice Smith", type: "Tuition Payment", amount: 2500, status: "Completed", date: "2024-01-15" },
    { id: 2, studentName: "Bob Johnson", type: "Library Fine", amount: 25, status: "Pending", date: "2024-01-14" },
    { id: 3, studentName: "Carol Davis", type: "Lab Fee", amount: 150, status: "Completed", date: "2024-01-13" },
    { id: 4, studentName: "David Wilson", type: "Housing Fee", amount: 1200, status: "Overdue", date: "2024-01-10" },
  ];

  return (
    <SharedLayout breadcrumb="Accounting">
      <div className="space-y-6">
        {/* Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$847,650</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,230</div>
              <p className="text-xs text-muted-foreground">156 students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processed Today</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">23 transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <div className="space-x-2">
            <Button variant="outline">Export Report</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Receipt className="w-4 h-4 mr-2" />
              Process Payment
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Transaction Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.studentName}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View Details</Button>
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

export default Accounting;
