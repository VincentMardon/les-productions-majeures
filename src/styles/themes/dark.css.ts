import { createTheme } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { colors } from '../tokens/colors'
import { fonts, spacing, radius } from '../tokens/dimensions'

export const darkTheme = createTheme(vars, {
  color: {
    background: colors.black,
    foreground: colors.white,
    primary: colors.cyan,
    secondary: colors.magenta,
    border: colors.darkGray,
  },
  font: fonts,
  spacing: spacing,
  radius: radius,
})
