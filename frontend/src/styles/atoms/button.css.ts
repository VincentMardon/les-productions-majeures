import { style } from '@vanilla-extract/css'

import { colors } from '../tokens/colors'
import { vars } from '../theme.css'

export const button = style({
  padding: '14px',
  margin: '10px',
  fontSize: '20px',
  color: colors.white,
  backgroundColor: colors.dodgerBlue,
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow,
    },
  },
})
