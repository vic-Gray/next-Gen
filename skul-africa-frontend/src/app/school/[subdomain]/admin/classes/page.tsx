import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Users, BookOpen } from 'lucide-react';

// Mock class data
const mockClasses = [
  {
    id: '1',
    name: 'SS3 Science',
    teacher: 'Dr. Adebayo Johnson',
    students: 45,
    subjects: 8,
    status: 'Active',
  },
  {
    id: '2',
    name: 'SS2 Arts',
    teacher: 'Mrs. Fatima Ibrahim',
    students: 38,
    subjects: 7,
    status: 'Active',
  },
  {
    id: '3',
    name: 'SS1 Commercial',
    teacher: 'Mr. Chukwuemeka Nwosu',
    students: 42,
    subjects: 6,
    status: 'Active',
  },
];

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Classes Management</h1>
          <p className="text-neutral-400">Manage class structures and assignments.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Class
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search classes..."
                className="pl-10 bg-neutral-800 border-neutral-700"
              />
            </div>
            <Button variant="outline" className="border-neutral-700 text-neutral-300">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((classItem) => (
          <Card key={classItem.id} className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                {classItem.name}
                <span className="text-sm font-normal text-green-400">Active</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-neutral-300">
                  <Users className="h-4 w-4 mr-2" />
                  Teacher: {classItem.teacher}
                </div>
                <div className="flex items-center text-sm text-neutral-300">
                  <Users className="h-4 w-4 mr-2" />
                  Students: {classItem.students}
                </div>
                <div className="flex items-center text-sm text-neutral-300">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Subjects: {classItem.subjects}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 border-neutral-700 text-neutral-300">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-neutral-700 text-neutral-300">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}