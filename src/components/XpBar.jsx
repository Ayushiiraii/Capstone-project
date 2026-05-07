import { xpProgress, xpForNextLevel, getLevel } from '../utils/helpers';

export default function XpBar({ xp }) {
  const pct = xpProgress(xp);
  const lvl = getLevel(xp);
  const next = xpForNextLevel(xp);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1" style={{ color: '#94a3b8' }}>
        <span>LVL {lvl}</span><span>{xp} / {next} XP</span>
      </div>
      <div className="w-full rounded-full h-3 overflow-hidden" style={{ background: '#1e293b' }}>
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#7c3aed,#ec4899,#f59e0b)', boxShadow: '0 0 12px #7c3aed88' }} />
      </div>
    </div>
  );
}
