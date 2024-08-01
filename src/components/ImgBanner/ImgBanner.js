import styles from './ImgBanner.module.scss'

function ImgBanner() {
  return (
    <div className={styles.imgBannerContainer}>
        <h1 className={styles.title}>Tyler</h1>
        <h3 className={styles.subTitle}>Pierson</h3>
        <div className={styles.spritesheet}></div>
    </div>
  )
}

export default ImgBanner