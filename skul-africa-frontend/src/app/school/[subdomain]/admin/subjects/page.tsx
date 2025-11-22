import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, BookOpen } from 'lucide-react';

// Mock subjects data
const mockSubjects = [
  { id: '1', name: 'Mathematics', teacher: 'Dr. Adebayo Johnson', classes: ['SS1', 'SS2', 'SS3'] },
  { id: '2', name: 'English Language', teacher: 'Mrs. Fatima Ibrahim', classes: ['SS1', 'SS2', 'SS3'] },
  { id: '3', name: 'Physics', teacher: 'Mr. Chukwuemeka Nwosu', classes: ['SS2', 'SS3'] },
  { id: '4', name: 'Chemistry', teacher: 'Dr. Adebayo Johnson', classes: ['SS2', 'SS3'] },
  { id: '5', name: 'Biology', teacher: 'Mrs. Fatima Ibrahim', classes: ['SS2', 'SS3'] },
];

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Subjects Management</h1>
          <p className="text-neutral-400">Manage curriculum subjects and assignments.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Subject
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSubjects.map((subject) => (
          <Card key={subject.id} className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                {subject.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-neutral-300">Teacher: {subject.teacher}</p>
                <p className="text-sm text-neutral-300">Classes: {subject.classes.join(', ')}</p>
                <Button variant="outline" size="sm" className="w-full mt-4 border-neutral-700 text-neutral-300">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}