import type { Card } from '../lib/types'

/** The facts the published lists give us about a phrase. */
export function CardMeta({ card }: { card: Card }) {
  if (card.deck === 'ACL') {
    if (!card.headwords?.length) return null
    return (
      <div className="meta-row">
        <span className="faint">Listed under</span>
        <span>{card.headwords.join(', ')}</span>
      </div>
    )
  }
  return (
    <>
      {card.sub ? (
        <div className="meta-row">
          <span className="faint">Sublist</span>
          <span>
            {card.sub === 'core' ? 'Core' : card.sub === 'written' ? 'Written' : 'Spoken'}
            {card.rank ? ` · rank ${card.rank}` : ''}
          </span>
        </div>
      ) : null}
      {card.freqWriting !== undefined ? (
        <div className="meta-row">
          <span className="faint">Per million words</span>
          <span className="tnum">
            {card.freqWriting} writing · {card.freqSpeech} speech
          </span>
        </div>
      ) : null}
    </>
  )
}
