import styles from './ImgBanner.module.scss'

function ImgBanner() {
  return (
    <div className={styles.imgBannerContainer}>
        <img className={styles.imgBanner} src="https://i.imgur.com/zACT24f.png" />
    </div>
  )
}

export default ImgBanner