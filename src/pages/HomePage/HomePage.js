import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'
import IntroContainer from '../../components/IntroContainer/IntroContainer'
import Bio from '../../components/Bio/Bio'
import ImgBanner from '../../components/ImgBanner/ImgBanner'
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer'
import ProjectBanner from '../../components/ProjectBanner/ProjectBanner'
import Projects from '../../components/Projects/Projects'
import SpriteAnimation from '../../components/SpriteAnimation/SpriteAnimation'

export default function HomePage(){
    const projectId = "project-section";
    return (
        <>
            <NavBar />
            <NavMobile />
            <div className={styles.HomePage}>
                <SpriteAnimation />
                <IntroContainer />
                <Bio />
                <ImgBanner />
                <ServiceContainer />
                <ProjectBanner />
                <Projects />
            </div>
        </>
    )
}