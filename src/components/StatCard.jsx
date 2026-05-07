export default function StatCard({ icon, label, value, glow }) {
  return (
    <div className="rounded-2xl p-4 flex items-center gap-3"
      style={{ background: '#0f172a', border: '1px solid #1e293b', boxShadow: glow ? `0 0 20px ${glow}33` : 'none' }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#1e293b' }}>{icon}</div>
      <div>
        <p className="text-xs" style={{ color: '#64748b' }}>{label}</p>
        <p className="text-xl font-bold" style={{ color: '#f1f5f9' }}>{value}</p>
      </div>
    </div>
  );
}
