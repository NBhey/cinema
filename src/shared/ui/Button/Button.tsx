import styles from './style.module.css'
import { CSSProperties } from "react";

interface Button {
  text: string
  clickAction?: () => void
  className?: string
  style?: CSSProperties 
}

export const Button = ({ text, className='', style={}, clickAction }: Button) => {
  return (
    <button onClick={clickAction} className={`${styles.btn} ${className}`} style={style}>
      {text}
    </button>
  )
}
