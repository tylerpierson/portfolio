import styles from './IntroContainer.module.scss'
import SpriteAnimation from '../SpriteAnimation/SpriteAnimation'
import SpriteAnimationMed from '../SpriteAnimation/SpriteAnimationMed'
import SpriteAnimationSm from '../SpriteAnimation/SpriteAnimationSm'

function IntroContainer() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.mainContent}>
        <h4 className={styles.headingSM}>Tyler Pierson - Software Engineer</h4>
        <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span> a<br/>web <span className={styles.spanText}>developer</span></h1>
      </div>
      <div className={styles.SpriteContainer}>
          <div className={styles.SpriteAnimation}>
            <SpriteAnimation />
          </div>
          <div className={styles.SpriteAnimationMed}>
            <SpriteAnimationMed />
          </div>
          <div className={styles.SpriteAnimationSm}>
            <SpriteAnimationSm />
          </div>
        </div>
    </div>
  )
}

export default IntroContainer