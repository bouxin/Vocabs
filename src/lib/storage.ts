import type { AflSub, AppState, DeckId, Settings } from './types'

const KEY = 'vocabs.state.v1'
const VERSION = 1

export function todayKey(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export const DEFAULT_SETTINGS: Settings = {
  decks: { ACL: true, AFL: true },
  subs: { core: true, written: true, spoken: true },
  newPerDay: 15,
  maxReviews: 120,
  voiceUri: null,
  rate: 0.95,
  autoPlay: true,
  showMeaningFirst: false,
}

export function defaultState(): AppState {
  return {
    version: VERSION,
    progress: {},
    log: [],
    settings: {
      ...DEFAULT_SETTINGS,
      decks: { ...DEFAULT_SETTINGS.decks },
      subs: { ...DEFAULT_SETTINGS.subs },
    },
    lastIntroDate: todayKey(),
    introducedToday: 0,
  }
}

/**
 * Progress lives in localStorage so it survives reloads, offline use and
 * being added to the home screen. Every read is defensive: a corrupted or
 * partially-written blob must never stop the app from opening.
 */
export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as Partial<AppState>
    const base = defaultState()
    const decks = {
      ...base.settings.decks,
      ...(parsed.settings?.decks ?? {}),
    } as Record<DeckId, boolean>
    const subs = {
      ...base.settings.subs,
      ...(parsed.settings?.subs ?? {}),
    } as Record<AflSub, boolean>
    return {
      version: VERSION,
      progress: parsed.progress ?? {},
      log: Array.isArray(parsed.log) ? parsed.log : [],
      settings: { ...base.settings, ...(parsed.settings ?? {}), decks, subs },
      lastIntroDate: parsed.lastIntroDate ?? base.lastIntroDate,
      introducedToday: typeof parsed.introducedToday === 'number' ? parsed.introducedToday : 0,
    }
  } catch {
    return defaultState()
  }
}

export function saveState(state: AppState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Private mode or a full quota — studying still works for this session.
  }
}

export function exportState(state: AppState) {
  return JSON.stringify(state, null, 2)
}

export function importState(json: string): AppState | null {
  try {
    const parsed = JSON.parse(json)
    if (!parsed || typeof parsed !== 'object' || typeof parsed.progress !== 'object') return null
    const base = defaultState()
    return {
      ...base,
      ...parsed,
      version: VERSION,
      settings: { ...base.settings, ...(parsed.settings ?? {}) },
    }
  } catch {
    return null
  }
}
