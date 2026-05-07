export const CATEGORIES = ["Work", "Health", "Learning", "Personal", "Creative"];
export const PRIORITIES = ["Low", "Medium", "High", "Epic"];
export const PRIORITY_XP   = { Low: 10, Medium: 25, High: 50, Epic: 100 };
export const PRIORITY_COLOR = { Low: "#22d3ee", Medium: "#a78bfa", High: "#f59e0b", Epic: "#f43f5e" };
export const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1500, 2400, 3800, 6000, 9500, 15000];

export const BADGES = [
  { id: "first_blood",  icon: "⚔️", name: "First Strike", desc: "Complete your first task",  req: (s) => s.completedCount >= 1  },
  { id: "on_fire",      icon: "🔥", name: "On Fire",       desc: "3-day streak",               req: (s) => s.streak >= 3          },
  { id: "centurion",    icon: "🛡️", name: "Centurion",     desc: "Earn 100 XP",                req: (s) => s.totalXp >= 100       },
  { id: "epic_slayer",  icon: "🏆", name: "Epic Slayer",   desc: "Complete an Epic task",      req: (s) => s.epicCompleted >= 1   },
  { id: "grinder",      icon: "⚙️", name: "The Grinder",   desc: "Complete 10 tasks",          req: (s) => s.completedCount >= 10 },
  { id: "legend",       icon: "👑", name: "Legend",        desc: "Reach Level 5",              req: (s) => s.level >= 5           },
];

export const SEED_TASKS = [
  { id: 1, title: "Design system architecture",    cat: "Work",     priority: "Epic",   done: false, createdAt: Date.now() - 86400000*2 },
  { id: 2, title: "Morning workout session",       cat: "Health",   priority: "High",   done: true,  createdAt: Date.now() - 86400000   },
  { id: 3, title: "Read 30 pages of Clean Code",  cat: "Learning", priority: "Medium", done: true,  createdAt: Date.now() - 86400000   },
  { id: 4, title: "Grocery shopping",             cat: "Personal", priority: "Low",    done: false, createdAt: Date.now()              },
  { id: 5, title: "Build a UI component library", cat: "Creative", priority: "High",   done: false, createdAt: Date.now()              },
  { id: 6, title: "Daily standup prep",           cat: "Work",     priority: "Medium", done: true,  createdAt: Date.now()              },
];
