export type DeckId = 'ACL' | 'AFL'

/** The AFL ships as three sublists; the ACL is one list. */
export type AflSub = 'core' | 'written' | 'spoken'

/** One studiable item: an academic collocation or an academic formula. */
export interface Card {
  /**
   * Stable id, derived from the phrase itself (acl-raise-a-question), so
   * regenerating or extending a list never moves progress onto another card.
   */
  id: string
  deck: DeckId
  /**
   * The phrase as the published list writes it, optional parts in brackets:
   * "raise (a) question", "(be) widely accepted".
   */
  term: string
  /** ACL: the headwords the list files this collocation under. */
  headwords?: string[]
  /** AFL: which sublist it belongs to, and where it ranks within it. */
  sub?: AflSub
  rank?: number
  /** AFL: occurrences per million words, and the list's formula-teaching-worth score. */
  freqSpeech?: number
  freqWriting?: number
  ftw?: number
  /** From notes.ts, where one has been written: pattern, gloss, examples. */
  pattern?: string
  meaning?: string
  examples: string[]
  /** True for a phrase kept from the starter deck that no published list contains. */
  extra?: boolean
}

/** SM-2 style scheduling state for one card. */
export interface CardProgress {
  id: string
  /** Ease factor, 1.3 – 2.8. */
  ease: number
  /** Current interval in days. */
  interval: number
  /** Consecutive successful reviews. */
  streak: number
  /** Total times reviewed. */
  reps: number
  /** Times answered "Again". */
  lapses: number
  /** Epoch ms when the card is next due. */
  due: number
  /** Epoch ms of the last review. */
  lastReviewed: number
  /** Learning stage: new -> learning -> review (mature once interval >= 21d). */
  stage: 'new' | 'learning' | 'review'
}

export type Grade = 'again' | 'hard' | 'good' | 'easy'

export interface DayLog {
  /** Local date key, YYYY-MM-DD. */
  date: string
  reviews: number
  learned: number
}

export interface Settings {
  decks: Record<DeckId, boolean>
  /** Which AFL sublists are in play. */
  subs: Record<AflSub, boolean>
  /** New cards introduced per day, per the whole session. */
  newPerDay: number
  /** Max reviews per session. */
  maxReviews: number
  voiceUri: string | null
  rate: number
  autoPlay: boolean
  showMeaningFirst: boolean
}

export interface AppState {
  version: number
  progress: Record<string, CardProgress>
  log: DayLog[]
  settings: Settings
  /** Local date key of the last day new cards were introduced. */
  lastIntroDate: string
  introducedToday: number
}
