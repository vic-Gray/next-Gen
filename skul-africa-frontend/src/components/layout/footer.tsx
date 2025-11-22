import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white border-t border-neutral-900">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Skul Africa</h3>
                        <p className="text-neutral-400 text-sm">
                            Empowering education through technology. Connecting students, schools, and businesses across Africa.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-primary transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>123 Education Lane, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+234 123 456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>hello@skulafrica.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-900 mt-12 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Skul Africa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
