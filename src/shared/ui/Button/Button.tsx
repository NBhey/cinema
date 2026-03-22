import styles from './Button.module.css'
import { CSSProperties } from 'react'

interface ButtonProps {
  text: string
  clickAction?: () => void
  className?: string
  style?: CSSProperties
  variant: 'calendar' | 'enter' | 'standart' | 'booking'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({
  text,
  variant,
  className = '',
  style = {},
  clickAction,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={clickAction}
      className={`${styles[variant]} ${className}`}
      style={style}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
