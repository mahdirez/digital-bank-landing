import { useEffect, useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { primaryNavLinks } from '../../../data/navigation'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <img src="/images/logo-dark.svg" alt="Digitalbank" width={139} height={20} />
        </a>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button className={styles.cta}>Request Invite</Button>
          <button
            type="button"
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <img
              src={isOpen ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'}
              alt=""
              width={24}
              height={24}
            />
            <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      ) : null}
    </header>
  )
}
