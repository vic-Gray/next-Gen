import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchoolData } from '@/lib/school-data';

interface SchoolNavbarProps {
  school: SchoolData;
}

export function SchoolNavbar({ school }: SchoolNavbarProps) {
  const baseUrl = `/school/${school.subdomain}`;

  const navItems = [
    { href: baseUrl, label: 'Home' },
    { href: `${baseUrl}/about`, label: 'About' },
    { href: `${baseUrl}/academics`, label: 'Academics' },
    { href: `${baseUrl}/admissions`, label: 'Admissions' },
    { href: `${baseUrl}/gallery`, label: 'Gallery' },
    { href: `${baseUrl}/news`, label: 'News' },
    { href: `${baseUrl}/contact`, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={baseUrl} className="flex items-center space-x-2">
            {school.logo && (
              <img src={school.logo} alt={school.name} className="h-8 w-8" />
            )}
            <span className="text-xl font-bold text-white">{school.name}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-300 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href={`${baseUrl}/login`}>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href={`${baseUrl}/dashboard`}>
              <Button size="sm">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}