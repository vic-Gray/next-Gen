"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Download, MoreVertical, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function StudentsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Students</h1>
                    <p className="text-gray-600 mt-1">Manage all student records and information</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Student
                </Button>
            </div>

            {/* Filters and Search */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search by name, admission number, or class..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <Button variant="outline" className="gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Download className="w-4 h-4" />
                            Export
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Students Table */}
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Student
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Admission No.
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Class
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Parent Contact
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                    {student.initials}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{student.name}</p>
                                                    <p className="text-sm text-gray-500">{student.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-mono text-sm text-gray-900">{student.admissionNo}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-900">{student.class}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Phone className="w-3 h-3" />
                                                    <span>{student.parentPhone}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Mail className="w-3 h-3" />
                                                    <span>{student.parentEmail}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.status === "Active"
                                                    ? "bg-secondary-100 text-secondary-700"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                                <MoreVertical className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">234</span> students
                        </p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">Previous</Button>
                            <Button variant="outline" size="sm">Next</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

const students = [
    {
        id: 1,
        name: "Sarah Johnson",
        initials: "SJ",
        email: "sarah.j@school.com",
        admissionNo: "2024001",
        class: "Grade 10-A",
        parentPhone: "+1 234-567-8901",
        parentEmail: "parent@email.com",
        status: "Active",
    },
    {
        id: 2,
        name: "Michael Chen",
        initials: "MC",
        email: "michael.c@school.com",
        admissionNo: "2024002",
        class: "Grade 10-A",
        parentPhone: "+1 234-567-8902",
        parentEmail: "parent2@email.com",
        status: "Active",
    },
    {
        id: 3,
        name: "Emma Williams",
        initials: "EW",
        email: "emma.w@school.com",
        admissionNo: "2024003",
        class: "Grade 9-B",
        parentPhone: "+1 234-567-8903",
        parentEmail: "parent3@email.com",
        status: "Active",
    },
    {
        id: 4,
        name: "James Brown",
        initials: "JB",
        email: "james.b@school.com",
        admissionNo: "2024004",
        class: "Grade 11-C",
        parentPhone: "+1 234-567-8904",
        parentEmail: "parent4@email.com",
        status: "Active",
    },
    {
        id: 5,
        name: "Olivia Davis",
        initials: "OD",
        email: "olivia.d@school.com",
        admissionNo: "2024005",
        class: "Grade 10-B",
        parentPhone: "+1 234-567-8905",
        parentEmail: "parent5@email.com",
        status: "Active",
    },
];
