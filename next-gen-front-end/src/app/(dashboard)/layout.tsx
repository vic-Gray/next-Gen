// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col text-white">

      {/* Top mobile navbar */}
      <nav className="w-full bg-[#3B1F0B] p-4 flex justify-center shadow-md z-10">
        <span className="text-yellow-400 font-bold text-lg">My Learning</span>
      </nav>

      {/* Main content */}
      <main className="flex-1 w-full p-4">
        <div className="w-full">{children}</div>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#3B1F0B] p-2 flex justify-around text-white shadow-inner z-10">
        <button className="flex flex-col items-center text-xs">Home</button>
        <button className="flex flex-col items-center text-xs">Stats</button>
        <button className="flex flex-col items-center text-xs">Tasks</button>
        <button className="flex flex-col items-center text-xs">Profile</button>
      </nav>
    </div>
  );
}
