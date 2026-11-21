import { useMemo, useState } from 'react'
import { ALL_CARDS, COUNTS } from '../data'
import type { Card, DeckId } from '../lib/types'
import type { Store } from '../lib/store'
import { isMature, isRemembered } from '../lib/srs'
import { CardSheet } from './CardSheet'

type Filter = 'all' | DeckId | 'core' | 'written' | 'spoken' | 'new' | 'learning' | 'remembered' | 'examples'

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ACL', label: 'ACL' },
  { id: 'AFL', label: 'AFL' },
  { id: 'core', label: 'AFL core' },
  { id: 'written', label: 'AFL written' },
  { id: 'spoken', label: 'AFL spoken' },
  { id: 'examples', label: 'With examples' },
  { id: 'new', label: 'Not started' },
  { id: 'learning', label: 'Learning' },
  { id: 'remembered', label: 'Remembered' },
]

function matches(card: Card, filter: Filter, progress: Store['state']['progress']) {
  const p = progress[card.id]
  switch (filter) {
    case 'all':
      return true
    case 'ACL':
    case 'AFL':
      return card.deck === filter
    case 'core':
    case 'written':
    case 'spoken':
      return card.sub === filter
    case 'examples':
      return card.examples.length > 0
    case 'new':
      return !p || p.stage === 'new'
    case 'learning':
      return !!p && p.stage === 'learning'
    case 'remembered':
      return isRemembered(p)
  }
}

export function BrowseView({ store }: { store: Store }) {
  const { state } = store
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState<Card | null>(null)

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return ALL_CARDS.filter((c) => {
      if (!matches(c, filter, state.progress)) return false
      if (!needle) return true
      return (
        c.term.toLowerCase().includes(needle) ||
        c.meaning?.toLowerCase().includes(needle) ||
        c.pattern?.toLowerCase().includes(needle) ||
        c.headwords?.some((h) => h.toLowerCase().includes(needle)) ||
        c.examples.some((e) => e.toLowerCase().includes(needle))
      )
    })
  }, [q, filter, state.progress])

  const shown = results.slice(0, 300)

  return (
    <div>
      <div className="search">
        <span aria-hidden>🔍</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${COUNTS.total.toLocaleString()} phrases`}
          type="search"
          enterKeyHint="search"
          autoComplete="off"
        />
        {q ? (
          <button onClick={() => setQ('')} aria-label="Clear search" className="faint">
            ✕
          </button>
        ) : null}
      </div>

      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className="chip"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="faint" style={{ margin: '0 2px 10px' }}>
        {results.length.toLocaleString()} result{results.length === 1 ? '' : 's'}
        {results.length > shown.length ? ` · showing the first ${shown.length}` : ''}
      </p>

      {shown.length ? (
        <div className="list-wrap">
          {shown.map((c) => {
            const p = state.progress[c.id]
            const cls =
              !p || p.stage === 'new' ? '' : isMature(p) ? 'mature' : isRemembered(p) ? 'review' : 'learning'
            return (
              <button className="list-item" key={c.id} onClick={() => setOpen(c)}>
                <span className={`state-dot ${cls}`} aria-hidden />
                <span className="li-body">
                  <span className="li-term">{c.term}</span>
                  <span className="li-meaning">
                    {c.meaning ??
                      (c.deck === 'ACL'
                        ? c.headwords?.join(', ')
                        : `${c.sub} · ${c.freqWriting}/M in writing`)}
                  </span>
                </span>
                <span className={`pill ${c.deck.toLowerCase()}`}>{c.deck}</span>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="empty">
          <div className="big">🔎</div>
          Nothing matched that search.
        </div>
      )}

      {open ? (
        <CardSheet
          card={open}
          progress={state.progress[open.id]}
          settings={state.settings}
          onClose={() => setOpen(null)}
        />
      ) : null}
    </div>
  )
}
