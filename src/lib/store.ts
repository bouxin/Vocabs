import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { AflSub, AppState, DeckId, Grade, Settings } from './types'
import { loadState, saveState, todayKey, defaultState } from './storage'
import { newProgress, schedule } from './srs'

export interface Store {
  state: AppState
  /** Grade a card and persist the new schedule. */
  review: (cardId: string, grade: Grade) => void
  setSettings: (patch: Partial<Settings>) => void
  toggleDeck: (deck: DeckId) => void
  toggleSub: (sub: AflSub) => void
  resetProgress: () => void
  replaceState: (next: AppState) => void
}

export function useStore(): Store {
  const [state, setState] = useState<AppState>(() => rollDay(loadState()))
  const pending = useRef<number | null>(null)

  // Debounced write: grading is fast and localStorage is synchronous.
  useEffect(() => {
    if (pending.current) window.clearTimeout(pending.current)
    pending.current = window.setTimeout(() => saveState(state), 150)
    return () => {
      if (pending.current) window.clearTimeout(pending.current)
    }
  }, [state])

  // Write immediately if the page is being backgrounded or closed.
  useEffect(() => {
    const flush = () => saveState(state)
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', flush)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', flush)
    }
  }, [state])

  const review = useCallback((cardId: string, grade: Grade) => {
    setState((prev) => {
      const base = rollDay(prev)
      const existing = base.progress[cardId]
      const wasNew = !existing || existing.stage === 'new'
      const updated = schedule(existing ?? newProgress(cardId), grade)

      const key = todayKey()
      const log = [...base.log]
      const idx = log.findIndex((d) => d.date === key)
      const entry = idx >= 0 ? { ...log[idx] } : { date: key, reviews: 0, learned: 0 }
      entry.reviews += 1
      if (wasNew) entry.learned += 1
      if (idx >= 0) log[idx] = entry
      else log.push(entry)

      return {
        ...base,
        progress: { ...base.progress, [cardId]: updated },
        log: log.slice(-400),
        introducedToday: base.introducedToday + (wasNew ? 1 : 0),
      }
    })
  }, [])

  const setSettings = useCallback((patch: Partial<Settings>) => {
    setState((prev) => ({ ...prev, settings: { ...prev.settings, ...patch } }))
  }, [])

  const toggleDeck = useCallback((deck: DeckId) => {
    setState((prev) => {
      const decks = { ...prev.settings.decks, [deck]: !prev.settings.decks[deck] }
      // Never leave both decks off — there would be nothing to study.
      if (!decks.ACL && !decks.AFL) return prev
      return { ...prev, settings: { ...prev.settings, decks } }
    })
  }, [])

  const toggleSub = useCallback((sub: AflSub) => {
    setState((prev) => {
      const subs = { ...prev.settings.subs, [sub]: !prev.settings.subs[sub] }
      // Leaving every AFL sublist off would empty the deck silently.
      if (!subs.core && !subs.written && !subs.spoken) return prev
      return { ...prev, settings: { ...prev.settings, subs } }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setState((prev) => ({ ...defaultState(), settings: prev.settings }))
  }, [])

  const replaceState = useCallback((next: AppState) => setState(rollDay(next)), [])

  return useMemo(
    () => ({ state, review, setSettings, toggleDeck, toggleSub, resetProgress, replaceState }),
    [state, review, setSettings, toggleDeck, toggleSub, resetProgress, replaceState],
  )
}

/** Reset the daily new-card allowance when the date changes. */
function rollDay(s: AppState): AppState {
  const key = todayKey()
  if (s.lastIntroDate === key) return s
  return { ...s, lastIntroDate: key, introducedToday: 0 }
}
