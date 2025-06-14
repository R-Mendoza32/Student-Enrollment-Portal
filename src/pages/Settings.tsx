import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Shield, Bell, Database } from "lucide-react";

const Settings = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDarkModeToggle = (checked: boolean) => {
    setIsDark(checked);
    // You can implement your own theme switching logic here
    document.documentElement.classList.toggle('dark', checked);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">System Settings</h1>
        <p className="text-gray-600 text-sm">
          Configure system preferences, security, and application settings
        </p>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">System Settings</CardTitle>
            <SettingsIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-xs text-gray-600">Configure system preferences</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Security</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-xs text-gray-600">Security and authentication</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-xs text-gray-600">Email and alert preferences</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-gray-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold text-gray-700">Data Management</CardTitle>
            <Database className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-xs text-gray-600">Backup and data settings</p>
          </CardContent>
        </Card>
      </div>

      {/* General Settings */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="institution-name">Institution Name</Label>
                <Input id="institution-name" defaultValue="University of Excellence" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="academic-year">Academic Year</Label>
                <Input id="academic-year" defaultValue="2024-2025" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500">Toggle dark or light theme</p>
                </div>
                <Switch checked={isDark} onCheckedChange={handleDarkModeToggle} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-gray-500">Temporarily disable student access</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">Send automated email notifications</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Backup</Label>
                  <p className="text-sm text-gray-500">Automatically backup data daily</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
            </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
              </div>
              <Switch defaultChecked={true} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Password Complexity</Label>
                <p className="text-sm text-gray-500">Enforce strong password requirements</p>
              </div>
              <Switch defaultChecked={true} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Session Timeout</Label>
                <p className="text-sm text-gray-500">Auto-logout after 30 minutes of inactivity</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
          </div>

          <div className="pt-4">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
