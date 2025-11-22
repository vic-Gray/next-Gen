import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Eye, Edit, Trash2 } from 'lucide-react';

// Mock pages data
const mockPages = [
  { id: '1', title: 'About Us', slug: 'about', status: 'Published', lastModified: '2024-01-15' },
  { id: '2', title: 'Academics', slug: 'academics', status: 'Published', lastModified: '2024-01-14' },
  { id: '3', title: 'Admissions', slug: 'admissions', status: 'Draft', lastModified: '2024-01-13' },
  { id: '4', title: 'Contact', slug: 'contact', status: 'Published', lastModified: '2024-01-12' },
  { id: '5', title: 'News & Events', slug: 'news', status: 'Published', lastModified: '2024-01-11' },
];

export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Page Management</h1>
          <p className="text-neutral-400">Create and manage your school's website pages.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Create New Page
        </Button>
      </div>

      {/* Pages List */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Website Pages ({mockPages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPages.map((page) => (
              <div key={page.id} className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-white font-medium">{page.title}</h3>
                    <p className="text-sm text-neutral-400">/{page.slug}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    page.status === 'Published'
                      ? 'bg-green-900/20 text-green-400'
                      : 'bg-yellow-900/20 text-yellow-400'
                  }`}>
                    {page.status}
                  </span>

                  <span className="text-sm text-neutral-400">
                    Modified: {page.lastModified}
                  </span>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Page Templates */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Quick Page Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col border-neutral-700 text-neutral-300 hover:bg-neutral-800">
              <FileText className="h-6 w-6 mb-2" />
              <span>Information Page</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col border-neutral-700 text-neutral-300 hover:bg-neutral-800">
              <FileText className="h-6 w-6 mb-2" />
              <span>Department Page</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col border-neutral-700 text-neutral-300 hover:bg-neutral-800">
              <FileText className="h-6 w-6 mb-2" />
              <span>Event Page</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}