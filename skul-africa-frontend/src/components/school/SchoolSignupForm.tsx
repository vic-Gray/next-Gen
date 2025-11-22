'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { createSchool, getAllSchoolSubdomains } from '@/lib/school-data';

export function SchoolSignupForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    subdomain: '',
    schoolEmail: '',
    phone: '',
    address: '',
    ownerEmail: '',
    ownerPassword: '',
    confirmPassword: '',
  });
  const [logo, setLogo] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subdomainError, setSubdomainError] = useState('');
  const [isValidatingSubdomain, setIsValidatingSubdomain] = useState(false);

  // Validate subdomain format and uniqueness
  const validateSubdomain = async (subdomain: string): Promise<boolean> => {
    // Check format: letters, numbers, hyphens only, no spaces, 3-20 characters
    const subdomainRegex = /^[a-z0-9][a-z0-9-]{1,18}[a-z0-9]$/;
    if (!subdomainRegex.test(subdomain)) {
      setSubdomainError('Subdomain must be 3-20 characters, contain only letters, numbers, and hyphens, and cannot start or end with a hyphen.');
      return false;
    }

    // Check reserved words
    const reservedWords = ['www', 'skulafrica', 'app', 'api', 'admin', 'localhost', 'mail', 'ftp', 'smtp'];
    if (reservedWords.includes(subdomain.toLowerCase())) {
      setSubdomainError('This subdomain is reserved and cannot be used.');
      return false;
    }

    // Check uniqueness
    try {
      const subdomains = await getAllSchoolSubdomains();
      const exists = subdomains.some(existingSubdomain => existingSubdomain.toLowerCase() === subdomain.toLowerCase());
      if (exists) {
        setSubdomainError('This subdomain is already taken. Please choose another one.');
        return false;
      }
    } catch (error) {
      setSubdomainError('Unable to validate subdomain. Please try again.');
      return false;
    }

    setSubdomainError('');
    return true;
  };

  // Auto-generate subdomain from school name
  const generateSubdomain = (schoolName: string): string => {
    return schoolName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      .substring(0, 20); // Limit length
  };

  // Handle school name change to auto-generate subdomain
  const handleSchoolNameChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      schoolName: value,
      subdomain: generateSubdomain(value)
    }));
  };

  // Handle subdomain change with validation
  const handleSubdomainChange = async (value: string) => {
    const cleanValue = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setFormData(prev => ({ ...prev, subdomain: cleanValue }));

    if (cleanValue.length >= 3) {
      setIsValidatingSubdomain(true);
      await validateSubdomain(cleanValue);
      setIsValidatingSubdomain(false);
    } else if (cleanValue.length > 0) {
      setSubdomainError('Subdomain must be at least 3 characters long.');
    } else {
      setSubdomainError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate subdomain before submission
    const isSubdomainValid = await validateSubdomain(formData.subdomain);
    if (!isSubdomainValid) {
      return;
    }

    setIsLoading(true);

    try {
      const schoolData = {
        subdomain: formData.subdomain,
        name: formData.schoolName,
        description: `${formData.schoolName} - Excellence in Education`,
        contact: {
          address: formData.address,
          phone: formData.phone,
          email: formData.schoolEmail,
        },
        colors: {
          primary: '#E50914',
          secondary: '#0A0A0A',
        },
      };

      await createSchool(schoolData);

      setIsLoading(false);

      // Redirect to success page with subdomain and school name
      window.location.href = `/signup/success?subdomain=${formData.subdomain}&name=${encodeURIComponent(formData.schoolName)}`;
    } catch (error) {
      setIsLoading(false);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Card className="bg-black border-neutral-800">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white mb-2">
          Register Your School
        </CardTitle>
        <p className="text-neutral-400">
          Create your school's subdomain and start building your online presence
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-neutral-300 mb-2">
                School Name *
              </label>
              <Input
                id="schoolName"
                name="schoolName"
                type="text"
                value={formData.schoolName}
                onChange={(e) => handleSchoolNameChange(e.target.value)}
                placeholder="Enter school name"
                required
                className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="subdomain" className="block text-sm font-medium text-neutral-300 mb-2">
                Subdomain *
              </label>
              <div className="relative">
                <Input
                  id="subdomain"
                  name="subdomain"
                  type="text"
                  value={formData.subdomain}
                  onChange={(e) => handleSubdomainChange(e.target.value)}
                  placeholder="your-school-name"
                  required
                  className={`bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary pr-20 ${
                    subdomainError ? 'border-red-500' : ''
                  }`}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-neutral-400">
                  .skulafrica.com
                </span>
              </div>
              {subdomainError && (
                <p className="text-sm text-red-400 mt-1">{subdomainError}</p>
              )}
              {isValidatingSubdomain && (
                <p className="text-sm text-yellow-400 mt-1">Validating subdomain...</p>
              )}
              {!subdomainError && formData.subdomain && !isValidatingSubdomain && (
                <p className="text-sm text-green-400 mt-1">✓ Subdomain available</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="schoolEmail" className="block text-sm font-medium text-neutral-300 mb-2">
              School Email *
            </label>
            <Input
              id="schoolEmail"
              name="schoolEmail"
              type="email"
              value={formData.schoolEmail}
              onChange={handleInputChange}
              placeholder="info@school.edu"
              required
              className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234 123 456 7890"
                required
                className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-neutral-300 mb-2">
                Address *
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="School address"
                required
                className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="logo" className="block text-sm font-medium text-neutral-300 mb-2">
              School Logo
            </label>
            <Input
              id="logo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-neutral-900 border-neutral-700 text-white file:bg-primary file:text-white file:border-0 file:rounded file:px-3 file:py-1 file:mr-3 file:hover:bg-primary/90"
            />
          </div>

          <div className="border-t border-neutral-700 pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Owner Account Details</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="ownerEmail" className="block text-sm font-medium text-neutral-300 mb-2">
                  Owner Email *
                </label>
                <Input
                  id="ownerEmail"
                  name="ownerEmail"
                  type="email"
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  placeholder="owner@school.edu"
                  required
                  className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ownerPassword" className="block text-sm font-medium text-neutral-300 mb-2">
                    Password *
                  </label>
                  <Input
                    id="ownerPassword"
                    name="ownerPassword"
                    type="password"
                    value={formData.ownerPassword}
                    onChange={handleInputChange}
                    placeholder="Create password"
                    required
                    className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-2">
                    Confirm Password *
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    required
                    className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Creating School...' : 'Create School & Get Started'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-neutral-400 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:text-primary/80 transition-colors">
              Login here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}