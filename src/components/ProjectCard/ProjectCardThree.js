import styles from './ProjectCard.module.scss'

function ProjectCardThree() {
  return (
    <div className={styles.ProjectCardContainer}>
        <div className={styles.ProjectCardInnerContainer}>
            <div className={styles.ProjectCard}>
                <div className={styles.titleImgContainer}>
                    <h2 className={styles.ProjectTitle}>Liberty Blogs</h2>
                    <img className={styles.ProjectImg} src="/img/blog.png"/>
                    <h4>Year: 2023</h4>
                    <h4>Category: Social Media, Communication</h4>
                </div>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.ProjectDescription}>
                        Driven by the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, Liberty Blogs is more than just a website – it's your personal canvas, waiting to be painted with the colors of your imagination. With React.js at the helm, your readers are greeted with a seamless and captivating interface, inviting them to delve into the depths of your thoughts and stories. Meanwhile, Node.js and Express.js ensure that your platform runs smoothly, allowing you to focus on what truly matters – your words.

                        Liberty Blogs isn't just a platform – it's your digital haven, where you have the freedom to express yourself authentically and connect with readers who resonate with your message. Whether you're sharing personal anecdotes, discussing thought-provoking topics, or simply expressing your creativity, Liberty Blogs is your space to shine.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCardThree