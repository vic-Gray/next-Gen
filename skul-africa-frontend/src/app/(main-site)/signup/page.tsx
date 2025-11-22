import { SchoolSignupForm } from '@/components/school/SchoolSignupForm';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

export default function MainSignupPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
                Start Your <span className="text-primary">School</span>
              </h1>
              <p className="text-xl text-neutral-400">
                Create your school's online presence in minutes. Choose your subdomain and get started with a professional website.
              </p>
            </div>

            <SchoolSignupForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}