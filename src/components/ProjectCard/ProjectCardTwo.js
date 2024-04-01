import styles from './ProjectCard.module.scss'

function ProjectCardTwo() {
  return (
    <div className={styles.ProjectCardContainer}>
        <div className={styles.ProjectCardInnerContainer}>
            <div className={styles.ProjectCard}>
                <div className={styles.titleImgContainer}>
                    <h2 className={styles.ProjectTitle}>MarvelVerse Comics</h2>
                    <img className={styles.ProjectImg} src="/img/marvel.jpg"/>
                    <h4>Year: 2024</h4>
                    <h4>Category: Ecommerce</h4>
                </div>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.ProjectDescription}>
                        Welcome to our Marvel Comics Emporium, where every purchase is a journey into the heart of the Marvel universe, meticulously crafted using the latest in web technology. Our online store isn't just a destination; it's a testament to the power of innovation and creativity, built from the ground up with a MERN (MongoDB, Express.js, React.js, Node.js) stack.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCardTwo