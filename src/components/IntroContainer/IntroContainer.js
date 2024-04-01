import styles from './IntroContainer.module.scss'

function IntroContainer() {
  return (
    <div className={styles.IntroContainer}>
    <h4 className={styles.headingSM}>Tyler Pierson - Software Engineer</h4>
    <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span> a<br/>web designer <span className={styles.spanPlus}>+</span><br/><span className={styles.spanText}>developer</span></h1>
    <p className={styles.paragraph}>Crafting great web design or development involves a harmonious fusion of creativity, functionality, and user experience. It's about more than just aesthetics; it's about creating an immersive digital environment that captivates users while effortlessly guiding them toward their goals.</p>
    <img className={styles.image} src="/img/headshot.png" />
    </div>
  )
}

export default IntroContainer