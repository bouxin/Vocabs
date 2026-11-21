import type { AflSub, Card, DeckId } from '../lib/types'
import { exactKey, matchKey, slug } from '../lib/phrase'
import { ACL_LIST } from './acl-list'
import { AFL_LIST } from './afl-list'
import { NOTES } from './notes'

/**
 * Notes are matched to list entries on the exact phrase first and on the
 * looser article-free key second, so "raise a question" still reaches
 * "raise (a) question" without "point of view" swallowing the note written
 * for "the point of view".
 */
const notesByExact = new Map(NOTES.map((n) => [exactKey(n.term), n]))
const notesByLoose = new Map(NOTES.map((n) => [matchKey(n.term), n]))
const usedNotes = new Set<typeof NOTES[number]>()

function takeNote(term: string) {
  const note = notesByExact.get(exactKey(term)) ?? notesByLoose.get(matchKey(term))
  if (note) usedNotes.add(note)
  return note
}

const ids = new Set<string>()

/** Ids come from the phrase, so a collision has to be broken deterministically. */
function uniqueId(deck: DeckId, term: string) {
  const base = `${deck.toLowerCase()}-${slug(term)}`
  if (!ids.has(base)) {
    ids.add(base)
    return base
  }
  let n = 2
  while (ids.has(`${base}-${n}`)) n += 1
  ids.add(`${base}-${n}`)
  return `${base}-${n}`
}

const aclCards: Card[] = ACL_LIST.map((entry) => {
  const note = takeNote(entry.term)
  return {
    id: uniqueId('ACL', entry.term),
    deck: 'ACL',
    term: entry.term,
    headwords: entry.headwords,
    pattern: note?.pattern,
    meaning: note?.meaning,
    examples: note?.examples ?? [],
  }
})

const aflCards: Card[] = AFL_LIST.map((entry) => {
  const note = takeNote(entry.term)
  return {
    id: uniqueId('AFL', entry.term),
    deck: 'AFL',
    term: entry.term,
    sub: entry.sub,
    rank: entry.rank,
    freqSpeech: entry.freqSpeech,
    freqWriting: entry.freqWriting,
    ftw: entry.ftw,
    pattern: note?.pattern,
    meaning: note?.meaning,
    examples: note?.examples ?? [],
  }
})

/**
 * Notes written for a phrase that no published list contains — "case study",
 * "research question" and similar. They are useful academic phrases, so they
 * stay as cards, flagged so they can be filtered out.
 */
const extras: Card[] = NOTES.filter((n) => !usedNotes.has(n)).map((n) => ({
  id: uniqueId(n.deck, n.term),
  deck: n.deck,
  term: n.term,
  pattern: n.pattern,
  meaning: n.meaning,
  examples: n.examples,
  // No sublist: the AFL sublists stay exactly as published.
  extra: true,
}))

export const ALL_CARDS: Card[] = [...aclCards, ...aflCards, ...extras]

export const CARD_BY_ID = new Map(ALL_CARDS.map((c) => [c.id, c]))

export const COUNTS = {
  total: ALL_CARDS.length,
  acl: ALL_CARDS.filter((c) => c.deck === 'ACL').length,
  afl: ALL_CARDS.filter((c) => c.deck === 'AFL').length,
  core: ALL_CARDS.filter((c) => c.sub === 'core').length,
  written: ALL_CARDS.filter((c) => c.sub === 'written').length,
  spoken: ALL_CARDS.filter((c) => c.sub === 'spoken').length,
  /** How many cards carry a hand-written gloss and examples. */
  annotated: ALL_CARDS.filter((c) => c.examples.length > 0).length,
}

export const DECKS: { id: DeckId; name: string; blurb: string; count: number }[] = [
  {
    id: 'ACL',
    name: 'ACL',
    blurb: 'Academic Collocation List — the word pairs that academic writers use together.',
    count: COUNTS.acl,
  },
  {
    id: 'AFL',
    name: 'AFL',
    blurb: 'Academic Formulas List — recurrent phrases that signal moves in academic language.',
    count: COUNTS.afl,
  },
]

export const SUBS: { id: AflSub; name: string; blurb: string; count: number }[] = [
  { id: 'core', name: 'Core', blurb: 'Common in writing and speech', count: COUNTS.core },
  { id: 'written', name: 'Written', blurb: 'Common in academic writing', count: COUNTS.written },
  { id: 'spoken', name: 'Spoken', blurb: 'Common in lectures and seminars', count: COUNTS.spoken },
]
