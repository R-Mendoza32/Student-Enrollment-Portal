
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, UserPlus } from "lucide-react";

export function WelcomeCard() {
  return (
    <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome to Student Portal
              </h1>
              <p className="text-gray-600 max-w-md">
                Streamline student enrollment and management with our comprehensive 
                portal system. Get started by creating new student logins.
              </p>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Create Student Login
            </Button>
          </div>
          
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-16 h-16 text-blue-600" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
