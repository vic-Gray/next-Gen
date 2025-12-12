import Link from 'next/link';
import { SchoolData } from '@/lib/school-data';

interface SchoolFooterProps {
  school: SchoolData;
}

export function SchoolFooter({ school }: SchoolFooterProps) {
  const currentYear = new Date().getFullYear();
  const baseUrl = `/school/${school.subdomain}`;

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{school.name}</h3>
            <p className="text-neutral-400 mb-4">
              Empowering education through innovation and excellence.
            </p>
            <div className="space-y-2 text-sm text-neutral-500">
              <p>{school.contact.address}</p>
              <p>Phone: {school.contact.phone}</p>
              <p>Email: {school.contact.email}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: `${baseUrl}/about`, label: 'About Us' },
                { href: `${baseUrl}/academics`, label: 'Academics' },
                { href: `${baseUrl}/admissions`, label: 'Admissions' },
                { href: `${baseUrl}/gallery`, label: 'Gallery' },
                { href: `${baseUrl}/news`, label: 'News' },
                { href: `${baseUrl}/contact`, label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Admin Access</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${baseUrl}/login`}
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                >
                  School Login
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}/dashboard`}
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {school.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}