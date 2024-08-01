import styles from './IntroContainer.module.scss'

function IntroContainer() {
  return (
    <div className={styles.IntroContainer}>
      <h4 className={styles.headingSM}>Tyler Pierson - Software Engineer</h4>
      <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span> a<br/>web designer <span className={styles.spanPlus}>+</span><br/><span className={styles.spanText}>developer</span></h1>
    </div>
  )
}

export default IntroContainer