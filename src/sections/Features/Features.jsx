import { features, featuresSection } from '../../data/features'
import styles from './Features.module.css'

export function Features() {
  return (
    <section
      id={featuresSection.id}
      className={styles.features}
      aria-labelledby="features-heading"
    >
      <div className="container">
        <header className={styles.intro}>
          <h2 id="features-heading" className={styles.title}>
            {featuresSection.title}
          </h2>
          <p>{featuresSection.description}</p>
        </header>
        <ul className={styles.grid}>
          {features.map((feature) => (
            <li key={feature.id}>
              <article className={styles.card}>
                <img src={feature.icon} alt="" width={72} height={72} />
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
