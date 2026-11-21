/**
 * Pronunciation uses the Web Speech API, which ships with iOS Safari,
 * Android Chrome and every desktop browser — no network call, no API key,
 * and it keeps working offline once the voice is installed.
 */

let cached: SpeechSynthesisVoice[] = []

export function speechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function getEnglishVoices(): SpeechSynthesisVoice[] {
  if (!speechSupported()) return []
  const voices = window.speechSynthesis.getVoices()
  if (voices.length) {
    cached = voices.filter((v) => v.lang.toLowerCase().startsWith('en'))
  }
  return cached
}

/** Voices load asynchronously on most browsers; resolve once they appear. */
export function onVoicesReady(cb: () => void) {
  if (!speechSupported()) return () => {}
  const handler = () => cb()
  window.speechSynthesis.addEventListener('voiceschanged', handler)
  // Some engines already have them.
  if (window.speechSynthesis.getVoices().length) cb()
  return () => window.speechSynthesis.removeEventListener('voiceschanged', handler)
}

export interface SpeakOptions {
  voiceUri?: string | null
  rate?: number
}

export function speak(text: string, opts: SpeakOptions = {}) {
  if (!speechSupported() || !text) return
  const synth = window.speechSynthesis
  synth.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  const voices = getEnglishVoices()
  const picked =
    (opts.voiceUri && voices.find((v) => v.voiceURI === opts.voiceUri)) ||
    voices.find((v) => /en-US/i.test(v.lang) && /natural|enhanced|premium/i.test(v.name)) ||
    voices.find((v) => /en-US/i.test(v.lang)) ||
    voices.find((v) => /en-GB/i.test(v.lang)) ||
    voices[0]
  if (picked) {
    utter.voice = picked
    utter.lang = picked.lang
  } else {
    utter.lang = 'en-US'
  }
  utter.rate = opts.rate ?? 0.95
  utter.pitch = 1
  synth.speak(utter)
}

export function stopSpeaking() {
  if (speechSupported()) window.speechSynthesis.cancel()
}
