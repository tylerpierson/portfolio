import styles from './Bio.module.scss'

function Bio() {
  return (
    <div className={styles.Bio}>
        <div className={styles.contentContainer}>
            <h1 className={styles.title}>Software<br/>Engineer</h1>
        </div>
        <p className={styles.titleDescription}>My role is as dynamic as the code I craft. I'm not just a coder; I'm an architect, a problem-solver, and an innovator.  </p>
    </div>
  )
}

export default Bio