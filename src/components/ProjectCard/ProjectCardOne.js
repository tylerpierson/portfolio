import styles from './ProjectCard.module.scss'

function ProjectCardOne() {
  return (
    <div className={styles.ProjectCardContainer}>
        <div className={styles.ProjectCardInnerContainer}>
            <div className={styles.ProjectCard}>
                <div className={styles.titleImgContainer}>
                    <h2 className={styles.ProjectTitle}>Goose Dev Hub</h2>
                    <img className={styles.ProjectImg} src='/img/goose.png' alt="Goose Image" />
                    <h4>Year: 2024</h4>
                    <h4>Category: Tech, Social Media</h4>
                </div>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.ProjectDescription}>
                        Welcome to Goose Dev Hub, the ultimate social platform meticulously crafted with the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, tailored exclusively for the web development community. Here, every line of code and every pixel on the screen is a testament to our commitment to empowering developers and employers alike.

                        Behind the sleek and intuitive user interface lies a powerhouse of technology, driven by Node.js for lightning-fast performance and Express.js for seamless backend communication. With MongoDB as our database of choice, we've created a scalable and robust platform that can handle the diverse needs of developers and employers with ease.

                        But Goose Dev Hub is more than just a showcase of technical prowess – it's a vibrant community where developers can showcase their projects, skills, and expertise, and employers can discover top talent to propel their businesses forward. Whether you're a seasoned developer looking for your next career opportunity or an employer seeking skilled candidates for your projects, Goose Dev Hub provides the perfect platform for connection and collaboration.

                        Join us at Goose Dev Hub and unlock endless possibilities for professional growth and success. With our MERN stack-powered platform, you'll have everything you need to take your career to new heights or find the perfect candidate for your next project. Let's build the future of web development together – one connection at a time.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCardOne