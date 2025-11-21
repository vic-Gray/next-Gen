import Link from "next/link";
import { ArrowRight, CheckCircle, Users, BookOpen, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary tracking-tighter">Skul Africa</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How it Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
            The Future of <span className="text-primary">Education</span>
            <br /> is Here.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Skul Africa bridges the gap between students, schools, and businesses.
            Manage your institution, build your profile, and access limitless resources.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_-5px_rgba(229,9,20,0.6)] transition-all duration-300">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/10 pt-12 max-w-5xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">Schools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50k+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">Resources</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems / Why It Matters */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why <span className="text-primary">Skul Africa?</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Traditional education management is fragmented. We bring everything together in one seamless, powerful platform designed for the modern African educational landscape.
              </p>
              <ul className="space-y-6">
                {[
                  "Unified dashboard for students and administrators",
                  "Real-time analytics and performance tracking",
                  "Seamless communication channels",
                  "Secure and scalable infrastructure"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                  <p className="text-sm text-neutral-400">Connect with peers and mentors worldwide.</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Resources</h3>
                  <p className="text-sm text-neutral-400">Access a vast library of educational content.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                  <p className="text-sm text-neutral-400">Track progress and achieve your goals.</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                  <p className="text-sm text-neutral-400">Enterprise-grade data protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-black relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple. Powerful. <span className="text-primary">Effective.</span></h2>
            <p className="text-neutral-400 text-lg">
              Getting started with Skul Africa is as easy as 1-2-3. We've streamlined the process so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up as a student, school, or business in seconds."
              },
              {
                step: "02",
                title: "Setup Profile",
                desc: "Customize your dashboard and preferences to suit your needs."
              },
              {
                step: "03",
                title: "Start Growing",
                desc: "Access resources, connect with others, and track your success."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-neutral-800 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-neutral-950 p-8 rounded-2xl border border-white/10 h-full">
                  <div className="text-6xl font-bold text-white/5 mb-6 absolute top-4 right-6">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                  <p className="text-neutral-400 relative z-10">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Transform Your <br /><span className="text-primary">Education Experience?</span></h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Join thousands of students and institutions already using Skul Africa to power their future.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-8 text-xl rounded-full shadow-[0_0_50px_-10px_rgba(229,9,20,0.5)] hover:shadow-[0_0_60px_-10px_rgba(229,9,20,0.6)] transition-all duration-300">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
