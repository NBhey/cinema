import styles from './Typography.module.css'
import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

type TypographyProps<T extends ElementType = 'div'> = {
  as?: ElementType
  variant: string
  children: ReactNode
  className?: string
  style?: Record<string, string | number>
} & ComponentPropsWithRef<T>

export const Typography = <T extends ElementType = 'div'>({
  as: Component = 'div',
  variant,
  className = '',
  children,
  style,
  ...rest
}: TypographyProps<T>) => {
  return (
    <Component
      style={{ ...style }}
      className={`${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
