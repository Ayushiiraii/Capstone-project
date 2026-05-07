import { useState, useCallback, useMemo, useReducer } from 'react';
import { Zap, Flame } from 'lucide-react';
import { taskReducer, initialState } from './store/taskReducer';
import { getLevel } from './utils/helpers';
import { useToast } from './hooks/useToast';
import { PRIORITY_XP, BADGES } from './utils/constants';
import XpBar         from './components/XpBar';
import StatCard      from './components/StatCard';
import Navbar        from './components/Navbar';
import Toast         from './components/Toast';
import AddTaskModal  from './components/AddTaskModal';
import TasksPage     from './pages/TasksPage';
import DashboardPage from './pages/DashboardPage';
import BadgesPage    from './pages/BadgesPage';

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [view,    setView]    = useState('tasks');
  const [showAdd, setShowAdd] = useState(false);
  const { toast, showToast }  = useToast();

  const level        = getLevel(state.totalXp);
  const earnedBadges = useMemo(() => BADGES.filter(b => b.req({ ...state, level })), [state, level]);

  const handleToggle = useCallback((id) => {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    dispatch({ type: 'TOGGLE_TASK', id });
    if (!task.done) showToast(`"${task.title}" completed!`, PRIORITY_XP[task.priority]);
  }, [state.tasks, showToast]);

  const handleDelete = useCallback((id) => dispatch({ type: 'DELETE_TASK', id }), []);
  const handleAdd    = useCallback((payload) => {
    dispatch({ type: 'ADD_TASK', payload });
    showToast('New quest added!');
  }, [showToast]);

  return (
    <div className="min-h-screen" style={{ background: '#030712', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Toast toast={toast} />
      {showAdd && <AddTaskModal onAdd={handleAdd} onClose={() => setShowAdd(false)} />}

      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Player Card Header */}
        <div className="px-5 pt-6 pb-4">
          <div className="rounded-3xl p-5 mb-4"
            style={{ background:'linear-gradient(135deg,#0f172a,#1e1040)', border:'1px solid #7c3aed44', boxShadow:'0 0 40px #7c3aed22' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black relative"
                style={{ background:'linear-gradient(135deg,#7c3aed,#ec4899)', boxShadow:'0 0 20px #7c3aed66' }}>
                {level}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background:'#f59e0b' }}>
                  <Zap size={10} color="white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-black text-lg" style={{ color:'#f1f5f9' }}>Quest Master</p>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs" style={{ background:'#f59e0b22', color:'#f59e0b' }}>
                    <Flame size={10} /> {state.streak}d
                  </div>
                </div>
                <p className="text-xs" style={{ color:'#7c3aed' }}>Level {level} Explorer</p>
              </div>
              <div className="text-right">
                <p className="text-xs" style={{ color:'#64748b' }}>Total XP</p>
                <p className="font-black" style={{ color:'#a78bfa' }}>{state.totalXp}</p>
              </div>
            </div>
            <XpBar xp={state.totalXp} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <StatCard icon="✅" label="Done"   value={state.completedCount} />
            <StatCard icon="🔥" label="Streak" value={`${state.streak}d`}  glow="#f59e0b" />
            <StatCard icon="🏅" label="Badges" value={`${earnedBadges.length}/${BADGES.length}`} glow="#7c3aed" />
          </div>
        </div>

        <Navbar view={view} setView={setView} />

        <div className="flex-1 px-5 pb-28">
          {view === 'tasks'     && <TasksPage tasks={state.tasks} onToggle={handleToggle} onDelete={handleDelete} onAddClick={() => setShowAdd(true)} />}
          {view === 'dashboard' && <DashboardPage tasks={state.tasks} totalXp={state.totalXp} />}
          {view === 'badges'    && <BadgesPage gameState={state} level={level} />}
        </div>
      </div>
    </div>
  );
}
