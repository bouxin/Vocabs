/**
 * The published lists bracket the optional parts of a phrase:
 * "raise (a) question", "(be) widely accepted", "(a) huge amount (of)".
 * Three different readings of a phrase are needed across the app.
 */

/** What gets spoken and shown in a cloze: brackets dropped, words kept. */
export function spoken(term: string) {
  return term.replace(/[()]/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * Exact key: the phrase as written, only brackets and spacing normalised.
 * Tried first, so two list entries that differ only by an article —
 * "point of view" and "the point of view" — keep their own notes.
 */
export function exactKey(term: string) {
  return spoken(term).toLowerCase()
}

/**
 * Looser key, tried second: articles and "be" disappear as well, so a note
 * written as "raise a question" still finds the list's "raise (a) question".
 */
export function matchKey(term: string) {
  return spoken(term)
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => !['a', 'an', 'the', 'be'].includes(w))
    .join(' ')
}

/** Stable card id — derived from the phrase, never from its position. */
export function slug(term: string) {
  return spoken(term)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Split a phrase for a gap-fill prompt: the first real word is the answer and
 * the rest is the stem, which is the way collocation is actually tested
 * ("______ a question" -> "raise").
 */
export function cloze(term: string): { answer: string; stem: string } | null {
  const words = spoken(term).split(' ')
  if (words.length < 2) return null
  return { answer: words[0], stem: words.slice(1).join(' ') }
}
