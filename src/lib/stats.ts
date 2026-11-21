import type { AppState, DeckId } from './types'
import { isMature, isRemembered } from './srs'
import { activeCards } from './session'
import { todayKey } from './storage'

export interface DeckStats {
  deck: DeckId
  total: number
  seen: number
  remembered: number
  mature: number
}

export interface Totals {
  /** Cards that have graduated out of learning — the headline "remembered" number. */
  remembered: number
  mature: number
  learning: number
  unseen: number
  total: number
  reviewsAllTime: number
  reviewsToday: number
  streakDays: number
  accuracy: number
  decks: DeckStats[]
}

export function computeTotals(state: AppState): Totals {
  const pool = activeCards(state)
  let remembered = 0
  let mature = 0
  let learning = 0

  for (const card of pool) {
    const p = state.progress[card.id]
    if (!p || p.stage === 'new') continue
    if (isRemembered(p)) {
      remembered += 1
      if (isMature(p)) mature += 1
    } else {
      learning += 1
    }
  }

  const entries = Object.values(state.progress)
  const reviewsAllTime = entries.reduce((n, p) => n + p.reps, 0)
  const lapses = entries.reduce((n, p) => n + p.lapses, 0)
  const today = state.log.find((d) => d.date === todayKey())

  const decks: DeckStats[] = (['ACL', 'AFL'] as DeckId[]).map((deck) => {
    const cards = pool.filter((c) => c.deck === deck)
    let seen = 0
    let rem = 0
    let mat = 0
    for (const c of cards) {
      const p = state.progress[c.id]
      if (!p || p.stage === 'new') continue
      seen += 1
      if (isRemembered(p)) rem += 1
      if (isMature(p)) mat += 1
    }
    return { deck, total: cards.length, seen, remembered: rem, mature: mat }
  })

  return {
    remembered,
    mature,
    learning,
    unseen: pool.length - remembered - learning,
    total: pool.length,
    reviewsAllTime,
    reviewsToday: today?.reviews ?? 0,
    streakDays: computeStreak(state),
    accuracy: reviewsAllTime ? Math.round(((reviewsAllTime - lapses) / reviewsAllTime) * 100) : 0,
    decks,
  }
}

/** Consecutive days up to today (or yesterday, if today is not started yet). */
export function computeStreak(state: AppState): number {
  const studied = new Set(state.log.filter((d) => d.reviews > 0).map((d) => d.date))
  if (!studied.size) return 0
  const cursor = new Date()
  if (!studied.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
  let streak = 0
  while (studied.has(todayKey(cursor))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

/** Last `days` days of review counts, oldest first — for the activity bars. */
export function recentActivity(state: AppState, days = 14) {
  const byDate = new Map(state.log.map((d) => [d.date, d]))
  const out: { date: string; reviews: number; learned: number }[] = []
  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = todayKey(d)
    const entry = byDate.get(key)
    out.push({ date: key, reviews: entry?.reviews ?? 0, learned: entry?.learned ?? 0 })
  }
  return out
}
