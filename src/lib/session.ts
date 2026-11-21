import { ALL_CARDS } from '../data'
import type { AppState, Card } from './types'
import { isDue } from './srs'

export interface Queue {
  /** Cards to study now, in order. */
  cards: Card[]
  dueCount: number
  newCount: number
}

export function activeCards(state: AppState): Card[] {
  const { decks, subs } = state.settings
  return ALL_CARDS.filter((c) => decks[c.deck] && (!c.sub || subs[c.sub]))
}

/**
 * Build today's queue: everything that has come due, plus a capped number of
 * brand-new cards, interleaved so a session never opens with twenty unknowns.
 */
export function buildQueue(state: AppState, now = Date.now()): Queue {
  const pool = activeCards(state)
  const due: Card[] = []
  const fresh: Card[] = []

  for (const card of pool) {
    const p = state.progress[card.id]
    if (!p || p.stage === 'new') fresh.push(card)
    else if (isDue(p, now)) due.push(card)
  }

  due.sort((a, b) => (state.progress[a.id]?.due ?? 0) - (state.progress[b.id]?.due ?? 0))

  const newBudget = Math.max(0, state.settings.newPerDay - state.introducedToday)
  const picked = fresh.slice(0, newBudget)
  const reviews = due.slice(0, state.settings.maxReviews)

  return { cards: interleave(reviews, picked), dueCount: reviews.length, newCount: picked.length }
}

/** Spread the new cards evenly through the review cards. */
function interleave(reviews: Card[], fresh: Card[]): Card[] {
  if (!fresh.length) return reviews
  if (!reviews.length) return fresh
  const out: Card[] = []
  const gap = Math.max(1, Math.floor(reviews.length / fresh.length))
  let f = 0
  for (let i = 0; i < reviews.length; i += 1) {
    out.push(reviews[i])
    if (i % gap === gap - 1 && f < fresh.length) out.push(fresh[f++])
  }
  while (f < fresh.length) out.push(fresh[f++])
  return out
}

/** How many cards will unlock in the next 24 hours, for the home screen. */
export function dueTomorrow(state: AppState, now = Date.now()) {
  const horizon = now + 86_400_000
  return activeCards(state).filter((c) => {
    const p = state.progress[c.id]
    return p && p.stage !== 'new' && p.due > now && p.due <= horizon
  }).length
}
