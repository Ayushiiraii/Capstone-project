import { LEVEL_THRESHOLDS } from './constants';

export function getLevel(xp) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function xpForNextLevel(xp) {
  const lvl = getLevel(xp);
  return LEVEL_THRESHOLDS[lvl] ?? LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

export function xpProgress(xp) {
  const lvl  = getLevel(xp);
  const prev = LEVEL_THRESHOLDS[lvl - 1] ?? 0;
  const next = LEVEL_THRESHOLDS[lvl]     ?? prev + 1000;
  return ((xp - prev) / (next - prev)) * 100;
}
