import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Check, Star, Zap, Shield, Users, Headphones } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₦25,000",
      period: "per year",
      description: "Perfect for small schools getting started",
      features: [
        "Up to 200 students",
        "Basic website template",
        "Student management",
        "Attendance tracking",
        "Basic reporting",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₦75,000",
      period: "per year",
      description: "Ideal for growing educational institutions",
      features: [
        "Up to 1,000 students",
        "Custom website design",
        "Advanced student management",
        "Comprehensive attendance system",
        "Financial management",
        "Grade book & assessments",
        "Priority support",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₦150,000",
      period: "per year",
      description: "For large schools with complex needs",
      features: [
        "Unlimited students",
        "Fully custom website",
        "Advanced analytics",
        "Multi-branch support",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment option",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built on modern technology for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime",
    },
    {
      icon: Users,
      title: "Multi-Tenant",
      description: "Each school gets its own isolated environment",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support for all your needs",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your school's needs. All plans include our core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-neutral-900 border-neutral-800 relative ${
                  plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-neutral-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-neutral-400">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/register" className="block">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-neutral-800 hover:bg-neutral-700 border border-neutral-700'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Skul Africa?</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Built specifically for African educational institutions with features that matter most to schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial for all plans. No credit card required to get started.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and mobile money payments.",
              },
              {
                question: "Do you offer discounts for multiple schools?",
                answer: "Yes, we offer volume discounts for school networks and educational groups.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-neutral-800 pb-8">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-neutral-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Transform Your <span className="text-primary">School?</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of schools already using Skul Africa to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-8 text-xl rounded-full shadow-[0_0_50px_-10px_rgba(229,9,20,0.5)] hover:shadow-[0_0_60px_-10px_rgba(229,9,20,0.6)] transition-all duration-300">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 py-8 text-xl rounded-full">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}