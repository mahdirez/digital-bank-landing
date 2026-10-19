import { Button } from '../../components/ui/Button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.shell}`}>
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
      </div>
      <div className={styles.media} aria-hidden="true">
        <img className={styles.introMobile} src="/images/bg-intro-mobile.svg" alt="" />
        <img className={styles.introDesktop} src="/images/bg-intro-desktop.svg" alt="" />
        <img
          className={styles.mockups}
          src="/images/image-mockups.png"
          alt=""
          width={584}
          height={665}
        />
      </div>
    </section>
  )
}
