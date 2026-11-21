import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// The service worker only exists in the multi-file build; the single-file H5
// bundle has no separate asset to register.
if (import.meta.env.MODE !== 'single' && import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      /* offline support is optional */
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
