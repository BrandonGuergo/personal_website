import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

// The browser would otherwise restore the previous scroll offset on reload,
// which drops you into the middle of the page. Always start at the top, and
// only jump to a section when the URL actually asks for one — that anchor has
// to wait for React to render the target element.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
const hash = window.location.hash
// `behavior: 'instant'` opts out of the global `scroll-behavior: smooth`, which
// would otherwise animate these load-time jumps.
window.scrollTo({ top: 0, behavior: 'instant' })

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (hash && hash !== '#top') {
  requestAnimationFrame(() => {
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'instant' })
  })
}
