import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { PRIORITY_COLOR, PRIORITY_XP } from '../utils/constants';

export default function TaskCard({ task, onToggle, onDelete }) {
  const pc = PRIORITY_COLOR[task.priority];
  return (
    <div className="group rounded-2xl p-4 flex items-center gap-3 transition-all duration-200"
      style={{ background: task.done ? '#0a0f1a' : '#0f172a', border: `1px solid ${task.done ? '#1e293b' : pc+'44'}`, opacity: task.done ? 0.65 : 1 }}>
      <button onClick={() => onToggle(task.id)} className="flex-shrink-0">
        {task.done ? <CheckCircle2 size={22} style={{ color: '#22c55e' }} /> : <Circle size={22} style={{ color: pc }} />}
      </button>
      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${task.done ? 'line-through' : ''}`} style={{ color: task.done ? '#475569' : '#e2e8f0' }}>
          {task.title}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#1e293b', color: '#94a3b8' }}>{task.cat}</span>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: pc+'22', color: pc }}>
            {task.priority} +{PRIORITY_XP[task.priority]}XP
          </span>
        </div>
      </div>
      <button onClick={() => onDelete(task.id)} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#475569' }}>
        <Trash2 size={16} />
      </button>
    </div>
  );
}
