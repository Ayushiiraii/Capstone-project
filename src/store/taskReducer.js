import { PRIORITY_XP, SEED_TASKS } from '../utils/constants';

export const initialState = {
  tasks:          SEED_TASKS,
  totalXp:        135,
  streak:         2,
  completedCount: 3,
  epicCompleted:  0,
  nextId:         7,
};

export function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const task = { ...action.payload, id: state.nextId, done: false, createdAt: Date.now() };
      return { ...state, tasks: [task, ...state.tasks], nextId: state.nextId + 1 };
    }
    case 'TOGGLE_TASK': {
      const task    = state.tasks.find(t => t.id === action.id);
      if (!task) return state;
      const completing = !task.done;
      const xpDelta    = completing ? PRIORITY_XP[task.priority] : -PRIORITY_XP[task.priority];
      return {
        ...state,
        tasks:          state.tasks.map(t => t.id === action.id ? { ...t, done: !t.done } : t),
        totalXp:        Math.max(0, state.totalXp + xpDelta),
        completedCount: state.completedCount + (completing ? 1 : -1),
        epicCompleted:  task.priority === 'Epic'
                          ? state.epicCompleted + (completing ? 1 : -1)
                          : state.epicCompleted,
      };
    }
    case 'DELETE_TASK': {
      const task   = state.tasks.find(t => t.id === action.id);
      const xpLost = task?.done ? PRIORITY_XP[task.priority] : 0;
      return {
        ...state,
        tasks:          state.tasks.filter(t => t.id !== action.id),
        totalXp:        Math.max(0, state.totalXp - xpLost),
        completedCount: task?.done ? state.completedCount - 1 : state.completedCount,
      };
    }
    default: return state;
  }
}
