export type Part = { text: string; hit: boolean }

function escape(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Highlight the target phrase inside an example sentence.
 * Examples often inflect the phrase ("give rise to" -> "gave rise to"), so if
 * the full phrase is absent we fall back to the longest contiguous word
 * sequence from the end of the phrase that does occur.
 */
export function highlight(sentence: string, term: string): Part[] {
  const words = term.split(/\s+/).filter(Boolean)
  for (let start = 0; start < words.length; start += 1) {
    const candidate = words.slice(start).join(' ')
    if (candidate.length < 3) break
    const re = new RegExp(escape(candidate).replace(/\s+/g, '\\s+'), 'i')
    const m = re.exec(sentence)
    if (m) {
      return [
        { text: sentence.slice(0, m.index), hit: false },
        { text: m[0], hit: true },
        { text: sentence.slice(m.index + m[0].length), hit: false },
      ].filter((p) => p.text.length > 0)
    }
  }
  return [{ text: sentence, hit: false }]
}
