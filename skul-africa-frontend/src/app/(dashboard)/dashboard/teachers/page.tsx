"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Download, MoreVertical, Mail, Phone, BookOpen } from "lucide-react";
import { useState } from "react";

export default function TeachersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Teachers</h1>
                    <p className="text-gray-600 mt-1">Manage all teacher records and assignments</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Teacher
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
                                placeholder="Search by name, subject, or email..."
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

            {/* Teachers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachers.map((teacher) => (
                    <Card key={teacher.id} className="card-hover">
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                        {teacher.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                                        <p className="text-sm text-gray-500">{teacher.subject}</p>
                                    </div>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <MoreVertical className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    <span>{teacher.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{teacher.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <BookOpen className="w-4 h-4" />
                                    <span>{teacher.classes} classes</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${teacher.status === "Active"
                                        ? "bg-secondary-100 text-secondary-700"
                                        : "bg-gray-100 text-gray-700"
                                    }`}>
                                    {teacher.status}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <Card>
                <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-semibold">1-9</span> of <span className="font-semibold">87</span> teachers
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

const teachers = [
    {
        id: 1,
        name: "Dr. Emily Carter",
        initials: "EC",
        email: "emily.carter@school.com",
        phone: "+1 234-567-8901",
        subject: "Mathematics",
        classes: 5,
        status: "Active",
    },
    {
        id: 2,
        name: "Mr. David Smith",
        initials: "DS",
        email: "david.smith@school.com",
        phone: "+1 234-567-8902",
        subject: "Physics",
        classes: 4,
        status: "Active",
    },
    {
        id: 3,
        name: "Ms. Sarah Johnson",
        initials: "SJ",
        email: "sarah.j@school.com",
        phone: "+1 234-567-8903",
        subject: "English Literature",
        classes: 6,
        status: "Active",
    },
    {
        id: 4,
        name: "Prof. Michael Chen",
        initials: "MC",
        email: "michael.c@school.com",
        phone: "+1 234-567-8904",
        subject: "Chemistry",
        classes: 4,
        status: "Active",
    },
    {
        id: 5,
        name: "Mrs. Lisa Anderson",
        initials: "LA",
        email: "lisa.a@school.com",
        phone: "+1 234-567-8905",
        subject: "Biology",
        classes: 5,
        status: "Active",
    },
    {
        id: 6,
        name: "Mr. James Wilson",
        initials: "JW",
        email: "james.w@school.com",
        phone: "+1 234-567-8906",
        subject: "History",
        classes: 3,
        status: "Active",
    },
    {
        id: 7,
        name: "Ms. Emma Davis",
        initials: "ED",
        email: "emma.d@school.com",
        phone: "+1 234-567-8907",
        subject: "Geography",
        classes: 4,
        status: "Active",
    },
    {
        id: 8,
        name: "Dr. Robert Brown",
        initials: "RB",
        email: "robert.b@school.com",
        phone: "+1 234-567-8908",
        subject: "Computer Science",
        classes: 5,
        status: "Active",
    },
    {
        id: 9,
        name: "Ms. Olivia Martinez",
        initials: "OM",
        email: "olivia.m@school.com",
        phone: "+1 234-567-8909",
        subject: "Art & Design",
        classes: 3,
        status: "Active",
    },
];
