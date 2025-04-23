'use client'

import React, { createContext, useState, useEffect } from 'react'
import { lightTheme } from '@/styles/themes/light.css'
import { darkTheme } from '@/styles/themes/dark.css'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const classList = document.body.classList
    classList.remove(lightTheme, darkTheme)

    if (theme === 'light') {
      classList.add(lightTheme)
    } else {
      classList.add(darkTheme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
