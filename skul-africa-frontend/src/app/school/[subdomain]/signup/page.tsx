import { SchoolSignupForm } from '@/components/school/SchoolSignupForm';

export default function SchoolSignupPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <SchoolSignupForm />
      </div>
    </div>
  );
}