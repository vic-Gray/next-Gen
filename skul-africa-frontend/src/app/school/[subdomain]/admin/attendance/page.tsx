import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AttendancePage() {
  const todayAttendance = {
    present: 245,
    absent: 15,
    late: 8,
    total: 268,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Attendance Management</h1>
          <p className="text-neutral-400">Track and manage student attendance records.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="h-4 w-4 mr-2" />
          Mark Attendance
        </Button>
      </div>

      {/* Today's Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{todayAttendance.present}</p>
                <p className="text-sm text-neutral-400">Present</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <XCircle className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{todayAttendance.absent}</p>
                <p className="text-sm text-neutral-400">Absent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{todayAttendance.late}</p>
                <p className="text-sm text-neutral-400">Late</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{todayAttendance.total}</p>
                <p className="text-sm text-neutral-400">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Attendance */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Today's Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-neutral-600 mx-auto mb-4" />
            <p className="text-neutral-400">Attendance marking interface would go here</p>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Open Attendance Sheet
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}