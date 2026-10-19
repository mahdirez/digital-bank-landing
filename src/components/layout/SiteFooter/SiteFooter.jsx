import { Button } from '../../ui/Button/Button'
import { footerNavColumns, socialLinks } from '../../../data/navigation'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <a href="#home" className={styles.logo}>
          <img src="/images/logo-light.svg" alt="Digitalbank" width={139} height={20} />
        </a>

        <nav className={styles.nav} aria-label="Footer">
          {footerNavColumns.map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button>Request Invite</Button>
          <p className={styles.copyright}>© Digitalbank. All Rights Reserved</p>
        </div>

        <ul className={styles.social}>
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} aria-label={item.label}>
                <img src={item.icon} alt="" width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
