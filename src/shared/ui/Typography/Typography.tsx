import styles from './Typography.module.css'
import { ElementType } from 'react'

interface Typography {
  as?: ElementType
  variant: string
  children: React.ReactNode
  className?: string
  style?: Record<string, string | number>
}

export const Typography = ({
  as: Component = 'div',
  variant,
  className = '',
  children,
  style,
}: Typography) => {
  return (
    <Component
      style={{ ...style }}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}
