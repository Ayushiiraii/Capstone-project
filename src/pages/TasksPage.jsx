import { useState, useMemo } from 'react';
import { Search, X, Plus, Swords } from 'lucide-react';
import TaskCard from '../components/TaskCard';
import { CATEGORIES, PRIORITIES, PRIORITY_COLOR } from '../utils/constants';

export default function TasksPage({ tasks, onToggle, onDelete, onAddClick }) {
  const [search,    setSearch]    = useState('');
  const [filterCat, setFilterCat] = useState('All');
  const [filterPri, setFilterPri] = useState('All');

  const filtered = useMemo(() => tasks.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchCat    = filterCat === 'All' || t.cat === filterCat;
    const matchPri    = filterPri === 'All' || t.priority === filterPri;
    return matchSearch && matchCat && matchPri;
  }), [tasks, search, filterCat, filterPri]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
        <Search size={14} style={{ color: '#475569' }} />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search quests..."
          className="flex-1 bg-transparent text-sm outline-none" style={{ color: '#e2e8f0' }} />
        {search && <button onClick={() => setSearch('')}><X size={14} style={{ color: '#475569' }} /></button>}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['All', ...CATEGORIES].map(c => (
          <button key={c} onClick={() => setFilterCat(c)} className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: filterCat===c ? '#7c3aed' : '#0f172a', color: filterCat===c ? 'white' : '#475569', border: '1px solid #1e293b' }}>
            {c}
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['All', ...PRIORITIES].map(p => (
          <button key={p} onClick={() => setFilterPri(p)} className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: filterPri===p ? (PRIORITY_COLOR[p]??'#7c3aed') : '#0f172a', color: filterPri===p ? 'white' : '#475569', border: '1px solid #1e293b' }}>
            {p}
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16" style={{ color: '#334155' }}>
          <Swords size={40} className="mx-auto mb-3" /><p>No quests found</p>
        </div>
      )}
      {filtered.filter(t => !t.done).map(t => <TaskCard key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />)}
      {filtered.some(t => t.done) && (
        <>
          <p className="text-xs font-semibold pt-2" style={{ color: '#334155' }}>COMPLETED</p>
          {filtered.filter(t => t.done).map(t => <TaskCard key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />)}
        </>
      )}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <button onClick={onAddClick} className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: 'white', boxShadow: '0 0 30px #7c3aed66' }}>
          <Plus size={18} /> Add Quest
        </button>
      </div>
    </div>
  );
}
