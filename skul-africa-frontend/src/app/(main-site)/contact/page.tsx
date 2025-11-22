import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@skulafrica.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 123 456 7890",
      description: "Mon-Fri 9AM-6PM WAT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      description: "Always here to help",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about Skul Africa? We're here to help you transform your school's management.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-neutral-900 border-neutral-800 text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-neutral-400">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Whether you're a school administrator, teacher, or just curious about our platform,
                  we'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Why Choose Skul Africa?</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li>• Comprehensive school management solution</li>
                      <li>• Customizable for African educational needs</li>
                      <li>• 24/7 support and training</li>
                      <li>• Secure, scalable, and reliable</li>
                      <li>• Affordable pricing with no hidden fees</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Quick Start Guide</h3>
                    <p className="text-neutral-400">
                      New to Skul Africa? Check out our comprehensive documentation and video tutorials
                      to get your school up and running in minutes.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Your first name"
                          className="bg-neutral-800 border-neutral-700 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Your last name"
                          className="bg-neutral-800 border-neutral-700 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-neutral-800 border-neutral-700 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+234 123 456 7890"
                        className="bg-neutral-800 border-neutral-700 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        School/Organization
                      </label>
                      <Input
                        type="text"
                        placeholder="School name or organization"
                        className="bg-neutral-800 border-neutral-700 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        placeholder="What's this about?"
                        className="bg-neutral-800 border-neutral-700 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="bg-neutral-800 border-neutral-700 text-white"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Find Us in <span className="text-primary">Lagos</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Located in the heart of Africa's business capital
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                <p className="text-neutral-400 mb-4">
                  Victoria Island, Lagos, Nigeria
                </p>
                <p className="text-sm text-neutral-500">
                  Interactive map integration available in production
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}