import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggleButton } from '@/features/theme/ThemeToggleButton'
import { ThemeProvider } from '@/features/theme/ThemeContext'
import '@testing-library/jest-dom'

describe('ToggleThemeButton', () => {
  it('render the button', () => {
    render(
      <ThemeProvider>
        <ThemeToggleButton>Clic</ThemeToggleButton>
      </ThemeProvider>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
  })
})
