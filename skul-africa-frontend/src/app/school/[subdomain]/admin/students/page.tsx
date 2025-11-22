'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, GraduationCap } from 'lucide-react';
import { getSchoolBySubdomain } from '@/lib/school-data';

export default function StudentsPage() {
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [subdomain, setSubdomain] = useState<string>('');

  useEffect(() => {
    // Extract subdomain from URL
    const pathParts = window.location.pathname.split('/');
    const subdomainIndex = pathParts.indexOf('school') + 1;
    const sub = pathParts[subdomainIndex];
    setSubdomain(sub);

    const loadSchool = async () => {
      try {
        const schoolData = await getSchoolBySubdomain(sub);
        console.log(schoolData);
        setSchool(schoolData);
      } catch (error) {
        console.error('Error loading school:', error);
      } finally {
        setLoading(false);
      }
    };

    if (sub) {
      loadSchool();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-white mb-2">School Not Found</h2>
        <p className="text-neutral-400">Unable to load school data.</p>
      </div>
    );
  }

  // Mock student data - in real app, this would come from school.students
  const mockStudents = [
    {
      id: '1',
      name: 'Amara Okafor',
      email: 'amara.okafor@student.edu',
      class: 'SS3',
      admissionNumber: '2023/001',
      status: 'Active',
    },
    {
      id: '2',
      name: 'Kemi Adebayo',
      email: 'kemi.adebayo@student.edu',
      class: 'SS2',
      admissionNumber: '2023/002',
      status: 'Active',
    },
    {
      id: '3',
      name: 'Tunde Bakare',
      email: 'tunde.bakare@student.edu',
      class: 'SS1',
      admissionNumber: '2023/003',
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Students Management</h1>
          <p className="text-neutral-400">Manage your student records and information.</p>
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
              Filter
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Class</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Admission No.</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((student) => (
                  <tr key={student.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                    <td className="py-3 px-4 text-white font-medium">{student.name}</td>
                    <td className="py-3 px-4 text-neutral-300">{student.class}</td>
                    <td className="py-3 px-4 text-neutral-300">{student.admissionNumber}</td>
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