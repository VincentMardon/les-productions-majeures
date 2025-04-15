import { style } from '@vanilla-extract/css'
import { vars } from './styles/theme.css'

export const container = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  minHeight: '100vh',
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
})

export const button = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.color.primary,
  color: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.spacing.md,
  fontFamily: vars.font.body,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
})
