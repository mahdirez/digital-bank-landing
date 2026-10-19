import styles from './Button.module.css'

export function Button({ children, className = '', type = 'button', ...props }) {
  return (
    <button type={type} className={`${styles.button} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
