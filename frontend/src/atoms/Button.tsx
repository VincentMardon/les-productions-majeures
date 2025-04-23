import * as React from 'react'
import { button } from '@/styles/atoms/button.css'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button className={button} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
