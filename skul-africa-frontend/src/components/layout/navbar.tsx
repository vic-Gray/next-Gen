"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            scrolled
                ? "bg-black/80 backdrop-blur-md border-neutral-800 py-3"
                : "bg-transparent border-transparent py-5"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                        <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Skul Africa</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#features" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
                        How it Works
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
                        Stories
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="bg-primary hover:bg-primary/90 text-white border-0">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
