"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual login logic with API
        console.log("Login:", formData);

        // Navigate to dashboard
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex bg-black text-white">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center space-x-2 mb-8 group">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Skul Africa</span>
                        </Link>

                        <h1 className="text-3xl font-bold text-white mb-2">
                            Welcome back
                        </h1>
                        <p className="text-neutral-400">
                            Sign in to your school dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                                Email address
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                    placeholder="you@school.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-11 pr-12 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.remember}
                                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                    className="w-4 h-4 text-primary bg-neutral-900 border-neutral-700 rounded focus:ring-primary focus:ring-offset-0"
                                />
                                <span className="ml-2 text-sm text-neutral-400">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg shadow-[0_0_20px_-5px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)] transition-all duration-300"
                        >
                            Sign in <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-neutral-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                                Register your school
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 bg-neutral-900 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-neutral-900 to-neutral-950" />
                <div className="relative z-10 max-w-md text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-[0_0_40px_-10px_rgba(229,9,20,0.3)]">
                        <GraduationCap className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Manage your school with ease
                    </h2>
                    <p className="text-lg text-neutral-400">
                        Access your dashboard to manage students, teachers, attendance, and more.
                    </p>

                    <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-neutral-500">Schools</div>
                        </div>
                        <div className="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                            <div className="text-2xl font-bold text-white">50K+</div>
                            <div className="text-sm text-neutral-500">Students</div>
                        </div>
                        <div className="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-sm text-neutral-500">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
