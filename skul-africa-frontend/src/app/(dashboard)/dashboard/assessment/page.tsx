"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, BarChart3, FileText, MoreVertical, Calendar } from "lucide-react";
import { useState } from "react";

export default function AssessmentPage() {
    const [activeTab, setActiveTab] = useState("assessments");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Assessments</h1>
                    <p className="text-gray-600 mt-1">Manage exams, quizzes, and grading</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Create Assessment
                </Button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab("assessments")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "assessments"
                            ? "border-primary-500 text-primary-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        All Assessments
                    </button>
                    <button
                        onClick={() => setActiveTab("grading")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "grading"
                            ? "border-primary-500 text-primary-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        Gradebook
                    </button>
                    <button
                        onClick={() => setActiveTab("reports")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "reports"
                            ? "border-primary-500 text-primary-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        Report Cards
                    </button>
                </nav>
            </div>

            {/* Content */}
            {activeTab === "assessments" && (
                <div className="space-y-6">
                    {/* Search and Filters */}
                    <div className="flex gap-4">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search assessments..."
                                className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option>All Classes</option>
                            <option>Grade 10</option>
                            <option>Grade 9</option>
                        </select>
                        <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option>All Subjects</option>
                            <option>Mathematics</option>
                            <option>Science</option>
                            <option>English</option>
                        </select>
                    </div>

                    {/* Assessments Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {assessments.map((assessment) => (
                            <Card key={assessment.id} className="card-hover">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl ${assessment.color} bg-opacity-10`}>
                                            <FileText className={`w-6 h-6 ${assessment.textColor}`} />
                                        </div>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors -mr-2 -mt-2">
                                            <MoreVertical className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{assessment.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{assessment.subject} • {assessment.class}</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span>{assessment.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <BarChart3 className="w-4 h-4" />
                                            <span>Max Score: {assessment.maxScore}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assessment.status === "Published" ? "bg-emerald-100 text-emerald-700" :
                                            assessment.status === "Draft" ? "bg-gray-100 text-gray-700" :
                                                "bg-blue-100 text-blue-700"
                                            }`}>
                                            {assessment.status}
                                        </span>
                                        <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 hover:bg-primary-50">
                                            View Details
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "grading" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Gradebook - Grade 10-A (Mathematics)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Mid-Term (100)</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Quiz 1 (20)</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Assignment (50)</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Total (%)</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">Student Name {i}</td>
                                            <td className="px-6 py-4 text-center">
                                                <input type="number" className="w-16 p-1 border rounded text-center" defaultValue={85 + i} />
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <input type="number" className="w-16 p-1 border rounded text-center" defaultValue={18} />
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <input type="number" className="w-16 p-1 border rounded text-center" defaultValue={45} />
                                            </td>
                                            <td className="px-6 py-4 text-center font-semibold">88%</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">A</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            )}

            {activeTab === "reports" && (
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Generate Report Cards</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Select Class</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                    <option>Grade 10-A</option>
                                    <option>Grade 10-B</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Term</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                    <option>Term 1</option>
                                    <option>Term 2</option>
                                    <option>Final</option>
                                </select>
                            </div>
                            <Button className="w-full gap-2">
                                <FileText className="w-4 h-4" />
                                Generate Reports
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded border border-gray-200">
                                                <FileText className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Grade 10-A Term 1 Report</p>
                                                <p className="text-xs text-gray-500">Generated on Nov 15, 2025</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm">Download</Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

const assessments = [
    {
        id: 1,
        title: "Mid-Term Mathematics Exam",
        subject: "Mathematics",
        class: "Grade 10-A",
        date: "Nov 25, 2025",
        maxScore: 100,
        status: "Scheduled",
        color: "bg-blue-100",
        textColor: "text-blue-600",
    },
    {
        id: 2,
        title: "Physics Quiz: Motion",
        subject: "Physics",
        class: "Grade 10-B",
        date: "Nov 20, 2025",
        maxScore: 20,
        status: "Published",
        color: "bg-purple-100",
        textColor: "text-purple-600",
    },
    {
        id: 3,
        title: "English Essay Assignment",
        subject: "English",
        class: "Grade 9-A",
        date: "Nov 18, 2025",
        maxScore: 50,
        status: "Grading",
        color: "bg-emerald-100",
        textColor: "text-emerald-600",
    },
    {
        id: 4,
        title: "Chemistry Lab Report",
        subject: "Chemistry",
        class: "Grade 11-Sci",
        date: "Nov 15, 2025",
        maxScore: 30,
        status: "Completed",
        color: "bg-amber-100",
        textColor: "text-amber-600",
    },
    {
        id: 5,
        title: "History Final Project",
        subject: "History",
        class: "Grade 9-B",
        date: "Dec 10, 2025",
        maxScore: 100,
        status: "Draft",
        color: "bg-red-100",
        textColor: "text-red-600",
    },
];
