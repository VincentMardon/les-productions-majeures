import { useEffect, useState } from 'react'
import { lightTheme } from '@/styles/themes/light.css'
import { darkTheme } from '@/styles/themes/dark.css'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return

    root.classList.remove(lightTheme, darkTheme)
    root.classList.add(theme === 'light' ? lightTheme : darkTheme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    toggleTheme,
  }
}
