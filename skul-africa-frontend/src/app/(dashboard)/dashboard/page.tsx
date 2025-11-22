import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, TrendingUp, DollarSign, Calendar, AlertCircle } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
                        <Users className="w-5 h-5 text-primary-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-heading font-bold text-gray-900">1,234</div>
                        <p className="text-xs text-secondary-600 flex items-center gap-1 mt-2">
                            <TrendingUp className="w-3 h-3" />
                            <span>+12% from last month</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Teachers</CardTitle>
                        <GraduationCap className="w-5 h-5 text-secondary-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-heading font-bold text-gray-900">87</div>
                        <p className="text-xs text-secondary-600 flex items-center gap-1 mt-2">
                            <TrendingUp className="w-3 h-3" />
                            <span>+3 new this month</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Attendance Rate</CardTitle>
                        <Calendar className="w-5 h-5 text-accent-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-heading font-bold text-gray-900">94.5%</div>
                        <p className="text-xs text-gray-500 mt-2">Today's attendance</p>
                    </CardContent>
                </Card>

                <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Fee Collection</CardTitle>
                        <DollarSign className="w-5 h-5 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-heading font-bold text-gray-900">$45.2K</div>
                        <p className="text-xs text-gray-500 mt-2">This month</p>
                    </CardContent>
                </Card>
            </div>

            {/* Two Column Layout */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <activity.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
                                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="text-center">
                                        <div className="text-2xl font-heading font-bold text-primary-600">{event.day}</div>
                                        <div className="text-xs text-gray-500 uppercase">{event.month}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">{event.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Alerts */}
            <Card className="border-amber-200 bg-amber-50">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-amber-900">Pending Actions</h3>
                            <p className="text-sm text-amber-800 mt-1">
                                You have 12 pending fee payments and 5 student admission requests awaiting approval.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

const recentActivities = [
    {
        icon: Users,
        title: "New Student Enrolled",
        description: "Sarah Johnson has been enrolled in Grade 10-A",
        time: "2 hours ago",
        color: "bg-primary-500",
    },
    {
        icon: GraduationCap,
        title: "Teacher Added",
        description: "Mr. David Smith joined as Math teacher",
        time: "5 hours ago",
        color: "bg-secondary-500",
    },
    {
        icon: Calendar,
        title: "Attendance Marked",
        description: "Attendance recorded for Grade 9-B (28/30 present)",
        time: "1 day ago",
        color: "bg-accent-500",
    },
    {
        icon: DollarSign,
        title: "Fee Payment Received",
        description: "Payment of $500 received from John Doe",
        time: "2 days ago",
        color: "bg-purple-500",
    },
];

const upcomingEvents = [
    {
        day: "25",
        month: "Nov",
        title: "Parent-Teacher Meeting",
        time: "10:00 AM - 2:00 PM",
    },
    {
        day: "28",
        month: "Nov",
        title: "Mid-Term Exams Begin",
        time: "9:00 AM onwards",
    },
    {
        day: "05",
        month: "Dec",
        title: "Annual Sports Day",
        time: "8:00 AM - 4:00 PM",
    },
    {
        day: "15",
        month: "Dec",
        title: "Winter Break Begins",
        time: "All Day",
    },
];
