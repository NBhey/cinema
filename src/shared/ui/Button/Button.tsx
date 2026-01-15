import styles from './style.module.css'
import { CSSProperties } from "react";

interface Button {
  text: string
  clickAction?: () => void
  className?: string
  style?: CSSProperties 
  variant: string
}

export const Button = ({ text, className='', style={}, clickAction, variant }: Button) => {
  return (
    <button onClick={clickAction} className={`${styles[variant]} ${className}`} style={style}>
      {text}
    </button>
  )
}
