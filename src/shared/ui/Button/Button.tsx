import styles from './Button.module.css'
import { CSSProperties } from "react";

interface Button {
  text: string
  clickAction?: () => void
  className?: string
  style?: CSSProperties 
  variant: "calendar" | "enter"
}

export const Button = ({ text, variant, className='', style={}, clickAction }: Button) => {
  return (
    <button onClick={clickAction} className={`${styles[variant]} ${className}`} style={style}>
      {text}
    </button>
  )
}
