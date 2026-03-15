import styles from './Typography.module.css'
import { ElementType, ReactNode } from 'react'

interface TypographyProps {
  as?: ElementType
  variant: string
  children: ReactNode
  className?: string
  style?: Record<string, string | number>
}

export const Typography = ({
  as: Component = 'div',
  variant,
  className = '',
  children,
  style,
}: TypographyProps) => {
  return (
    <Component
      style={{ ...style }}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}
