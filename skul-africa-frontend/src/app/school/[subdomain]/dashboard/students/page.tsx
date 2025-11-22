import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

// Mock student data
const mockStudents = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    email: 'adebayo.johnson@student.school.edu',
    class: 'SS3 Science',
    rollNumber: '2024001',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Fatima Ibrahim',
    email: 'fatima.ibrahim@student.school.edu',
    class: 'SS2 Arts',
    rollNumber: '2024002',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Chukwuemeka Nwosu',
    email: 'chukwuemeka.nwosu@student.school.edu',
    class: 'SS1 Commercial',
    rollNumber: '2024003',
    status: 'Active',
  },
];

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Students Management</h1>
          <p className="text-neutral-400">Manage student records and information.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search students..."
                className="pl-10 bg-neutral-800 border-neutral-700"
              />
            </div>
            <Button variant="outline" className="border-neutral-700 text-neutral-300">
              Filter by Class
            </Button>
            <Button variant="outline" className="border-neutral-700 text-neutral-300">
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Students ({mockStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Roll No</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Class</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((student) => (
                  <tr key={student.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                    <td className="py-3 px-4 text-white font-medium">{student.rollNumber}</td>
                    <td className="py-3 px-4 text-white font-medium">{student.name}</td>
                    <td className="py-3 px-4 text-neutral-300">{student.class}</td>
                    <td className="py-3 px-4 text-neutral-300">{student.email}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900/20 text-green-400">
                        {student.status}
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