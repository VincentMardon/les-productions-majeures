import { createTheme } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { colors } from '../tokens/colors'
import { spacing, radius, fonts } from '../tokens/dimensions'

export const lightTheme = createTheme(vars, {
  color: {
    background: colors.white,
    foreground: colors.black,
    primary: colors.blue,
    secondary: colors.pink,
    border: colors.lightGray,
  },
  font: fonts,
  spacing: spacing,
  radius: radius,
})
