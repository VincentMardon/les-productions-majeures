import { createTheme } from '@vanilla-extract/css'

import { vars } from '../theme.css'
import { colors } from '../tokens/colors'

export const lightTheme = createTheme(vars, {
  color: {
    background: colors.white,
    foreground: colors.black,
  },
  shadow: `4px 4px 6px ${colors.semiTransparentBlack}`,
})
