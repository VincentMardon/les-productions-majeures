import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeToggleButton } from '@/features/theme/ThemeToggleButton'
import { ThemeProvider } from '@/features/theme/ThemeContext'
import '@testing-library/jest-dom'

jest.mock('@/styles/themes/dark.css', () => ({
  darkTheme: 'darkTheme',
}))

describe('ToggleThemeButton', () => {
  it('renders and toggles without crashing', () => {
    render(
      <ThemeProvider>
        <ThemeToggleButton>Clic</ThemeToggleButton>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })

  it('toggle theme applies class to body', async () => {
    render(
      <ThemeProvider>
        <ThemeToggleButton>Clic</ThemeToggleButton>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    // console.log(document.body.classList)
    fireEvent.click(button)

    await waitFor(() => {
      expect(document.body.classList.value).toBe('darkTheme')
    })
  })
})
