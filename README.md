# ⚔️ Gamified Task Manager — Capstone Project

A React-based productivity app with RPG-style gamification: XP, levels, streaks, and badges.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🛠 Tech Stack
| Tool | Purpose |
|---|---|
| React 18 + Vite | Framework & bundler |
| useReducer | Centralised state (Redux pattern) |
| React Router DOM v6 | Client-side routing |
| Recharts | Data visualisation |
| Lucide React | Icon library |
| Tailwind CSS | Utility-first styling |
| Axios | HTTP client (API-ready) |

## ✅ SOP Checklist
- [x] React + ES6+ (hooks, arrow fns, destructuring)
- [x] State Management via useReducer
- [x] CRUD: Add / Toggle / Delete tasks
- [x] Search + Filter (category & priority)
- [x] Dashboard with Charts (line + bar)
- [x] Performance: useMemo, useCallback
- [x] Multi-step form with validation
- [x] Error boundaries ready
- [x] Deployable on Vercel / Netlify

## 📁 Folder Structure
```
gamified-task-manager/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Global styles
    ├── utils/
    │   ├── constants.js  # CATEGORIES, PRIORITIES, BADGES, SEED_TASKS
    │   └── helpers.js    # getLevel, xpProgress, xpForNextLevel
    ├── store/
    │   └── taskReducer.js # Centralised reducer + initialState
    ├── hooks/
    │   └── useToast.js   # Reusable toast hook
    ├── components/
    │   ├── XpBar.jsx      # Animated XP progress bar
    │   ├── StatCard.jsx   # Stat display card
    │   ├── TaskCard.jsx   # Individual task row
    │   ├── AddTaskModal.jsx # 2-step add task modal
    │   ├── Toast.jsx      # XP notification toast
    │   └── Navbar.jsx     # Bottom tab navigation
    └── pages/
        ├── TasksPage.jsx     # Quest list with search & filters
        ├── DashboardPage.jsx # Charts & priority breakdown
        └── BadgesPage.jsx    # Achievement badges gallery
```
