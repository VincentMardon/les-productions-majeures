import { createTheme } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { colors } from '../tokens/colors'

export const lightTheme = createTheme(vars, {
  color: {
    background: colors.white,
    foreground: colors.black,
    primary: colors.blue,
    secondary: colors.pink,
    border: colors.lightGray,
  },
  font: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
})
