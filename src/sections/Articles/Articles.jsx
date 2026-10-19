import { articles } from '../../data/articles'
import styles from './Articles.module.css'

export function Articles() {
  return (
    <section id="blog" className={styles.articles} aria-labelledby="articles-heading">
      <div className="container">
        <h2 id="articles-heading" className={styles.title}>Latest Articles</h2>
        <ul className={styles.grid}>
          {articles.map((article) => (
            <li key={article.id}>
              <article className={styles.card}>
                <a href={`#article-${article.id}`} className={styles.mediaLink}>
                  <img src={article.image} alt="" className={styles.image} loading="lazy" />
                </a>
                <div className={styles.body}>
                  <p className={styles.author}>{article.author}</p>
                  <h3 className={styles.cardTitle}>
                    <a href={`#article-${article.id}`}>{article.title}</a>
                  </h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
