import { CheckCircle2 } from 'lucide-react';
import { BADGES } from '../utils/constants';

export default function BadgesPage({ gameState, level }) {
  const earned = BADGES.filter(b => b.req({ ...gameState, level }));
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold" style={{ color:'#334155' }}>{earned.length} of {BADGES.length} unlocked</p>
      {BADGES.map(badge => {
        const unlocked = badge.req({ ...gameState, level });
        return (
          <div key={badge.id} className="rounded-2xl p-4 flex items-center gap-4"
            style={{ background:'#0f172a', border:`1px solid ${unlocked ? '#7c3aed44' : '#1e293b'}`, opacity: unlocked ? 1 : 0.5 }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: unlocked ? '#7c3aed22' : '#1e293b', boxShadow: unlocked ? '0 0 20px #7c3aed44' : 'none' }}>
              {unlocked ? badge.icon : '🔒'}
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm" style={{ color: unlocked ? '#e2e8f0' : '#475569' }}>{badge.name}</p>
              <p className="text-xs mt-0.5" style={{ color:'#475569' }}>{badge.desc}</p>
            </div>
            {unlocked && <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background:'#22c55e' }}>
              <CheckCircle2 size={14} color="white" />
            </div>}
          </div>
        );
      })}
    </div>
  );
}
