import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Settings, Save, User, Bell, Shield, Palette, Image } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">School Settings</h1>
          <p className="text-neutral-400">Configure your school's preferences and information.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Information */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              School Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                School Name
              </label>
              <Input
                defaultValue="Greg Academy"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                School Email
              </label>
              <Input
                defaultValue="info@gregacademy.edu.ng"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Phone Number
              </label>
              <Input
                defaultValue="+234 345 678 9012"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Address
              </label>
              <Textarea
                defaultValue="789 Learning Boulevard, Lagos, Nigeria"
                rows={3}
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Academic Year
              </label>
              <Input
                defaultValue="2024/2025"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Default Currency
              </label>
              <Input
                defaultValue="NGN (₦)"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Time Zone
              </label>
              <Input
                defaultValue="Africa/Lagos (WAT)"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">Email notifications</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">SMS alerts</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">Payment reminders</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">Attendance alerts</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
          </CardContent>
        </Card>

        {/* Branding */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Palette className="h-5 w-5 mr-2 text-primary" />
              School Branding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Tagline
              </label>
              <Input
                defaultValue="Excellence in Education"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Logo URL
              </label>
              <Input
                defaultValue="/logos/default-school.png"
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Primary Color
              </label>
              <div className="flex space-x-2">
                <Input
                  type="color"
                  defaultValue="#E50914"
                  className="w-16 h-10 bg-neutral-800 border-neutral-700"
                />
                <Input
                  defaultValue="#E50914"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Secondary Color
              </label>
              <div className="flex space-x-2">
                <Input
                  type="color"
                  defaultValue="#0A0A0A"
                  className="w-16 h-10 bg-neutral-800 border-neutral-700"
                />
                <Input
                  defaultValue="#0A0A0A"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              Change Password
            </Button>
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              Login History
            </Button>
            <Button variant="destructive" className="w-full">
              Delete School Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}