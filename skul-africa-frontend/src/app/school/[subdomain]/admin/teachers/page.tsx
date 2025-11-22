import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

// Mock teacher data
const mockTeachers = [
  {
    id: '1',
    name: 'Dr. Adebayo Johnson',
    email: 'adebayo.johnson@school.edu',
    subject: 'Mathematics',
    phone: '+234 801 234 5678',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Mrs. Fatima Ibrahim',
    email: 'fatima.ibrahim@school.edu',
    subject: 'English Literature',
    phone: '+234 802 345 6789',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Mr. Chukwuemeka Nwosu',
    email: 'chukwuemeka.nwosu@school.edu',
    subject: 'Physics',
    phone: '+234 803 456 7890',
    status: 'Active',
  },
];

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Teachers Management</h1>
          <p className="text-neutral-400">Manage your teaching staff and their information.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Teacher
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search teachers..."
                className="pl-10 bg-neutral-800 border-neutral-700"
              />
            </div>
            <Button variant="outline" className="border-neutral-700 text-neutral-300">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Teachers Table */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Teachers ({mockTeachers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Subject</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockTeachers.map((teacher) => (
                  <tr key={teacher.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                    <td className="py-3 px-4 text-white font-medium">{teacher.name}</td>
                    <td className="py-3 px-4 text-neutral-300">{teacher.subject}</td>
                    <td className="py-3 px-4 text-neutral-300">{teacher.email}</td>
                    <td className="py-3 px-4 text-neutral-300">{teacher.phone}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900/20 text-green-400">
                        {teacher.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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
}