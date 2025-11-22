"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function CalendarPage() {
    const [currentMonth, setCurrentMonth] = useState("November 2025");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">Academic Calendar</h1>
                    <p className="text-gray-600 mt-1">Schedule and manage school events</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Event
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Calendar Grid */}
                <div className="flex-1">
                    <Card className="h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <CardTitle className="text-xl">{currentMonth}</CardTitle>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                                {/* Days Header */}
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="bg-gray-50 p-4 text-center text-sm font-semibold text-gray-600">
                                        {day}
                                    </div>
                                ))}

                                {/* Calendar Days */}
                                {Array.from({ length: 35 }).map((_, i) => {
                                    const day = i - 2; // Offset for start of month
                                    const isToday = day === 20;
                                    const hasEvent = [5, 12, 20, 25].includes(day);

                                    return (
                                        <div key={i} className={`bg-white min-h-[120px] p-3 relative group hover:bg-gray-50 transition-colors ${day <= 0 || day > 30 ? "bg-gray-50/50 text-gray-400" : ""}`}>
                                            <span className={`text-sm font-medium ${isToday ? "bg-primary-600 text-white w-7 h-7 flex items-center justify-center rounded-full" : "text-gray-700"}`}>
                                                {day > 0 && day <= 30 ? day : ""}
                                            </span>

                                            {day > 0 && day <= 30 && hasEvent && (
                                                <div className="mt-2 space-y-1">
                                                    <div className="text-xs p-1.5 rounded bg-blue-100 text-blue-700 font-medium truncate">
                                                        Staff Meeting
                                                    </div>
                                                    {day === 20 && (
                                                        <div className="text-xs p-1.5 rounded bg-emerald-100 text-emerald-700 font-medium truncate">
                                                            Sports Day
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Upcoming Events Sidebar */}
                <div className="w-full lg:w-80 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className={`w-12 h-12 rounded-lg ${event.color} flex flex-col items-center justify-center text-white flex-shrink-0`}>
                                        <span className="text-xs font-medium uppercase">{event.month}</span>
                                        <span className="text-lg font-bold">{event.day}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                            <MapPin className="w-3 h-3" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

const events = [
    {
        id: 1,
        title: "Annual Sports Day",
        month: "NOV",
        day: "20",
        time: "09:00 AM - 04:00 PM",
        location: "School Ground",
        color: "bg-emerald-500",
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        month: "NOV",
        day: "25",
        time: "10:00 AM - 02:00 PM",
        location: "Main Auditorium",
        color: "bg-blue-500",
    },
    {
        id: 3,
        title: "Science Exhibition",
        month: "DEC",
        day: "05",
        time: "09:00 AM - 03:00 PM",
        location: "Science Block",
        color: "bg-purple-500",
    },
    {
        id: 4,
        title: "Winter Break Starts",
        month: "DEC",
        day: "15",
        time: "All Day",
        location: "Campus Wide",
        color: "bg-amber-500",
    },
];
