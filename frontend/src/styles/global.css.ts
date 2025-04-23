import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('html, body', {
  maxWidth: '100%',
  overflowX: 'hidden',
})

globalStyle('body', {
  color: vars.color.foreground,
  background: vars.color.background,
  fontFamily: 'Arial, Helvetica, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})
