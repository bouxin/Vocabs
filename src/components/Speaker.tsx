import { useEffect, useRef, useState } from 'react'
import { speak, speechSupported } from '../lib/speech'
import type { Settings } from '../lib/types'

interface Props {
  text: string
  settings: Settings
  variant?: 'big' | 'inline'
  label?: string
}

export function Speaker({ text, settings, variant = 'inline', label }: Props) {
  const [speaking, setSpeaking] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current)
    },
    [],
  )

  if (!speechSupported()) return null

  const play = () => {
    speak(text, { voiceUri: settings.voiceUri, rate: settings.rate })
    setSpeaking(true)
    if (timer.current) window.clearTimeout(timer.current)
    // Rough duration estimate; the API's end event is unreliable on iOS.
    timer.current = window.setTimeout(
      () => setSpeaking(false),
      Math.min(6000, 600 + (text.length / settings.rate) * 55),
    )
  }

  if (variant === 'big') {
    return (
      <button
        className={`speak-btn${speaking ? ' speaking' : ''}`}
        onClick={play}
        aria-label={label ?? 'Play pronunciation'}
      >
        🔊
      </button>
    )
  }

  return (
    <button onClick={play} aria-label={label ?? 'Play pronunciation'}>
      🔈
    </button>
  )
}
