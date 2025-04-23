import { createTheme } from '@vanilla-extract/css'

import { vars } from '../theme.css'
import { colors } from '../tokens/colors'

export const darkTheme = createTheme(vars, {
  color: {
    background: colors.black,
    foreground: colors.white,
  },
  shadow: `4px 4px 6px ${colors.semiTransparentWhite}`,
})
