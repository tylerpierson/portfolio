import styles from './Projects.module.scss'

function Projects() {
  return (
    <div className={styles.Projects}>
        <div className={styles.ProjectCardOne}>
            <div className={styles.ProjectCard}>
                <div className={styles.imgContainer}>
                    <img className={styles.ProjectLogo} src="https://i.imgur.com/UIjyIMC.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                    <h5>Goose Dev Hub</h5>
                    <h6>Year: 2024</h6>
                    <h6>Category: Tech, Social Media</h6>
                </div>
            </div>
        </div>
        <div className={styles.ProjectCardTwo}>
            <div className={styles.ProjectCard}>
                <div className={styles.imgContainer}>
                    <img className={styles.ProjectLogo} src="https://i.imgur.com/ndrcB38.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                    <h5>MarvelVerse Comics</h5>
                    <h6>Year: 2024</h6>
                    <h6>Category: Ecommerce</h6>
                </div>
            </div>
        </div>
        <div className={styles.ProjectCardThree}>
            <div className={styles.ProjectCard}>
                <div className={styles.imgContainer}>
                    <img className={styles.ProjectLogo} src="https://i.imgur.com/0yD52R2.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                    <h5>Liberty Blogs</h5>
                    <h6>Year: 2023</h6>
                    <h6>Category: Social Media, Communication</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects