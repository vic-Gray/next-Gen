'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminPage() {
    const params = useParams();
    const subdomain = params.subdomain as string;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Admin Administration</h1>
                <p className="text-neutral-400">Manage your school's administrative settings and users.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href={`/school/${subdomain}/admin/students`}>
                    <Card className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-white">
                                Students
                            </CardTitle>
                            <Users className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">Manage</div>
                            <p className="text-xs text-neutral-400 mt-1">
                                View and manage student records
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
