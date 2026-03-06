import styles from './Loader.module.css'

export const Loader = ({
  size,
  color,
  margin,
}: {
  size: number
  color?: string
  margin?: string
}) => {
  return (
    <svg
      style={{ color, margin }}
      className={styles.loader}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
