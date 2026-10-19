import { Button } from '../../components/ui/Button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <picture className={styles.introBg} aria-hidden="true">
        <source media="(min-width: 64em)" srcSet="/images/bg-intro-desktop.svg" />
        <img src="/images/bg-intro-mobile.svg" alt="" />
      </picture>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.title}>
            Next generation digital banking
          </h1>
          <p className={styles.lead}>
            Take your financial life online. Your Digitalbank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>
          <Button>Request Invite</Button>
        </div>
        <div className={styles.visual}>
          <img
            className={styles.mockups}
            src="/images/image-mockups.png"
            alt=""
            width={584}
            height={665}
          />
        </div>
      </div>
    </section>
  )
}
