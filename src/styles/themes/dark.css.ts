import { createTheme } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { colors } from '../tokens/colors'

export const darkTheme = createTheme(vars, {
  color: {
    background: colors.black,
    foreground: colors.white,
    primary: colors.cyan,
    secondary: colors.magenta,
    border: colors.darkGray,
  },
  font: vars.font,
  spacing: vars.spacing,
  radius: vars.radius,
})
