"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, DollarSign, CreditCard, Download, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function FinancePage() {
    const [activeTab, setActiveTab] = useState("invoices");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Finance</h1>
                    <p className="text-gray-600 mt-1">Manage fees, payments, and expenses</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Reports
                    </Button>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        Create Invoice
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-emerald-50 border-emerald-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-emerald-100 rounded-xl">
                                <DollarSign className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                                +12%
                            </span>
                        </div>
                        <p className="text-sm font-medium text-emerald-800">Total Revenue</p>
                        <h3 className="text-3xl font-bold text-emerald-900 mt-1">$124,500</h3>
                        <p className="text-sm text-emerald-700 mt-2">This academic year</p>
                    </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <CreditCard className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-full">
                                This Month
                            </span>
                        </div>
                        <p className="text-sm font-medium text-blue-800">Collected Fees</p>
                        <h3 className="text-3xl font-bold text-blue-900 mt-1">$45,200</h3>
                        <p className="text-sm text-blue-700 mt-2">85% collection rate</p>
                    </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-amber-100 rounded-xl">
                                <AlertCircle className="w-6 h-6 text-amber-600" />
                            </div>
                            <span className="text-sm font-medium text-amber-600 bg-amber-100 px-2.5 py-0.5 rounded-full">
                                Pending
                            </span>
                        </div>
                        <p className="text-sm font-medium text-amber-800">Outstanding</p>
                        <h3 className="text-3xl font-bold text-amber-900 mt-1">$8,450</h3>
                        <p className="text-sm text-amber-700 mt-2">From 45 students</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Transactions */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Invoice ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {transactions.map((tx) => (
                                    <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-sm text-gray-600">{tx.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                                                    {tx.initials}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{tx.student}</p>
                                                    <p className="text-xs text-gray-500">{tx.class}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{tx.type}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{tx.date}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">${tx.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.status === "Paid" ? "bg-emerald-100 text-emerald-700" :
                                                    tx.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                        "bg-red-100 text-red-700"
                                                }`}>
                                                {tx.status}
                                            </span>
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

const transactions = [
    {
        id: "INV-2024-001",
        student: "Sarah Johnson",
        initials: "SJ",
        class: "Grade 10-A",
        type: "Tuition Fee",
        date: "Nov 20, 2025",
        amount: "1,200.00",
        status: "Paid",
    },
    {
        id: "INV-2024-002",
        student: "Michael Chen",
        initials: "MC",
        class: "Grade 10-A",
        type: "Transport Fee",
        date: "Nov 19, 2025",
        amount: "150.00",
        status: "Paid",
    },
    {
        id: "INV-2024-003",
        student: "Emma Williams",
        initials: "EW",
        class: "Grade 9-B",
        type: "Tuition Fee",
        date: "Nov 18, 2025",
        amount: "1,200.00",
        status: "Pending",
    },
    {
        id: "INV-2024-004",
        student: "James Brown",
        initials: "JB",
        class: "Grade 11-C",
        type: "Lab Fee",
        date: "Nov 18, 2025",
        amount: "300.00",
        status: "Overdue",
    },
    {
        id: "INV-2024-005",
        student: "Olivia Davis",
        initials: "OD",
        class: "Grade 10-B",
        type: "Tuition Fee",
        date: "Nov 17, 2025",
        amount: "1,200.00",
        status: "Paid",
    },
];
