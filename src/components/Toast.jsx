export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-semibold"
      style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', color: 'white', boxShadow: '0 0 30px #7c3aed77' }}>
      {toast.xp && <span>+{toast.xp} XP ⚡</span>}
      <span>{toast.msg}</span>
    </div>
  );
}
