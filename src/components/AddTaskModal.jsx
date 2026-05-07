import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, PRIORITIES, PRIORITY_XP, PRIORITY_COLOR } from '../utils/constants';

export default function AddTaskModal({ onAdd, onClose }) {
  const [title,    setTitle]    = useState('');
  const [cat,      setCat]      = useState('Work');
  const [priority, setPriority] = useState('Medium');
  const [step,     setStep]     = useState(1);

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd({ title: title.trim(), cat, priority });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: '#00000099' }}>
      <div className="w-full max-w-md rounded-3xl p-6 mx-4"
        style={{ background: '#0f172a', border: '1px solid #7c3aed55', boxShadow: '0 0 60px #7c3aed33' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold" style={{ color: '#f1f5f9' }}>{step === 1 ? '⚔️ New Quest' : '🏷️ Classify It'}</h2>
          <div className="flex gap-2">
            {[1,2].map(s => <div key={s} className="w-2 h-2 rounded-full" style={{ background: step>=s ? '#7c3aed' : '#1e293b' }} />)}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#94a3b8' }}>Quest Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="What must be conquered?"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: '#1e293b', color: '#e2e8f0', border: '1px solid #334155' }}
                onKeyDown={e => e.key === 'Enter' && title && setStep(2)} />
            </div>
            <button onClick={() => title && setStep(2)} className="w-full py-3 rounded-xl font-bold text-sm"
              style={{ background: title ? 'linear-gradient(135deg,#7c3aed,#ec4899)' : '#1e293b', color: title ? 'white' : '#475569', cursor: title ? 'pointer' : 'not-allowed' }}>
              Next <ChevronRight className="inline" size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#94a3b8' }}>Category</label>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCat(c)} className="py-2 px-3 rounded-xl text-xs font-medium transition-all"
                    style={{ background: cat===c ? '#7c3aed33' : '#1e293b', color: cat===c ? '#a78bfa' : '#64748b', border: `1px solid ${cat===c ? '#7c3aed' : 'transparent'}` }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#94a3b8' }}>Difficulty / XP Reward</label>
              <div className="grid grid-cols-2 gap-2">
                {PRIORITIES.map(p => (
                  <button key={p} onClick={() => setPriority(p)} className="py-2 px-3 rounded-xl text-xs font-medium transition-all"
                    style={{ background: priority===p ? PRIORITY_COLOR[p]+'22' : '#1e293b', color: priority===p ? PRIORITY_COLOR[p] : '#64748b', border: `1px solid ${priority===p ? PRIORITY_COLOR[p] : 'transparent'}` }}>
                    {p} (+{PRIORITY_XP[p]}XP)
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl text-sm" style={{ background: '#1e293b', color: '#94a3b8' }}>Back</button>
              <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl font-bold text-sm" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: 'white' }}>
                Add Quest ⚔️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
