'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { DashboardCard } from '@/components/admin/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, DollarSign, TrendingUp } from 'lucide-react';
import { getSchoolBySubdomain } from '@/lib/school-data';

export default function AdminDashboard() {
  const params = useParams();
  const subdomain = params.subdomain as string;
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSchool = async () => {
      if (!subdomain) {
        setLoading(false);
        return;
      }

      try {
        const schoolData = await getSchoolBySubdomain(subdomain);
        setSchool(schoolData);
      } catch (error) {
        console.error('Error loading school:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSchool();
  }, [subdomain]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">School Not Found</h1>
          <p className="text-neutral-400">The requested school could not be found.</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Students',
      value: school.stats.students.toLocaleString(),
      icon: Users,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Active Teachers',
      value: school.stats.teachers.toString(),
      icon: BookOpen,
      change: '+2',
      changeType: 'positive' as const,
    },
    {
      title: 'Total Classes',
      value: school.stats.classes.toString(),
      icon: BookOpen,
      change: '+1',
      changeType: 'positive' as const,
    },
    {
      title: 'Attendance Rate',
      value: '94%',
      icon: TrendingUp,
      change: '+1%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-neutral-400">Welcome back! Here's what's happening with your school.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">New student enrollment</p>
                  <p className="text-xs text-neutral-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">Teacher added to Mathematics class</p>
                  <p className="text-xs text-neutral-400">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">Fee payment received</p>
                  <p className="text-xs text-neutral-400">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-left transition-colors">
                <Users className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-white">Add Student</h3>
                <p className="text-xs text-neutral-400">Register new student</p>
              </button>
              <button className="p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-left transition-colors">
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-white">Create Class</h3>
                <p className="text-xs text-neutral-400">Add new class</p>
              </button>
              <button className="p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-left transition-colors">
                <DollarSign className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-white">Record Payment</h3>
                <p className="text-xs text-neutral-400">Fee collection</p>
              </button>
              <button className="p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-left transition-colors">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-white">View Reports</h3>
                <p className="text-xs text-neutral-400">Analytics & insights</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}