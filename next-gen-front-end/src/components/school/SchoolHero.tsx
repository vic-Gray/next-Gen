import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchoolData } from '@/lib/school-data';

interface SchoolHeroProps {
  school: SchoolData;
}

export function SchoolHero({ school }: SchoolHeroProps) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {school.hero.backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={school.hero.backgroundImage}
            alt={school.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-50" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
          {school.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {school.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/admissions">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_-5px_rgba(229,9,20,0.6)] transition-all duration-300">
              {school.hero.ctaText || 'Apply Now'}
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}