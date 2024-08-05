import React from 'react'
import styles from './Projects.module.scss'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className={styles.Projects}>

        <div className={styles.ProjectCard}>
            <p className={styles.mobileResponsive}>Mobile Responsive</p>
            <div className={styles.imgContainer}>
                <img className={styles.ProjectLogo} src="/img/push-logo.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                <h4>Push Project Management</h4>
                <h6>Year: 2024</h6>
                <h6>Category: Development, Project Management</h6>
                <Link target="_blank" to="https://www.pushmanage.pro"><img className={styles.ProjectLink} src="/img/link-icon.png" /></Link>
                <div className={styles.devContainer}>
                    <p className={styles.devTool}>ReactJS</p>
                    <p className={styles.devTool}>AWS</p>
                    <p className={styles.devTool}>EC2</p>
                    <p className={styles.devTool}>Cloudfront</p>
                </div>
            </div>
        </div>

        <div className={styles.ProjectCard}>
            <p className={styles.mobileResponsive}>Mobile Responsive</p>
            <div className={styles.imgContainer}>
                <img className={styles.ProjectLogo} src="/img/todo-list.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                <h4>Todo List Application</h4>
                <h6>Year: 2024</h6>
                <h6>Category: Task Management</h6>
                <Link target="_blank" to="https://d1240helpk124m.cloudfront.net"><img className={styles.ProjectLink} src="/img/link-icon.png" /></Link>
                <div className={styles.devContainer}>
                    <p className={styles.devTool}>Django</p>
                    <p className={styles.devTool}>Python</p>
                    <p className={styles.devTool}>AWS S3</p>
                    <p className={styles.devTool}>Cloudfront</p>
                </div>
            </div>
        </div>

        <div className={styles.ProjectCard}>
            <div className={styles.imgContainer}>
                <img className={styles.ProjectLogo} src="/img/goose-logo.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                <h4>Goose Dev Hub</h4>
                <h6>Year: 2024</h6>
                <h6>Category: Developer Tools, Social Media</h6>
                <Link target="_blank" to="https://goose.danwheeler.me"><img className={styles.ProjectLink} src="/img/link-icon.png" /></Link>
                <div className={styles.devContainer}>
                    <p className={styles.devTool}>ReactJS</p>
                    <p className={styles.devTool}>ExpressJS</p>
                    <p className={styles.devTool}>NodeJs</p>
                    <p className={styles.devTool}>DigitalOcean</p>
                </div>
            </div>
        </div>
        
        <div className={styles.ProjectCard}>
            <div className={styles.imgContainer}>
                <img className={styles.ProjectLogo} src="/img/marvel-logo.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                <h4>MarvelVerse Comics</h4>
                <h6>Year: 2023</h6>
                <h6>Category: eCommerce, Comics</h6>
                <Link target="_blank" to="https://marvel.tylerpierson.me"><img className={styles.ProjectLink} src="/img/link-icon.png" /></Link>
                <div className={styles.devContainer}>
                    <p className={styles.devTool}>ReactJS</p>
                    <p className={styles.devTool}>Nginx</p>
                    <p className={styles.devTool}>MongoDB</p>
                    <p className={styles.devTool}>NodeJS</p>
                </div>
            </div>
        </div>

        <div className={styles.ProjectCard}>
            <div className={styles.imgContainer}>
                <img className={styles.ProjectLogo} src="/img/blog-logo.png"/>
                </div>
                <div className={styles.ProjectDetails}>
                <h4>Liberty Blog</h4>
                <h6>Year: 2023</h6>
                <h6>Category: Blog, Community</h6>
                <Link target="_blank" to="https://blog.tylerpierson.me"><img className={styles.ProjectLink} src="/img/link-icon.png" /></Link>
                <div className={styles.devContainer}>
                    <p className={styles.devTool}>ReactJS</p>
                    <p className={styles.devTool}>Javascript</p>
                    <p className={styles.devTool}>HTML5</p>
                    <p className={styles.devTool}>SCSS</p>
                </div>
            </div>
        </div>    
    
    </div>
  )
}

export default Projects