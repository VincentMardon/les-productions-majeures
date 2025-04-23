import { createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
  },
  shadow: null,
})
