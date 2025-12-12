// app/page.tsx
import { FaStar, FaUsers, FaAward, FaCalendarAlt } from 'react-icons/fa';

export default function DashboardPage() {
  const rings = [
    { label: 'Skills', value: 72 },
    { label: 'Mentorship', value: 48 },
    { label: 'Learning Time', value: 35 },
  ];

  const kpis = [
    { icon: FaStar, label: 'Skills Completed', value: 6, total: 10 },
    { icon: FaUsers, label: 'Mentorship Hours', value: 4, total: 10 },
    { icon: FaAward, label: 'Certifications', value: 1, total: 4 },
  ];

  const activities = [
    { icon: FaCalendarAlt, title: 'Finish Async APIs mini-project', time: '45 mins', action: 'Start' },
    { icon: FaUsers, title: 'Mentorship review (30 min)', time: '4:00 PM', action: 'Remind me' },
    { icon: FaAward, title: 'Read chapter on personal growth', time: '20 mins', action: 'Mark done' },
  ];

  return (
    <div className="p-4 bg-[#111111] min-h-screen space-y-6 text-white">

      {/* Hero Card */}
      <div className="bg-[#3B1F0B] rounded-xl shadow-2xl p-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1 space-y-3 min-w-[250px]">
          <h2 className="text-2xl font-bold text-yellow-400">Good morning, Victory! 🌞</h2>
          <p className="text-yellow-300 text-lg">Today is for building — keep going.</p>
          <p className="text-sm text-gray-300 max-w-lg">
            Today’s focus: finish the Async APIs mini-project and attend a 30-minute mentorship review.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="bg-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">Daily Goal</span>
            <span className="bg-yellow-200 text-[#3B1F0B] px-3 py-1 rounded-full text-xs font-semibold">Streak: 4 🔥</span>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg text-black font-medium">Continue Learning</button>
            <button className="border border-yellow-600 text-yellow-400 hover:bg-yellow-800 hover:text-white px-4 py-2 rounded-lg font-medium">Start Today Task</button>
          </div>
        </div>

        {/* Ring Progress */}
        <div className="w-40 h-40 flex items-center justify-center">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" stroke="#FFD70033" strokeWidth="4" fill="none"/>
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#FFD700"
                strokeWidth="4"
                strokeDasharray="100,100"
                strokeDashoffset={38}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-yellow-400 font-bold text-lg">62%</div>
          </div>
        </div>
      </div>

      {/* Rings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rings.map((r) => (
          <div key={r.label} className="bg-[#3B1F0B] rounded-lg shadow-lg p-4 text-center">
            <div className="relative w-28 h-28 mx-auto">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" stroke="#FFD70033" strokeWidth="4" fill="none"/>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="#FFD700"
                  strokeWidth="4"
                  strokeDasharray="100,100"
                  strokeDashoffset={100 - r.value}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-yellow-400">{r.value}%</div>
            </div>
            <p className="mt-2 font-medium text-yellow-200">{r.label}</p>
            <p className="text-xs text-gray-400 mt-1">Today</p>
          </div>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          const pct = Math.round((kpi.value / kpi.total) * 100);
          return (
            <div key={kpi.label} className="bg-[#3B1F0B] rounded-lg shadow-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon className="text-yellow-400" size={24} />
                  <div>
                    <p className="font-semibold">{kpi.value}/{kpi.total}</p>
                    <p className="text-xs text-gray-400">{kpi.label}</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-semibold border border-yellow-400 text-yellow-400 rounded">{pct}%</span>
              </div>
              <div className="bg-yellow-900 h-2 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Today Activities */}
      <div className="bg-[#3B1F0B] rounded-lg shadow-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-yellow-400">Today’s building activity</p>
          <p className="text-xs text-gray-400">3 items · focus on completion</p>
        </div>

        <div className="space-y-3">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon className="text-yellow-400" size={18} />
                  <div>
                    <p className="font-semibold text-yellow-200">{act.title}</p>
                    <p className="text-xs text-gray-400">{act.time}</p>
                  </div>
                </div>
                <button className={`px-3 py-1 rounded-md text-xs font-semibold ${act.action === 'Start' || act.action === 'Mark done' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}`}>
                  {act.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
