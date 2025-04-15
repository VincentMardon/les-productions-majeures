import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/reset.css'
import { lightTheme } from './styles/themes/light.css.ts'
const root = document.getElementById('root')!

root.className = lightTheme
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
