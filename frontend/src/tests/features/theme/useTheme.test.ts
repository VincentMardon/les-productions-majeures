import { renderHook } from '@testing-library/react'
import { useTheme } from '@/features/theme/useTheme'

describe('useTheme', () => {
  it('throws error if used outside ThemeProvider', () => {
    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')
  })
})
