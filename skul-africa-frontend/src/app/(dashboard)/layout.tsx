import { DashboardSidebar } from "@/components/layout/sidebar";
import { DashboardHeader } from "@/components/layout/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardSidebar />
            <div className="lg:pl-64">
                <DashboardHeader />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
