"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Users, BookOpen, MoreVertical, Calendar } from "lucide-react";
import { useState } from "react";

export default function ClassesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Classes</h1>
                    <p className="text-gray-600 mt-1">Manage classes, sections, and student allocations</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Class
                </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="search"
                    placeholder="Search classes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Classes Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((cls) => (
                    <Card key={cls.id} className="card-hover">
                        <CardHeader className="flex flex-row items-start justify-between pb-2">
                            <div>
                                <CardTitle className="text-xl">{cls.name}</CardTitle>
                                <p className="text-sm text-gray-500 mt-1">Grade {cls.grade} • Section {cls.section}</p>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors -mr-2 -mt-2">
                                <MoreVertical className="w-4 h-4 text-gray-600" />
                            </button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>Students</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{cls.students} / {cls.capacity}</span>
                                </div>

                                {/* Progress bar for capacity */}
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div
                                        className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${(cls.students / cls.capacity) * 100}%` }}
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Class Teacher</span>
                                    </div>
                                    <span className="font-medium text-gray-900">{cls.teacher}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

const classes = [
    {
        id: 1,
        name: "Grade 10-A",
        grade: "10",
        section: "A",
        students: 28,
        capacity: 30,
        teacher: "Dr. Emily Carter",
    },
    {
        id: 2,
        name: "Grade 10-B",
        grade: "10",
        section: "B",
        students: 25,
        capacity: 30,
        teacher: "Mr. David Smith",
    },
    {
        id: 3,
        name: "Grade 9-A",
        grade: "9",
        section: "A",
        students: 30,
        capacity: 35,
        teacher: "Ms. Sarah Johnson",
    },
    {
        id: 4,
        name: "Grade 9-B",
        grade: "9",
        section: "B",
        students: 32,
        capacity: 35,
        teacher: "Prof. Michael Chen",
    },
    {
        id: 5,
        name: "Grade 11-Science",
        grade: "11",
        section: "Sci",
        students: 22,
        capacity: 25,
        teacher: "Mrs. Lisa Anderson",
    },
    {
        id: 6,
        name: "Grade 11-Arts",
        grade: "11",
        section: "Arts",
        students: 18,
        capacity: 25,
        teacher: "Mr. James Wilson",
    },
];
