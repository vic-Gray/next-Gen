"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, User, Bell, Lock, Palette, Globe, Database, Mail } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-heading font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your school profile and preferences</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <Card className="lg:w-64 h-fit">
                    <CardContent className="p-2">
                        <nav className="space-y-1">
                            {settingsNav.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id
                                        ? "bg-primary-50 text-primary-700"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </CardContent>
                </Card>

                {/* Content Area */}
                <div className="flex-1 space-y-6">
                    {/* General Settings */}
                    {activeTab === "general" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>School Profile</CardTitle>
                                <CardDescription>Update your school's basic information</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <span className="text-sm text-gray-500">Logo</span>
                                    </div>
                                    <Button variant="outline">Change Logo</Button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">School Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Modern High School"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="admin@modernhigh.edu"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            defaultValue="+1 234 567 8900"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Website</label>
                                        <input
                                            type="url"
                                            defaultValue="https://modernhigh.edu"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Address</label>
                                    <textarea
                                        rows={3}
                                        defaultValue="123 Education Lane, Knowledge City, ST 12345"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Button>Save Changes</Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Branding Settings */}
                    {activeTab === "branding" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Branding & Appearance</CardTitle>
                                <CardDescription>Customize your school's theme and colors</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-gray-700">Primary Color</label>
                                    <div className="flex gap-3">
                                        {colors.map((color) => (
                                            <button
                                                key={color}
                                                className={`w-10 h-10 rounded-full ${color} ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 focus:ring-primary-500 transition-all`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Font Family</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                        <option>Inter (Default)</option>
                                        <option>Roboto</option>
                                        <option>Open Sans</option>
                                        <option>Lato</option>
                                    </select>
                                </div>

                                <div className="flex items-center justify-between py-4 border-t border-gray-100">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Dark Mode</h4>
                                        <p className="text-sm text-gray-500">Enable dark mode for your dashboard</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                    </label>
                                </div>

                                <div className="flex justify-end">
                                    <Button>Save Changes</Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Users & Roles Settings */}
                    {activeTab === "users" && (
                        <div className="space-y-6">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>User Management</CardTitle>
                                        <CardDescription>Manage access and permissions for staff</CardDescription>
                                    </div>
                                    <Button className="gap-2">
                                        <User className="w-4 h-4" />
                                        Add User
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Active</th>
                                                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {[
                                                    { name: "John Doe", email: "admin@school.com", role: "Super Admin", status: "Active", lastActive: "Just now" },
                                                    { name: "Sarah Smith", email: "sarah@school.com", role: "Teacher", status: "Active", lastActive: "2 hours ago" },
                                                    { name: "Mike Johnson", email: "mike@school.com", role: "Accountant", status: "Active", lastActive: "1 day ago" },
                                                ].map((user, i) => (
                                                    <tr key={i} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xs">
                                                                    {user.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-gray-900">{user.name}</p>
                                                                    <p className="text-xs text-gray-500">{user.email}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                                {user.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{user.lastActive}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="ghost" size="sm">Edit</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Roles & Permissions</CardTitle>
                                    <CardDescription>Define what each role can do</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {["Super Admin", "Teacher", "Accountant", "Student", "Parent"].map((role) => (
                                            <div key={role} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-gray-100 rounded-lg">
                                                        <Lock className="w-5 h-5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">{role}</h4>
                                                        <p className="text-sm text-gray-500">Full access to all features</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">Configure</Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const settingsNav = [
    { id: "general", label: "General", icon: SettingsIcon },
    { id: "branding", label: "Branding", icon: Palette },
    { id: "users", label: "Users & Roles", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "domain", label: "Domain", icon: Globe },
    { id: "backup", label: "Data & Backup", icon: Database },
    { id: "email", label: "Email Settings", icon: Mail },
];

const colors = [
    "bg-blue-600",
    "bg-emerald-600",
    "bg-purple-600",
    "bg-amber-600",
    "bg-red-600",
    "bg-pink-600",
    "bg-indigo-600",
];
