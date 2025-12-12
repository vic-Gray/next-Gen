'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface SchoolLoginFormProps {
  schoolName?: string;
}

export function SchoolLoginForm({ schoolName = 'School' }: SchoolLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to admin dashboard
      window.location.href = '/admin';
    }, 1000);
  };

  return (
    <Card className="bg-black border-neutral-800">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white mb-2">
          Login to {schoolName} Admin Portal
        </CardTitle>
        <p className="text-neutral-400">
          Access your school's management dashboard
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@school.edu"
              required
              className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login to Admin Portal'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-neutral-400 text-sm">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors">
              Sign up here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}