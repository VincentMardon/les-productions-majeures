'use client'

import { Button } from '@/atoms'
import { useTheme } from './useTheme'

type ThemeToggleButtonProps = {
  children: React.ReactNode
}

export const ThemeToggleButton = ({ children }: ThemeToggleButtonProps) => {
  const { toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} type="button">
      {children}
    </Button>
  )
}
