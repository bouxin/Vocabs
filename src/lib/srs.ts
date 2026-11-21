import type { CardProgress, Grade } from './types'

const DAY = 86_400_000
const MIN_EASE = 1.3
const MAX_EASE = 2.8

/** Minutes, for cards still being learned. */
const LEARNING_STEPS = [1, 10]

export function newProgress(id: string): CardProgress {
  return {
    id,
    ease: 2.5,
    interval: 0,
    streak: 0,
    reps: 0,
    lapses: 0,
    due: 0,
    lastReviewed: 0,
    stage: 'new',
  }
}

/**
 * SM-2 with Anki-style learning steps.
 * `again` sends a card back to the start of the learning steps and shrinks ease;
 * `hard`/`good`/`easy` grow the interval by the ease factor.
 */
export function schedule(p: CardProgress, grade: Grade, now = Date.now()): CardProgress {
  const next: CardProgress = { ...p, reps: p.reps + 1, lastReviewed: now }

  if (grade === 'again') {
    next.lapses = p.lapses + 1
    next.streak = 0
    next.ease = clampEase(p.ease - 0.2)
    next.stage = 'learning'
    next.interval = 0
    next.due = now + LEARNING_STEPS[0] * 60_000
    return next
  }

  next.streak = p.streak + 1

  if (p.stage === 'new' || p.stage === 'learning') {
    // Index into the learning steps by how many successes we have in a row.
    const step = next.streak - 1
    if (grade === 'easy' || step >= LEARNING_STEPS.length) {
      next.stage = 'review'
      next.interval = grade === 'easy' ? 4 : 1
      next.due = now + next.interval * DAY
    } else {
      next.stage = 'learning'
      next.interval = 0
      next.due = now + LEARNING_STEPS[step] * 60_000
    }
    if (grade === 'easy') next.ease = clampEase(p.ease + 0.15)
    return next
  }

  // Mature review.
  const factor = grade === 'hard' ? 1.2 : grade === 'easy' ? next.ease * 1.3 : next.ease
  next.ease = clampEase(p.ease + (grade === 'hard' ? -0.15 : grade === 'easy' ? 0.15 : 0))
  next.interval = Math.max(1, Math.round(Math.max(p.interval, 1) * factor))
  next.interval = Math.min(next.interval, 365)
  next.stage = 'review'
  next.due = now + next.interval * DAY
  return next
}

function clampEase(v: number) {
  return Math.min(MAX_EASE, Math.max(MIN_EASE, Number(v.toFixed(2))))
}

export function isDue(p: CardProgress | undefined, now = Date.now()) {
  if (!p) return true
  return p.due <= now
}

/** A card counts as "remembered" once it has graduated to a real review interval. */
export function isRemembered(p: CardProgress | undefined) {
  return !!p && p.stage === 'review' && p.interval >= 1
}

/** Mature = held for three weeks or more, the usual Anki threshold. */
export function isMature(p: CardProgress | undefined) {
  return !!p && p.interval >= 21
}

export function formatInterval(days: number) {
  if (days <= 0) return '<1d'
  if (days < 30) return `${days}d`
  if (days < 365) return `${Math.round(days / 30)}mo`
  return `${(days / 365).toFixed(1)}y`
}
