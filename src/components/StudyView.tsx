import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Card, CardProgress, Grade } from '../lib/types'
import type { Store } from '../lib/store'
import { buildQueue } from '../lib/session'
import { formatInterval, newProgress, schedule } from '../lib/srs'
import { highlight } from '../lib/highlight'
import { cloze, spoken } from '../lib/phrase'
import { Speaker } from './Speaker'
import { CardMeta } from './CardMeta'
import { speak, stopSpeaking } from '../lib/speech'

interface Props {
  store: Store
  onDone: () => void
}

const GRADES: { grade: Grade; label: string; cls: string }[] = [
  { grade: 'again', label: 'Again', cls: 'again' },
  { grade: 'hard', label: 'Hard', cls: 'hard' },
  { grade: 'good', label: 'Good', cls: 'good' },
  { grade: 'easy', label: 'Easy', cls: 'easy' },
]

/** What the user will see on the button: "10m" inside a learning step, "4d" after. */
function nextLabel(prog: CardProgress, g: Grade) {
  const now = Date.now()
  const next = schedule(prog, g, now)
  if (next.interval > 0) return formatInterval(next.interval)
  const minutes = Math.max(1, Math.round((next.due - now) / 60_000))
  return `${minutes}m`
}

export function StudyView({ store, onDone }: Props) {
  const { state, review } = store
  // The queue is frozen when the session starts so grading does not reshuffle
  // the cards under the user's thumb.
  const [queue, setQueue] = useState<Card[]>(() => buildQueue(state).cards)
  const [revealed, setRevealed] = useState(false)
  const [answered, setAnswered] = useState(0)
  const [learned, setLearned] = useState(0)
  const total = useMemo(() => queue.length, [])
  const card = queue[0]

  const settings = state.settings

  useEffect(() => {
    if (card && settings.autoPlay && revealed) {
      speak(spoken(card.term), { voiceUri: settings.voiceUri, rate: settings.rate })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card?.id, revealed])

  useEffect(() => () => stopSpeaking(), [])

  const grade = useCallback(
    (g: Grade) => {
      if (!card) return
      const wasNew = !state.progress[card.id] || state.progress[card.id].stage === 'new'
      review(card.id, g)
      setAnswered((n) => n + 1)
      if (wasNew) setLearned((n) => n + 1)
      setRevealed(false)
      setQueue((q) => {
        const [head, ...rest] = q
        if (g !== 'again') return rest
        // Put a forgotten card back a few cards later, Anki-style.
        const at = Math.min(3, rest.length)
        return [...rest.slice(0, at), head, ...rest.slice(at)]
      })
    },
    [card, review, state.progress],
  )

  // Keyboard shortcuts, handy when the H5 page is open on a laptop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card) return
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault()
        if (!revealed) setRevealed(true)
        else grade('good')
        return
      }
      if (!revealed) return
      const map: Record<string, Grade> = { '1': 'again', '2': 'hard', '3': 'good', '4': 'easy' }
      if (map[e.key]) grade(map[e.key])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [card, revealed, grade])

  if (!card) {
    return (
      <div className="empty">
        <div className="big">{answered > 0 ? '🎉' : '✅'}</div>
        <h2 style={{ margin: '0 0 6px' }}>{answered > 0 ? 'Session complete' : 'Nothing due'}</h2>
        <p className="muted" style={{ marginTop: 0 }}>
          {answered > 0
            ? `${answered} review${answered === 1 ? '' : 's'}, ${learned} new card${
                learned === 1 ? '' : 's'
              } learned.`
            : 'Everything is scheduled for later. Raise new cards per day in Settings to study more now.'}
        </p>
        <button className="btn btn-primary" onClick={onDone} style={{ marginTop: 10 }}>
          Back to home
        </button>
      </div>
    )
  }

  const progressPct = total ? Math.round(((total - queue.length) / total) * 100) : 0
  const prog = state.progress[card.id] ?? newProgress(card.id)
  const isNew = prog.stage === 'new'
  const gap = card.meaning ? null : cloze(card.term)

  return (
    <div className="study">
      <div className="study-head">
        <button className="icon-btn" onClick={onDone} aria-label="End session">
          ✕
        </button>
        <div className="study-bar">
          <i style={{ width: `${progressPct}%` }} />
        </div>
        <span className="faint" style={{ minWidth: 42, textAlign: 'right' }}>
          {queue.length} left
        </span>
      </div>

      <div className="flashcard" key={card.id + String(revealed)}>
        <div className="row" style={{ justifyContent: 'center', gap: 8 }}>
          <span className={`pill ${card.deck.toLowerCase()}`}>{card.deck}</span>
          {card.sub ? <span className="pill">{card.sub}</span> : null}
          {isNew ? <span className="pill">NEW</span> : null}
        </div>

        {!revealed && card.meaning && settings.showMeaningFirst ? (
          <>
            {card.pattern ? <div className="pattern">{card.pattern}</div> : null}
            <div className="term small">{card.meaning}</div>
            <div className="faint">Which phrase is this?</div>
          </>
        ) : !revealed && gap ? (
          <>
            <div className={`term${card.term.length > 22 ? ' small' : ''}`}>
              <span className="blank">?</span> {gap.stem}
            </div>
            {/* No headword hint here: the headwords include the hidden word. */}
            <div className="faint">Which word completes it?</div>
          </>
        ) : (
          <>
            <div className={`term${card.term.length > 22 ? ' small' : ''}`}>{card.term}</div>
            {card.pattern ? <div className="pattern">{card.pattern}</div> : null}
            <Speaker
              text={spoken(card.term)}
              settings={settings}
              variant="big"
              label="Play the phrase"
            />
          </>
        )}
      </div>

      {revealed ? (
        <>
          <div className="answer">
            {card.meaning ? (
              <div className="card">
                <div className="section-title" style={{ margin: '0 0 6px' }}>
                  Meaning
                </div>
                <div className="meaning">{card.meaning}</div>
              </div>
            ) : null}

            {card.examples.length ? (
              <div>
                <div className="section-title" style={{ marginTop: 4 }}>
                  Examples
                </div>
                <div className="examples">
                  {card.examples.map((ex, i) => (
                    <div className="example" key={i}>
                      <Speaker text={ex} settings={settings} label="Play example sentence" />
                      <span>
                        {highlight(ex, card.term).map((p, j) =>
                          p.hit ? <mark key={j}>{p.text}</mark> : <span key={j}>{p.text}</span>,
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card">
                <CardMeta card={card} />
              </div>
            )}
          </div>

          <div className="grades">
            {GRADES.map(({ grade: g, label, cls }) => (
              <button className={`grade ${cls}`} key={g} onClick={() => grade(g)}>
                {label}
                <small>{nextLabel(prog, g)}</small>
              </button>
            ))}
          </div>
        </>
      ) : (
        <button className="btn btn-primary btn-block reveal-btn" onClick={() => setRevealed(true)}>
          Show answer
        </button>
      )}
    </div>
  )
}
