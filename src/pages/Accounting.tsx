import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, TrendingUp, CreditCard, Search, FileText, Calculator, PieChart, Settings } from "lucide-react";

const payments = [
  { id: "2023-001", name: "Juan Dela Cruz", amount: 25000, date: "2025-06-12", status: "Paid" },
  { id: "2022-045", name: "Maria Santos", amount: 15000, date: "2025-06-11", status: "Pending" },
];

const fees = [
  { name: "Tuition Fee (Per Unit)", amount: 1500, applicable: "All Programs" },
  { name: "Application Fee", amount: 500, applicable: "New Applicants" },
];

const recentTransactions = [
  { id: 'TXN-1001', student: 'Juan Dela Cruz', type: 'Tuition Payment', amount: 25000, date: '2025-06-12', status: 'Completed' },
  { id: 'TXN-1002', student: 'Maria Santos', type: 'Application Fee', amount: 500, date: '2025-06-11', status: 'Pending' },
  { id: 'TXN-1003', student: 'Juan Dela Cruz', type: 'Library Fine', amount: 200, date: '2025-06-10', status: 'Completed' },
];

const Accounting = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Accounting & Finance</h1>
        <p className="text-gray-600 text-sm">
          Manage student payments, fee structures, and financial transactions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">₱12.5M</div>
            <p className="text-xs text-gray-600">Collected this term</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Outstanding</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">₱850K</div>
            <p className="text-xs text-gray-600">Pending balances</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Today's Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-lg font-bold text-gray-900">₱150K</div>
            <p className="text-xs text-gray-600">Received today</p>
          </CardContent>
        </Card>
      </div>
      {/* Student Payments Overview */}
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-semibold">Student Payments Overview</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search payment or student..." className="w-64 pl-10" />
            </div>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">Record Payment</Button>
          </div>
        </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-2 py-1 text-left font-medium">STUDENT ID</th>
                    <th className="px-2 py-1 text-left font-medium">NAME</th>
                    <th className="px-2 py-1 text-left font-medium">AMOUNT PAID</th>
                    <th className="px-2 py-1 text-left font-medium">DATE</th>
                    <th className="px-2 py-1 text-left font-medium">STATUS</th>
                    <th className="px-2 py-1 text-left font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p) => (
                    <tr key={p.id} className="border-b">
                      <td className="px-2 py-1">{p.id}</td>
                      <td className="px-2 py-1">{p.name}</td>
                      <td className="px-2 py-1">PHP {p.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      <td className="px-2 py-1">{p.date}</td>
                      <td className="px-2 py-1">
                        {p.status === "Paid" ? (
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Paid</span>
                        ) : (
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Pending</span>
                        )}
                      </td>
                      <td className="px-2 py-1 space-x-2">
                        <a href="#" className="text-blue-600 text-xs hover:underline">View</a>
                        <a href="#" className="text-blue-600 text-xs hover:underline">Verify</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-600 text-xs hover:underline">View All Payments</a>
            </div>
        </CardContent>
      </Card>

      {/* Fee Structures */}
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-semibold">Fee Structures</CardTitle>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white">Add New Fee</Button>
        </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-2 py-1 text-left font-medium">FEE NAME</th>
                    <th className="px-2 py-1 text-left font-medium">AMOUNT (PHP)</th>
                    <th className="px-2 py-1 text-left font-medium">APPLICABLE TO</th>
                    <th className="px-2 py-1 text-left font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-2 py-1">{f.name}</td>
                      <td className="px-2 py-1">{f.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      <td className="px-2 py-1">{f.applicable}</td>
                      <td className="px-2 py-1 space-x-2">
                        <a href="#" className="text-blue-600 text-xs hover:underline">Edit</a>
                        <a href="#" className="text-red-600 text-xs hover:underline">Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
        </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-2 py-1 text-left font-medium">TRANSACTION ID</th>
                    <th className="px-2 py-1 text-left font-medium">STUDENT NAME</th>
                    <th className="px-2 py-1 text-left font-medium">TYPE</th>
                    <th className="px-2 py-1 text-left font-medium">AMOUNT (PHP)</th>
                    <th className="px-2 py-1 text-left font-medium">DATE</th>
                    <th className="px-2 py-1 text-left font-medium">STATUS</th>
                    <th className="px-2 py-1 text-left font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="px-2 py-1">{t.id}</td>
                      <td className="px-2 py-1">{t.student}</td>
                      <td className="px-2 py-1">{t.type}</td>
                      <td className="px-2 py-1">PHP {t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      <td className="px-2 py-1">{t.date}</td>
                      <td className="px-2 py-1">
                        {t.status === 'Completed' ? (
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Completed</span>
                        ) : (
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Pending</span>
                        )}
                      </td>
                      <td className="px-2 py-1 space-x-2">
                        <a href="#" className="text-blue-600 text-xs hover:underline">View</a>
                        <a href="#" className="text-blue-600 text-xs hover:underline">Receipt</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounting;
