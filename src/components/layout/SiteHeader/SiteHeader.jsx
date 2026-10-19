import styles from './SiteHeader.module.css'

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          <img src="/images/logo-dark.svg" alt="Digitalbank" width={139} height={20} />
        </a>
        {/* Nav + mobile menu — مرحله بعد */}
      </div>
    </header>
  )
}
