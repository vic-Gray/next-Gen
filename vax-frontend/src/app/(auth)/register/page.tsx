"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, Building2, Globe, User, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        schoolName: "",
        subdomain: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            // TODO: Implement actual registration logic with API
            console.log("Register:", formData);

            // Navigate to dashboard
            router.push("/dashboard");
        }
    };

    const isSubdomainValid = formData.subdomain.length >= 3 && /^[a-z0-9-]+$/.test(formData.subdomain);

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
                            Register your school
                        </h1>
                        <p className="text-neutral-400">
                            Get started with a 14-day free trial
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center mb-8">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-primary text-white shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'bg-neutral-800 text-neutral-500'} font-bold text-sm transition-all duration-300`}>
                            1
                        </div>
                        <div className={`flex-1 h-1 mx-2 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-neutral-800'} transition-all duration-300`} />
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-primary text-white shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'bg-neutral-800 text-neutral-500'} font-bold text-sm transition-all duration-300`}>
                            2
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-6 animate-fade-in">
                                <div>
                                    <label htmlFor="schoolName" className="block text-sm font-medium text-neutral-300 mb-2">
                                        School Name
                                    </label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                        <input
                                            id="schoolName"
                                            type="text"
                                            required
                                            value={formData.schoolName}
                                            onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                            placeholder="Modern High School"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subdomain" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Choose your subdomain
                                    </label>
                                    <div className="relative group">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                        <input
                                            id="subdomain"
                                            type="text"
                                            required
                                            value={formData.subdomain}
                                            onChange={(e) => setFormData({ ...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                                            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                            placeholder="modernhighschool"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-neutral-500">
                                        Your school will be accessible at:{" "}
                                        <span className={`font-mono ${isSubdomainValid ? 'text-primary' : 'text-neutral-400'}`}>
                                            {formData.subdomain || 'yourschool'}.skulafrica.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                                            First Name
                                        </label>
                                        <div className="relative group">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                            <input
                                                id="firstName"
                                                type="text"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

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
                                            placeholder="john@school.com"
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

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative group">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-primary transition-colors" />
                                        <input
                                            id="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-neutral-600 transition-all"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-start cursor-pointer">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formData.agreeToTerms}
                                            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                            className="w-4 h-4 mt-1 text-primary bg-neutral-900 border-neutral-700 rounded focus:ring-primary focus:ring-offset-0"
                                        />
                                        <span className="ml-2 text-sm text-neutral-400">
                                            I agree to the{" "}
                                            <Link href="/terms" className="text-primary hover:text-primary/80">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy" className="text-primary hover:text-primary/80">
                                                Privacy Policy
                                            </Link>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-4">
                            {step === 2 && (
                                <Button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    variant="outline"
                                    className="flex-1 py-6 border-neutral-700 text-white hover:bg-neutral-800 hover:text-white rounded-lg font-bold"
                                >
                                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                                </Button>
                            )}
                            <Button
                                type="submit"
                                className="flex-1 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg shadow-[0_0_20px_-5px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)] transition-all duration-300"
                            >
                                {step === 1 ? (
                                    <>Continue <ArrowRight className="ml-2 h-5 w-5" /></>
                                ) : (
                                    "Create Account"
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-neutral-400">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 bg-neutral-900 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-neutral-900 to-neutral-950" />
                <div className="relative z-10 max-w-md">
                    <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-[0_0_40px_-10px_rgba(229,9,20,0.3)]">
                        <Building2 className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">
                        Join 500+ schools already using Skul Africa
                    </h2>
                    <p className="text-lg text-neutral-400 text-center mb-8">
                        Start managing your school more efficiently with our all-in-one platform.
                    </p>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                    <benefit.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                                    <p className="text-sm text-neutral-400">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const benefits = [
    {
        icon: GraduationCap,
        title: "14-day free trial",
        description: "No credit card required to get started",
    },
    {
        icon: Globe,
        title: "Your own subdomain",
        description: "Custom branded URL for your school",
    },
    {
        icon: Lock,
        title: "Secure & private",
        description: "Bank-level security for your data",
    },
];
