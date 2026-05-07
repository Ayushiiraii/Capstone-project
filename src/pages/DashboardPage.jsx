import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { TrendingUp, Target } from 'lucide-react';
import { CATEGORIES, PRIORITIES, PRIORITY_COLOR, PRIORITY_XP } from '../utils/constants';

export default function DashboardPage({ tasks, totalXp }) {
  const catData = useMemo(() => CATEGORIES.map(c => ({
    name: c.slice(0,3),
    xp:   tasks.filter(t => t.done && t.cat===c).reduce((a,t) => a+PRIORITY_XP[t.priority], 0),
  })), [tasks]);

  const lineData = [
    { day:'Mon', xp:0 }, { day:'Tue', xp:25 }, { day:'Wed', xp:60 },
    { day:'Thu', xp:85 }, { day:'Fri', xp:110 }, { day:'Sat', xp:135 }, { day:'Today', xp: totalXp }
  ];

  const tip = { background:'#1e293b', border:'none', borderRadius:12, color:'#e2e8f0', fontSize:12 };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl p-4" style={{ background:'#0f172a', border:'1px solid #1e293b' }}>
        <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color:'#94a3b8' }}>
          <TrendingUp size={14} style={{ color:'#7c3aed' }} /> XP This Week
        </p>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={lineData}>
            <XAxis dataKey="day" tick={{ fontSize:10, fill:'#475569' }} axisLine={false} tickLine={false} />
            <YAxis hide /><Tooltip contentStyle={tip} />
            <Line type="monotone" dataKey="xp" stroke="#7c3aed" strokeWidth={2.5} dot={{ fill:'#7c3aed', r:4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="rounded-2xl p-4" style={{ background:'#0f172a', border:'1px solid #1e293b' }}>
        <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color:'#94a3b8' }}>
          <Target size={14} style={{ color:'#ec4899' }} /> XP by Category
        </p>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={catData} barSize={28}>
            <XAxis dataKey="name" tick={{ fontSize:10, fill:'#475569' }} axisLine={false} tickLine={false} />
            <YAxis hide /><Tooltip contentStyle={tip} />
            <Bar dataKey="xp" radius={[8,8,0,0]}>
              {catData.map((_,i) => <Cell key={i} fill={['#7c3aed','#ec4899','#f59e0b','#22d3ee','#22c55e'][i]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {PRIORITIES.map(p => {
          const total = tasks.filter(t => t.priority===p).length;
          const done  = tasks.filter(t => t.priority===p && t.done).length;
          return (
            <div key={p} className="rounded-2xl p-4" style={{ background:'#0f172a', border:`1px solid ${PRIORITY_COLOR[p]}33` }}>
              <p className="text-xs font-bold mb-1" style={{ color:PRIORITY_COLOR[p] }}>{p}</p>
              <p className="text-2xl font-black" style={{ color:'#f1f5f9' }}>{done}<span className="text-sm font-normal" style={{ color:'#475569' }}>/{total}</span></p>
              <div className="w-full h-1.5 rounded-full mt-2" style={{ background:'#1e293b' }}>
                <div className="h-full rounded-full" style={{ width: total ? `${(done/total)*100}%` : '0%', background: PRIORITY_COLOR[p] }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
