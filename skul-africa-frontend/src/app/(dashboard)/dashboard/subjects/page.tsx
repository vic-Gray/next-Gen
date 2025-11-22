"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Book, Users, Clock, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function SubjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Subjects</h1>
                    <p className="text-gray-600 mt-1">Manage academic subjects and curriculum</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Subject
                </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="search"
                    placeholder="Search subjects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Subjects List */}
            <div className="space-y-4">
                {subjects.map((subject) => (
                    <Card key={subject.id} className="card-hover">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center`}>
                                        <Book className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                                        <p className="text-sm text-gray-500">{subject.code} • {subject.department}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="hidden md:block text-right">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                                            <Users className="w-4 h-4" />
                                            <span>Teachers</span>
                                        </div>
                                        <p className="font-semibold text-gray-900">{subject.teachers} Assigned</p>
                                    </div>

                                    <div className="hidden md:block text-right">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                                            <Clock className="w-4 h-4" />
                                            <span>Weekly Hours</span>
                                        </div>
                                        <p className="font-semibold text-gray-900">{subject.hours} Hours</p>
                                    </div>

                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <MoreVertical className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

const subjects = [
    {
        id: 1,
        name: "Mathematics",
        code: "MTH-101",
        department: "Science & Math",
        teachers: 4,
        hours: 12,
        color: "bg-blue-500",
    },
    {
        id: 2,
        name: "Physics",
        code: "PHY-101",
        department: "Science & Math",
        teachers: 3,
        hours: 8,
        color: "bg-purple-500",
    },
    {
        id: 3,
        name: "English Literature",
        code: "ENG-101",
        department: "Languages",
        teachers: 5,
        hours: 10,
        color: "bg-emerald-500",
    },
    {
        id: 4,
        name: "Chemistry",
        code: "CHM-101",
        department: "Science & Math",
        teachers: 3,
        hours: 8,
        color: "bg-amber-500",
    },
    {
        id: 5,
        name: "History",
        code: "HIS-101",
        department: "Humanities",
        teachers: 2,
        hours: 6,
        color: "bg-red-500",
    },
    {
        id: 6,
        name: "Computer Science",
        code: "CS-101",
        department: "Technology",
        teachers: 3,
        hours: 10,
        color: "bg-cyan-500",
    },
];
