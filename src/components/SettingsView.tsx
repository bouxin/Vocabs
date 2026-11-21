import { useEffect, useState } from 'react'
import type { Store } from '../lib/store'
import { getEnglishVoices, onVoicesReady, speak, speechSupported } from '../lib/speech'
import { exportState, importState } from '../lib/storage'
import { ALL_CARDS } from '../data'

interface Props {
  store: Store
  theme: 'dark' | 'light'
  onTheme: (t: 'dark' | 'light') => void
  toast: (msg: string) => void
}

export function SettingsView({ store, theme, onTheme, toast }: Props) {
  const { state, setSettings, resetProgress, replaceState } = store
  const s = state.settings
  const [voices, setVoices] = useState(() => getEnglishVoices())
  const [importText, setImportText] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  useEffect(() => onVoicesReady(() => setVoices(getEnglishVoices())), [])

  const copyBackup = async () => {
    const json = exportState(state)
    try {
      await navigator.clipboard.writeText(json)
      toast('Backup copied to clipboard')
    } catch {
      setImportText(json)
      toast('Clipboard blocked — copy from the box')
    }
  }

  return (
    <div>
      <div className="section-title" style={{ marginTop: 8 }}>
        Study
      </div>
      <div className="card">
        <div className="field">
          <div className="row">
            <label htmlFor="newPerDay">New cards per day</label>
            <b>{s.newPerDay}</b>
          </div>
          <input
            id="newPerDay"
            type="range"
            min={0}
            max={60}
            step={5}
            value={s.newPerDay}
            onChange={(e) => setSettings({ newPerDay: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <div className="row">
            <label htmlFor="maxReviews">Review limit per session</label>
            <b>{s.maxReviews}</b>
          </div>
          <input
            id="maxReviews"
            type="range"
            min={20}
            max={300}
            step={20}
            value={s.maxReviews}
            onChange={(e) => setSettings({ maxReviews: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <div className="row">
            <label htmlFor="reverse">Ask meaning first</label>
            <button
              id="reverse"
              className="switch"
              data-on={s.showMeaningFirst}
              aria-pressed={s.showMeaningFirst}
              onClick={() => setSettings({ showMeaningFirst: !s.showMeaningFirst })}
            >
              <i />
            </button>
          </div>
          <span className="faint">
            Recall the phrase from its meaning — harder, and better for production.
          </span>
        </div>
      </div>

      <div className="section-title">Pronunciation</div>
      <div className="card">
        {speechSupported() ? (
          <>
            <div className="field">
              <label htmlFor="voice">Voice</label>
              <select
                id="voice"
                value={s.voiceUri ?? ''}
                onChange={(e) => setSettings({ voiceUri: e.target.value || null })}
              >
                <option value="">Automatic (best English voice)</option>
                {voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} — {v.lang}
                  </option>
                ))}
              </select>
              <span className="faint">
                {voices.length
                  ? `${voices.length} English voices available on this device.`
                  : 'Voices load on first use — tap Test below.'}
              </span>
            </div>
            <div className="field">
              <div className="row">
                <label htmlFor="rate">Speed</label>
                <b>{s.rate.toFixed(2)}×</b>
              </div>
              <input
                id="rate"
                type="range"
                min={0.6}
                max={1.3}
                step={0.05}
                value={s.rate}
                onChange={(e) => setSettings({ rate: Number(e.target.value) })}
              />
            </div>
            <div className="field">
              <div className="row">
                <label htmlFor="autoplay">Auto-play on each card</label>
                <button
                  id="autoplay"
                  className="switch"
                  data-on={s.autoPlay}
                  aria-pressed={s.autoPlay}
                  onClick={() => setSettings({ autoPlay: !s.autoPlay })}
                >
                  <i />
                </button>
              </div>
            </div>
            <button
              className="btn btn-block"
              onClick={() =>
                speak('There is a close relationship between literacy and income.', {
                  voiceUri: s.voiceUri,
                  rate: s.rate,
                })
              }
            >
              🔊 Test the voice
            </button>
          </>
        ) : (
          <p className="muted" style={{ margin: 0 }}>
            This browser has no speech synthesis. Pronunciation buttons are hidden; everything else
            works.
          </p>
        )}
      </div>

      <div className="section-title">Appearance</div>
      <div className="card">
        <div className="field">
          <div className="row">
            <label htmlFor="theme">Dark theme</label>
            <button
              id="theme"
              className="switch"
              data-on={theme === 'dark'}
              aria-pressed={theme === 'dark'}
              onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <i />
            </button>
          </div>
        </div>
      </div>

      <div className="section-title">Your data</div>
      <div className="card">
        <p className="faint" style={{ marginTop: 0 }}>
          Progress for {ALL_CARDS.length} cards is stored on this device only. Copy a backup before
          clearing your browser data or switching phones.
        </p>
        <button className="btn btn-block" onClick={copyBackup}>
          Copy backup JSON
        </button>
        <div className="field" style={{ marginTop: 6 }}>
          <label htmlFor="restore">Restore from backup</label>
          <textarea
            id="restore"
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Paste a backup here, then tap Restore"
            spellCheck={false}
          />
          <button
            className="btn btn-block"
            onClick={() => {
              const next = importState(importText)
              if (!next) return toast('That is not a valid backup')
              replaceState(next)
              setImportText('')
              toast('Progress restored')
            }}
            disabled={!importText.trim()}
          >
            Restore
          </button>
        </div>
        {confirmReset ? (
          <div className="row" style={{ gap: 8, marginTop: 10 }}>
            <button
              className="btn btn-danger"
              style={{ flex: 1 }}
              onClick={() => {
                resetProgress()
                setConfirmReset(false)
                toast('All progress cleared')
              }}
            >
              Yes, erase everything
            </button>
            <button className="btn btn-ghost" onClick={() => setConfirmReset(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="btn btn-block btn-danger"
            style={{ marginTop: 10 }}
            onClick={() => setConfirmReset(true)}
          >
            Reset all progress
          </button>
        )}
      </div>

      <p className="faint" style={{ textAlign: 'center', marginTop: 18 }}>
        Vocabs · ACL + AFL spaced repetition · {ALL_CARDS.length} cards
      </p>
    </div>
  )
}
