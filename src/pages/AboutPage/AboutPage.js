import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'
import styles from './AboutPage.module.scss'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.AboutPage}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Who I am...</h1> 
          <div className={styles.bioContainer}>
            <p className={styles.bio}>
            Hello! I'm a dedicated <span className={styles.highlight}>Web Developer</span> with several years of experience in crafting digital solutions that blend functionality and aesthetics. My journey into the world of technology began after serving five years as a Marine Corps infantryman stationed on the beautiful island of Oahu, Hawaii. This experience taught me the values of discipline, dedication, and excellence, which I carry into my work as a developer.
            <br/><br/>
            Eager to expand my knowledge, I earned a Bachelor of Science degree in Interdisciplinary Studies from the University of North Texas and a Master's degree in Education Administration and Human Development from Texas A&M University. Driven by a passion for continuous learning, I recently graduated as Valedictorian from General Assembly's rigorous software engineering course. This program allowed me to refine my skills and gain a deeper understanding of the science behind computer science.
            <br/><br/> 
            Throughout my development career, I've worked on diverse projects, honing my abilities in both frontend and backend technologies. My expertise includes JavaScript, HTML/CSS, React.js, Node.js, Django, and various other tools and frameworks. At General Assembly, I aimed to not only enhance my technical skills but also to grasp the underlying principles that make great software.
            <br/><br/>  
            As a web developer, I strive to create user-centric digital experiences that are both innovative and reliable. I'm committed to growing as a developer and leveraging my background in education to inspire others to pursue their passion for technology.
            </p>
            <Link className={styles.button} to='/contact'><button>Contact Me Today!</button></Link>
          </div>
        </div>
        <img className={styles.image} src="/img/headshot.png" />
      </div>
    </>
  )
}

export default AboutPage