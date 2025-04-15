import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/reset.css'
import { lightTheme } from './styles/themes/light.css.ts'
import { darkTheme } from './styles/themes/dark.css.ts'

const root = document.getElementById('root')!
// User Theme preferences detection
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

root.className = prefersDark ? darkTheme : lightTheme

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
