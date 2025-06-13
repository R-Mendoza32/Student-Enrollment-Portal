
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const studentsData = [
  {
    id: 1,
    name: "Emma Johnson",
    yearLevel: "Sophomore",
    status: "Active",
    lastLogin: "2024-01-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    yearLevel: "Senior",
    status: "Active",
    lastLogin: "2024-01-14",
  },
  {
    id: 3,
    name: "Sarah Williams",
    yearLevel: "Freshman",
    status: "Inactive",
    lastLogin: "2024-01-10",
  },
  {
    id: 4,
    name: "David Rodriguez",
    yearLevel: "Junior",
    status: "Active",
    lastLogin: "2024-01-15",
  },
  {
    id: 5,
    name: "Jessica Brown",
    yearLevel: "Senior",
    status: "Pending",
    lastLogin: "2024-01-12",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
    case "Inactive":
      return <Badge variant="secondary">Inactive</Badge>;
    case "Pending":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function StudentsTable() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="font-semibold text-gray-900">Name</TableHead>
              <TableHead className="font-semibold text-gray-900">Year Level</TableHead>
              <TableHead className="font-semibold text-gray-900">Status</TableHead>
              <TableHead className="font-semibold text-gray-900">Last Login</TableHead>
              <TableHead className="font-semibold text-gray-900 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentsData.map((student) => (
              <TableRow key={student.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.yearLevel}</TableCell>
                <TableCell>{getStatusBadge(student.status)}</TableCell>
                <TableCell className="text-gray-600">{student.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                      <DropdownMenuItem className="cursor-pointer">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
