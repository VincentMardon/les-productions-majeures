import { createThemeContract } from "@vanilla-extract/css"

export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    primary: null,
    secondary: null,
    border: null,
  },
  font: {
    body: null,
    heading: null,
    mono: null,
  },
  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  }
})