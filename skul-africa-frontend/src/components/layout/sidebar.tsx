"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    BookOpen,
    Calendar,
    ClipboardCheck,
    BarChart3,
    DollarSign,
    Settings,
    Menu,
    X,
    LogOut
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Students", href: "/dashboard/students", icon: Users },
    { name: "Teachers", href: "/dashboard/teachers", icon: GraduationCap },
    { name: "Classes", href: "/dashboard/classes", icon: BookOpen },
    { name: "Subjects", href: "/dashboard/subjects", icon: Calendar },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Attendance", href: "/dashboard/attendance", icon: ClipboardCheck },
    { name: "Assessment", href: "/dashboard/assessment", icon: BarChart3 },
    { name: "Finance", href: "/dashboard/finance", icon: DollarSign },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-black text-white shadow-lg border border-neutral-800"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-40 h-screen w-64 bg-black border-r border-neutral-900 transition-transform duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-neutral-900">
                        <Link href="/dashboard" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white tracking-tight">Skul Africa</span>
                                <p className="text-xs text-neutral-500">School Dashboard</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative overflow-hidden",
                                        isActive
                                            ? "text-white bg-neutral-900"
                                            : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                                    )}
                                    <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-primary" : "text-neutral-500 group-hover:text-white")} />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User section */}
                    <div className="p-4 border-t border-neutral-900">
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-900 cursor-pointer transition-colors group">
                            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-semibold border border-neutral-700 group-hover:border-primary/50 transition-colors">
                                JD
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-white">John Doe</p>
                                <p className="text-xs text-neutral-500">Admin</p>
                            </div>
                            <LogOut className="w-4 h-4 text-neutral-500 group-hover:text-red-500 transition-colors" />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
