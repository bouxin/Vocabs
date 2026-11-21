import { useCallback, useEffect, useRef, useState } from 'react'
import { useStore } from './lib/store'
import { HomeView } from './components/HomeView'
import { StudyView } from './components/StudyView'
import { BrowseView } from './components/BrowseView'
import { StatsView } from './components/StatsView'
import { SettingsView } from './components/SettingsView'
import { buildQueue } from './lib/session'

type View = 'home' | 'study' | 'browse' | 'stats' | 'settings'

const TABS: { id: View; icon: string; label: string }[] = [
  { id: 'home', icon: '◉', label: 'Home' },
  { id: 'study', icon: '▶', label: 'Study' },
  { id: 'browse', icon: '☰', label: 'Words' },
  { id: 'stats', icon: '◴', label: 'Stats' },
]

const THEME_KEY = 'vocabs.theme'

/**
 * Respect what the viewer already has: a saved choice first, then whatever
 * theme the host page set on <html>, then the operating system.
 */
function initialTheme(): 'dark' | 'light' {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* storage can be blocked */
  }
  const host = document.documentElement.dataset.theme
  if (host === 'dark' || host === 'light') return host
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const store = useStore()
  const [view, setView] = useState<View>('home')
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme)
  const [toastMsg, setToastMsg] = useState<string | null>(null)
  const toastTimer = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1020' : '#f6f7fb')
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toast = useCallback((msg: string) => {
    setToastMsg(msg)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 2200)
  }, [])

  const queue = buildQueue(store.state)
  const badge = queue.cards.length

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="dot" />
          Vocabs
          <small>ACL · AFL</small>
        </div>
        <button
          className="icon-btn"
          onClick={() => setView(view === 'settings' ? 'home' : 'settings')}
          aria-label="Settings"
        >
          {view === 'settings' ? '✕' : '⚙'}
        </button>
      </header>

      <main className="main">
        {view === 'home' ? <HomeView store={store} onStudy={() => setView('study')} /> : null}
        {view === 'study' ? <StudyView store={store} onDone={() => setView('home')} /> : null}
        {view === 'browse' ? <BrowseView store={store} /> : null}
        {view === 'stats' ? <StatsView store={store} /> : null}
        {view === 'settings' ? (
          <SettingsView store={store} theme={theme} onTheme={setTheme} toast={toast} />
        ) : null}
      </main>

      {toastMsg ? <div className="toast">{toastMsg}</div> : null}

      <nav className="tabbar" role="tablist">
        <div className="tabbar-inner">
          {TABS.map((t) => (
            <button
              key={t.id}
              className="tab"
              role="tab"
              aria-selected={view === t.id}
              onClick={() => setView(t.id)}
            >
              <b aria-hidden>{t.icon}</b>
              {t.label}
              {t.id === 'study' && badge > 0 && view !== 'study' ? (
                <span className="badge">{badge > 99 ? '99+' : badge}</span>
              ) : null}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
