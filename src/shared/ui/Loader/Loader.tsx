import styles from './Loader.module.css'

export const Loader = ({ size, color }: { size: number; color?: string }) => {
  return (
    <svg
      style={{ color }}
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
