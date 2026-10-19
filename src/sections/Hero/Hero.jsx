import { Button } from '../../components/ui/Button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
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
        <div className={styles.visual} aria-hidden="true" />
      </div>
    </section>
  )
}
