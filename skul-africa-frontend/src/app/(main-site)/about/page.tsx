import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CheckCircle, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
            About <span className="text-primary">Skul Africa</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing education management across Africa, empowering schools with cutting-edge technology and seamless administration tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                To democratize access to world-class education management tools for every school in Africa, regardless of size or location. We believe that when schools thrive, communities thrive.
              </p>
              <div className="space-y-4">
                {[
                  "Empower educators with powerful tools",
                  "Streamline administrative processes",
                  "Foster digital transformation in education",
                  "Build sustainable educational ecosystems"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-sm text-neutral-400">Cutting-edge solutions for modern education</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-sm text-neutral-400">Building connections across Africa</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-sm text-neutral-400">Committed to the highest standards</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                <p className="text-sm text-neutral-400">Transforming education outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Join the <span className="text-primary">Revolution?</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Start your school's journey towards digital excellence today.
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