import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, BarChart3 } from 'lucide-react';

export default function AssessmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Assessments & Exams</h1>
          <p className="text-neutral-400">Manage tests, exams, and student evaluations.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Create Assessment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Mid-Term Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-400 mb-4">SS1 - SS3 Mid-term examinations</p>
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              Manage Exams
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              Continuous Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-400 mb-4">Class tests and assignments</p>
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              View Results
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Final Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-400 mb-4">End of term examinations</p>
            <Button variant="outline" className="w-full border-neutral-700 text-neutral-300">
              Schedule Exams
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}