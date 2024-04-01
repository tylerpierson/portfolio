import styles from './ImgBanner.module.scss'

function ImgBanner() {
  return (
    <div className={styles.imgBannerContainer}>
        <img className={styles.imgBanner} src="/img/computer.png" />
    </div>
  )
}

export default ImgBanner