import { COUNTS, DECKS, SUBS } from '../data'
import type { Store } from '../lib/store'
import { buildQueue, dueTomorrow } from '../lib/session'
import { computeTotals } from '../lib/stats'

interface Props {
  store: Store
  onStudy: () => void
}

export function HomeView({ store, onStudy }: Props) {
  const { state, toggleDeck, toggleSub } = store
  const queue = buildQueue(state)
  const totals = computeTotals(state)
  const tomorrow = dueTomorrow(state)
  const pctRemembered = totals.total ? (totals.remembered / totals.total) * 100 : 0
  const pctLearning = totals.total ? (totals.learning / totals.total) * 100 : 0

  return (
    <div>
      <div className="hero">
        <div className="hero-top">
          <div>
            <div className="faint" style={{ fontWeight: 600 }}>
              Remembered
            </div>
            <div className="big-number">
              {totals.remembered}
              <span className="faint" style={{ fontSize: 16, fontWeight: 600 }}>
                {' '}
                / {totals.total}
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="pill">🔥 {totals.streakDays}d streak</div>
            <div className="faint" style={{ marginTop: 6 }}>
              {totals.reviewsToday} reviews today
            </div>
          </div>
        </div>

        <div className="progress-track" aria-label="Progress through the active decks">
          <div className="progress-fill" style={{ width: `${pctRemembered}%` }} />
          <div className="progress-fill learning" style={{ width: `${pctLearning}%` }} />
        </div>

        <div className="counts">
          <div className="count-box">
            <b>{queue.dueCount}</b>
            <span>Due</span>
          </div>
          <div className="count-box">
            <b>{queue.newCount}</b>
            <span>New</span>
          </div>
          <div className="count-box">
            <b>{totals.mature}</b>
            <span>Mature</span>
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={onStudy} disabled={!queue.cards.length}>
          {queue.cards.length ? `Study ${queue.cards.length} card${queue.cards.length === 1 ? '' : 's'}` : 'All caught up'}
        </button>
        {!queue.cards.length && tomorrow > 0 ? (
          <p className="faint" style={{ textAlign: 'center', marginBottom: 0 }}>
            {tomorrow} card{tomorrow === 1 ? '' : 's'} come back within 24 hours.
          </p>
        ) : null}
      </div>

      <div className="section-title">Decks</div>
      {DECKS.map((deck) => {
        const s = totals.decks.find((d) => d.deck === deck.id)!
        const on = state.settings.decks[deck.id]
        return (
          <div className="card deck-card" key={deck.id}>
            <div className="deck-body">
              <div className="row" style={{ marginBottom: 4 }}>
                <span className={`pill ${deck.id.toLowerCase()}`}>{deck.name}</span>
                <span className="faint tnum">
                  {s.remembered} / {deck.count.toLocaleString()} remembered
                </span>
              </div>
              <div className="faint" style={{ lineHeight: 1.4 }}>
                {deck.blurb}
              </div>
              <div className="progress-track" style={{ marginTop: 10, height: 6 }}>
                <div
                  className="progress-fill"
                  style={{ width: `${(s.remembered / deck.count) * 100}%` }}
                />
              </div>
              {deck.id === 'AFL' && on ? (
                <div className="sub-toggles">
                  {SUBS.map((sub) => (
                    <button
                      key={sub.id}
                      className="chip"
                      aria-pressed={state.settings.subs[sub.id]}
                      onClick={() => toggleSub(sub.id)}
                      title={sub.blurb}
                    >
                      {sub.name} <span className="tnum">{sub.count}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <button
              className="switch"
              data-on={on}
              onClick={() => toggleDeck(deck.id)}
              aria-label={`${on ? 'Disable' : 'Enable'} the ${deck.name} deck`}
              aria-pressed={on}
            >
              <i />
            </button>
          </div>
        )
      })}

      <p className="faint" style={{ margin: '14px 2px 0', lineHeight: 1.5 }}>
        {COUNTS.annotated} of {COUNTS.total.toLocaleString()} cards have a written meaning and
        example sentences. The rest are studied as gap-fills from the published lists.
      </p>
    </div>
  )
}
