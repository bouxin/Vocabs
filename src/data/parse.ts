import type { AflSub, DeckId } from '../lib/types'

export interface AclEntry {
  term: string
  headwords: string[]
}

export interface AflEntry {
  term: string
  sub: AflSub
  rank: number
  freqSpeech: number
  freqWriting: number
  ftw: number
}

export interface NoteEntry {
  deck: DeckId
  term: string
  pattern: string
  meaning: string
  examples: string[]
}

/**
 * Lines are pipe-separated; blank lines and # comments are ignored.
 * A "#deck ACL" comment switches which deck the following lines belong to,
 * and that deck is returned as the first element of each row.
 */
function rows(raw: string, min: number): string[][] {
  const out: string[][] = []
  let deck = 'ACL'
  for (const line of raw.split('\n')) {
    const text = line.trim()
    if (text.startsWith('#deck ')) {
      deck = text.slice(6).trim()
      continue
    }
    if (!text || text.startsWith('#')) continue
    const parts = text.split('|').map((p) => p.trim())
    if (parts.length < min) {
      if (import.meta.env.DEV) console.warn(`skipping malformed line: ${text}`)
      continue
    }
    out.push([deck, ...parts])
  }
  return out
}

export function parseAcl(raw: string): AclEntry[] {
  return rows(raw, 2).map(([, term, heads]) => ({
    term,
    headwords: heads.split(',').map((h) => h.trim()).filter(Boolean),
  }))
}

export function parseAfl(raw: string): AflEntry[] {
  const counters: Record<string, number> = {}
  return rows(raw, 5).map(([, term, sub, speech, writing, ftw]) => {
    counters[sub] = (counters[sub] ?? 0) + 1
    return {
      term,
      sub: sub as AflSub,
      rank: counters[sub],
      freqSpeech: Number(speech) || 0,
      freqWriting: Number(writing) || 0,
      ftw: Number(ftw) || 0,
    }
  })
}

export function parseNotes(raw: string): NoteEntry[] {
  return rows(raw, 4).map(([deck, term, pattern, meaning, ...examples]) => ({
    deck: deck as DeckId,
    term,
    pattern,
    meaning,
    examples: examples.filter(Boolean),
  }))
}
