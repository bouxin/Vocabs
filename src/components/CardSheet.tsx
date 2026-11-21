import type { Card, CardProgress, Settings } from '../lib/types'
import { formatInterval, isMature } from '../lib/srs'
import { highlight } from '../lib/highlight'
import { spoken } from '../lib/phrase'
import { Speaker } from './Speaker'
import { CardMeta } from './CardMeta'

interface Props {
  card: Card
  progress: CardProgress | undefined
  settings: Settings
  onClose: () => void
}

export function CardSheet({ card, progress, settings, onClose }: Props) {
  const stage =
    !progress || progress.stage === 'new'
      ? 'Not started'
      : isMature(progress)
        ? 'Mature'
        : progress.stage === 'learning'
          ? 'Learning'
          : 'In review'

  return (
    <div className="sheet-backdrop" onClick={onClose} role="presentation">
      <div className="sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={card.term}>
        <div className="sheet-handle" />
        <div className="row">
          <span className="row" style={{ gap: 6 }}>
            <span className={`pill ${card.deck.toLowerCase()}`}>{card.deck}</span>
            {card.sub ? <span className="pill">{card.sub}</span> : null}
            {card.extra ? <span className="pill">extra</span> : null}
          </span>
          <span className="faint">{stage}</span>
        </div>
        <h2 style={{ margin: '12px 0 2px', fontSize: 24, letterSpacing: '-0.02em' }}>{card.term}</h2>
        {card.pattern ? <div className="pattern">{card.pattern}</div> : null}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0' }}>
          <Speaker text={spoken(card.term)} settings={settings} variant="big" />
        </div>

        {card.meaning ? (
          <div className="card" style={{ marginBottom: 12 }}>
            <div className="section-title" style={{ margin: '0 0 6px' }}>
              Meaning
            </div>
            <div>{card.meaning}</div>
          </div>
        ) : null}

        {card.examples.length ? (
          <>
            <div className="section-title" style={{ marginTop: 0 }}>
              Examples
            </div>
            <div className="examples">
              {card.examples.map((ex, i) => (
                <div className="example" key={i}>
                  <Speaker text={ex} settings={settings} />
                  <span>
                    {highlight(ex, card.term).map((p, j) =>
                      p.hit ? <mark key={j}>{p.text}</mark> : <span key={j}>{p.text}</span>,
                    )}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <div className="section-title">In the list</div>
        <div className="card">
          <CardMeta card={card} />
        </div>

        {progress && progress.reps > 0 ? (
          <>
            <div className="section-title">Your history</div>
            <div className="stat-grid">
              <div className="stat">
                <b>{progress.reps}</b>
                <span>Reviews</span>
              </div>
              <div className="stat">
                <b>{formatInterval(progress.interval)}</b>
                <span>Interval</span>
              </div>
              <div className="stat">
                <b>{progress.streak}</b>
                <span>Streak</span>
              </div>
              <div className="stat">
                <b>{progress.lapses}</b>
                <span>Lapses</span>
              </div>
            </div>
            <p className="faint">
              Next due {new Date(progress.due).toLocaleString()} · ease {progress.ease.toFixed(2)}
            </p>
          </>
        ) : null}

        <button className="btn btn-block" onClick={onClose} style={{ marginTop: 14 }}>
          Close
        </button>
      </div>
    </div>
  )
}
