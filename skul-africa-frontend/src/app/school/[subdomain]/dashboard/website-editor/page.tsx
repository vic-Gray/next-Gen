'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save, Eye, RefreshCw } from 'lucide-react';
import { getSchoolBySubdomain, updateSchoolContent } from '@/lib/school-data';

export default function WebsiteEditorPage() {
  const params = useParams();
  const subdomain = params.subdomain as string;

  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'academics' | 'admissions'>('hero');

  useEffect(() => {
    const loadSchool = async () => {
      try {
        const schoolData = await getSchoolBySubdomain(subdomain);
        if (schoolData) {
          setSchool(schoolData);
        }
      } catch (error) {
        console.error('Error loading school:', error);
      } finally {
        setLoading(false);
      }
    };

    if (subdomain) {
      loadSchool();
    }
  }, [subdomain]);

  const handleSave = async (section: string) => {
    if (!school) return;

    setSaving(true);
    try {
      const updatedSchool = await updateSchoolContent(subdomain, section as any, school[section]);
      if (updatedSchool) {
        setSchool(updatedSchool);
        alert('Changes saved successfully!');
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  const updateField = (section: string, field: string, value: string) => {
    setSchool((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!school) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-white mb-2">School Not Found</h2>
        <p className="text-neutral-400">Unable to load school data for editing.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Website Editor</h1>
          <p className="text-neutral-400">Customize your school's website content</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => window.open(`/${subdomain}`, '_blank')}
            className="border-neutral-700 text-neutral-300"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview Site
          </Button>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex space-x-1 bg-neutral-900 p-1 rounded-lg">
        {[
          { key: 'hero', label: 'Hero Section' },
          { key: 'about', label: 'About' },
          { key: 'academics', label: 'Academics' },
          { key: 'admissions', label: 'Admissions' },
        ].map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key as any)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeSection === section.key
                ? 'bg-primary text-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Editor Content */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white capitalize">{activeSection} Section</CardTitle>
          <Button
            onClick={() => handleSave(activeSection)}
            disabled={saving}
            className="bg-primary hover:bg-primary/90"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {activeSection === 'hero' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Hero Title
                </label>
                <Input
                  value={school.hero.title}
                  onChange={(e) => updateField('hero', 'title', e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Hero Subtitle
                </label>
                <Textarea
                  value={school.hero.subtitle}
                  onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                  rows={3}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Call-to-Action Text
                </label>
                <Input
                  value={school.hero.ctaText || ''}
                  onChange={(e) => updateField('hero', 'ctaText', e.target.value)}
                  placeholder="e.g., Apply Now"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Section Title
                </label>
                <Input
                  value={school.about.title}
                  onChange={(e) => updateField('about', 'title', e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  About Content
                </label>
                <Textarea
                  value={school.about.content}
                  onChange={(e) => updateField('about', 'content', e.target.value)}
                  rows={6}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
          )}

          {activeSection === 'academics' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Section Title
                </label>
                <Input
                  value={school.academics.title}
                  onChange={(e) => updateField('academics', 'title', e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Academics Content
                </label>
                <Textarea
                  value={school.academics.content}
                  onChange={(e) => updateField('academics', 'content', e.target.value)}
                  rows={6}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
          )}

          {activeSection === 'admissions' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Section Title
                </label>
                <Input
                  value={school.admissions.title}
                  onChange={(e) => updateField('admissions', 'title', e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Admissions Content
                </label>
                <Textarea
                  value={school.admissions.content}
                  onChange={(e) => updateField('admissions', 'content', e.target.value)}
                  rows={6}
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}