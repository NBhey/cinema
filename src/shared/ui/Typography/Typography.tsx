import styles from './Typography.module.css'
import { ElementType } from 'react'

interface Typography {
  as?: ElementType
  variant: string
  children: React.ReactNode
  className?: string
}

export const Typography = ({
  as: Component = 'div',
  variant,
  className = '',
  children,
}: Typography) => {
  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  )
}
