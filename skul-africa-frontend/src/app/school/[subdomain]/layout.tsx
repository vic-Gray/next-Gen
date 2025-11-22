import { notFound } from 'next/navigation';
import { getSchoolBySubdomain } from '@/lib/school-data';

export default async function SchoolLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;

  // We can't access localStorage on the server, so we'll render the layout
  // with default/fallback values and let the client components handle the data fetching
  // and 404 states if the school doesn't exist.

  return (
    <div className="min-h-screen bg-black text-white">
      {/* School-specific layout wrapper with custom CSS variables */}
      {/* Note: We can't set dynamic colors here server-side since we don't have the data yet */}
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ subdomain: string }> }) {
  const { subdomain } = await params;

  // Return generic metadata since we can't fetch school details server-side
  return {
    title: `School Portal - Skul Africa`,
    description: 'School Management System',
  };
}
