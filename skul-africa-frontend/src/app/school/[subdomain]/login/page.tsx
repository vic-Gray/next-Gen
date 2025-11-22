import { SchoolLoginForm } from '@/components/school/SchoolLoginForm';

export default function SchoolLoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SchoolLoginForm />
      </div>
    </div>
  );
}