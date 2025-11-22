'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SchoolHero } from '@/components/school/SchoolHero';
import { SchoolNavbar } from '@/components/school/SchoolNavbar';
import { SchoolFooter } from '@/components/school/SchoolFooter';
import { SchoolSectionBlock } from '@/components/school/SchoolSectionBlock';

import { getSchoolBySubdomain } from '@/lib/school-data';

// Client component to handle school data loading
function SchoolHomepageClient() {
  const params = useParams();
  const subdomain = params.subdomain as string;
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSchool = async () => {
      if (!subdomain) {
        setLoading(false);
        return;
      }

      try {
        const schoolData = await getSchoolBySubdomain(subdomain);
        setSchool(schoolData);
      } catch (error) {
        console.error('Error loading school:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSchool();
  }, [subdomain]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">School Not Found</h1>
          <p className="text-neutral-400 mb-6">
            The school "{subdomain}" could not be found or has not been set up yet.
          </p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            Return to homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SchoolNavbar school={school} />

      <SchoolHero school={school} />

      <main>
        <SchoolSectionBlock
          id="about"
          title={school.about.title}
          content={school.about.content}
        />

        <SchoolSectionBlock
          id="academics"
          title={school.academics.title}
          content={school.academics.content}
        />

        <SchoolSectionBlock
          id="admissions"
          title={school.admissions.title}
          content={school.admissions.content}
        />

        {/* Add more sections as needed */}
      </main>

      <SchoolFooter school={school} />
    </div>
  );
}

export default function SchoolHomepage() {
  return <SchoolHomepageClient />;
}