"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, X, Clock, Users, Filter, Download } from "lucide-react";
import { useState } from "react";

export default function AttendancePage() {
    const [selectedClass, setSelectedClass] = useState("Grade 10-A");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Attendance</h1>
                    <p className="text-gray-600 mt-1">Track and manage student attendance</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Export Report
                    </Button>
                    <Button className="gap-2">
                        <Check className="w-4 h-4" />
                        Mark Attendance
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 space-y-2">
                            <label className="text-sm font-medium text-gray-700">Select Class</label>
                            <select
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                            >
                                <option>Grade 10-A</option>
                                <option>Grade 10-B</option>
                                <option>Grade 9-A</option>
                                <option>Grade 9-B</option>
                            </select>
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <Button variant="secondary" className="w-full md:w-auto">
                            Load Data
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-emerald-50 border-emerald-200">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-emerald-800">Present</p>
                            <p className="text-2xl font-bold text-emerald-900">28</p>
                        </div>
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-red-800">Absent</p>
                            <p className="text-2xl font-bold text-red-900">2</p>
                        </div>
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-5 h-5 text-red-600" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-amber-800">Late</p>
                            <p className="text-2xl font-bold text-amber-900">1</p>
                        </div>
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                            <Clock className="w-5 h-5 text-amber-600" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-blue-800">Total</p>
                            <p className="text-2xl font-bold text-blue-900">31</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Attendance List */}
            <Card>
                <CardHeader>
                    <CardTitle>Student List - {selectedClass}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Roll No</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time In</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {attendanceData.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">
                                                    {student.initials}
                                                </div>
                                                <span className="font-medium text-gray-900">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.rollNo}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.status === "Present" ? "bg-emerald-100 text-emerald-700" :
                                                    student.status === "Absent" ? "bg-red-100 text-red-700" :
                                                        "bg-amber-100 text-amber-700"
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{student.timeIn || "-"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{student.remarks || "-"}</td>
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

const attendanceData = [
    { id: 1, name: "Sarah Johnson", initials: "SJ", rollNo: "1001", status: "Present", timeIn: "08:15 AM", remarks: "" },
    { id: 2, name: "Michael Chen", initials: "MC", rollNo: "1002", status: "Present", timeIn: "08:10 AM", remarks: "" },
    { id: 3, name: "Emma Williams", initials: "EW", rollNo: "1003", status: "Absent", timeIn: "", remarks: "Sick Leave" },
    { id: 4, name: "James Brown", initials: "JB", rollNo: "1004", status: "Late", timeIn: "08:45 AM", remarks: "Bus Delay" },
    { id: 5, name: "Olivia Davis", initials: "OD", rollNo: "1005", status: "Present", timeIn: "08:20 AM", remarks: "" },
    { id: 6, name: "William Wilson", initials: "WW", rollNo: "1006", status: "Present", timeIn: "08:12 AM", remarks: "" },
    { id: 7, name: "Sophia Taylor", initials: "ST", rollNo: "1007", status: "Present", timeIn: "08:18 AM", remarks: "" },
    { id: 8, name: "Lucas Martinez", initials: "LM", rollNo: "1008", status: "Absent", timeIn: "", remarks: "Family Emergency" },
];
