import type { Store } from '../lib/store'
import { computeTotals, recentActivity } from '../lib/stats'

export function StatsView({ store }: { store: Store }) {
  const totals = computeTotals(store.state)
  const activity = recentActivity(store.state, 14)
  const peak = Math.max(1, ...activity.map((a) => a.reviews))

  return (
    <div>
      <div className="section-title" style={{ marginTop: 8 }}>
        Totals
      </div>
      <div className="stat-grid">
        <div className="stat">
          <b>{totals.remembered}</b>
          <span>Remembered</span>
        </div>
        <div className="stat">
          <b>{totals.mature}</b>
          <span>Mature (21d+)</span>
        </div>
        <div className="stat">
          <b>{totals.learning}</b>
          <span>Learning</span>
        </div>
        <div className="stat">
          <b>{totals.unseen}</b>
          <span>Not started</span>
        </div>
        <div className="stat">
          <b>{totals.reviewsAllTime}</b>
          <span>Total reviews</span>
        </div>
        <div className="stat">
          <b>{totals.accuracy}%</b>
          <span>Recall accuracy</span>
        </div>
      </div>

      <div className="section-title">Last 14 days</div>
      <div className="card">
        <div className="bars">
          {activity.map((a) => (
            <div className="bar" key={a.date} title={`${a.date}: ${a.reviews} reviews`}>
              <i style={{ height: `${(a.reviews / peak) * 100}%` }} />
            </div>
          ))}
        </div>
        <div className="bars-axis">
          <span>{activity[0].date.slice(5)}</span>
          <span>today</span>
        </div>
        <div className="row" style={{ marginTop: 12 }}>
          <span className="faint">Current streak</span>
          <b>
            {totals.streakDays} day{totals.streakDays === 1 ? '' : 's'}
          </b>
        </div>
        <div className="row" style={{ marginTop: 6 }}>
          <span className="faint">Reviews today</span>
          <b>{totals.reviewsToday}</b>
        </div>
      </div>

      <div className="section-title">By deck</div>
      {totals.decks.map((d) => (
        <div className="card" key={d.deck} style={{ marginBottom: 10 }}>
          <div className="row">
            <span className={`pill ${d.deck.toLowerCase()}`}>{d.deck}</span>
            <span className="faint">
              {d.remembered} / {d.total} remembered
            </span>
          </div>
          <div className="progress-track" style={{ marginTop: 10 }}>
            <div className="progress-fill" style={{ width: `${(d.remembered / d.total) * 100}%` }} />
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <span className="faint">Seen {d.seen}</span>
            <span className="faint">Mature {d.mature}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
