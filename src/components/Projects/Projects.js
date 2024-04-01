import { useState, useEffect, useRef } from 'react'
import styles from './Projects.module.scss'
import ProjectCardOne from '../ProjectCard/ProjectCardOne'
import ProjectCardTwo from '../ProjectCard/ProjectCardTwo'
import ProjectCardThree from '../ProjectCard/ProjectCardThree'

function Projects() {
    const [showCardOne, setShowCardOne] = useState(false)
    const [showCardTwo, setShowCardTwo] = useState(false)
    const [showCardThree, setShowCardThree] = useState(false)
    const projectCardRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (projectCardRef.current && !projectCardRef.current.contains(event.target)) {
                setShowCardOne(false);
                setShowCardTwo(false);
                setShowCardThree(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [projectCardRef]);

    const toggleCardOne = () => {
        setShowCardOne(!showCardOne);
    }

    const toggleCardTwo = () => {
        setShowCardTwo(!showCardTwo);
    }

    const toggleCardThree = () => {
        setShowCardThree(!showCardThree);
    }

    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectCardOne}>
                <div className={styles.ProjectCard} onClick={toggleCardOne} ref={projectCardRef}>
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
                <div className={styles.ProjectCard} onClick={toggleCardTwo} ref={projectCardRef}>
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
                <div className={styles.ProjectCard} onClick={toggleCardThree} ref={projectCardRef}>
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
            {showCardOne && <ProjectCardOne />}
            {showCardTwo && <ProjectCardTwo />}
            {showCardThree && <ProjectCardThree />}
        </div>
    )
}

export default Projects
