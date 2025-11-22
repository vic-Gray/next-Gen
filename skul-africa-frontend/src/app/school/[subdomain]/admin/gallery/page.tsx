import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Image, Upload, Grid } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Gallery Management</h1>
          <p className="text-neutral-400">Manage photos and images for your school's website.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Upload className="h-4 w-4 mr-2" />
          Upload Images
        </Button>
      </div>

      {/* Gallery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">245</p>
                <p className="text-sm text-neutral-400">Total Images</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Grid className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-neutral-400">Albums</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Upload className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">1.2GB</p>
                <p className="text-sm text-neutral-400">Storage Used</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gallery Grid */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">Recent Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Placeholder for images */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center">
                <Image className="h-8 w-8 text-neutral-600" />
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" className="border-neutral-700 text-neutral-300">
              <Plus className="h-4 w-4 mr-2" />
              Load More Images
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}