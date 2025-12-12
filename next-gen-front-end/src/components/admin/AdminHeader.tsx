import { Button } from '@/components/ui/button';
import { LogOut, Bell, User } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="bg-black border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-white">School Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <Bell size={20} />
        </Button>

        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <User size={20} />
        </Button>

        <Button variant="ghost" className="text-neutral-400 hover:text-white">
          <LogOut size={16} className="mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
}