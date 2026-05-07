import { LayoutDashboard, ListTodo, Medal } from 'lucide-react';

const navItems = [
  { id: 'tasks',     icon: <ListTodo size={18} />,       label: 'Quests'    },
  { id: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Stats'     },
  { id: 'badges',    icon: <Medal size={18} />,           label: 'Badges'    },
];

export default function Navbar({ view, setView }) {
  return (
    <div className="px-5 mb-4">
      <div className="flex gap-1 p-1 rounded-2xl" style={{ background: '#0f172a' }}>
        {navItems.map(n => (
          <button key={n.id} onClick={() => setView(n.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{ background: view===n.id ? 'linear-gradient(135deg,#7c3aed,#ec4899)' : 'transparent', color: view===n.id ? 'white' : '#475569' }}>
            {n.icon} {n.label}
          </button>
        ))}
      </div>
    </div>
  );
}
