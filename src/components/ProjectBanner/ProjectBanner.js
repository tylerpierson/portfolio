import styles from './ProjectBanner.module.scss'

function ProjectBanner() {
  return (
    <div className={styles.projectBannerContainer}>
        <h1 className={styles.projectBanner}>My Projects</h1>
    </div>
  )
}

export default ProjectBanner