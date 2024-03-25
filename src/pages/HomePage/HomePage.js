import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'
import IntroContainer from '../../components/IntroContainer/IntroContainer'
import Bio from '../../components/Bio/Bio'
import ImgBanner from '../../components/ImgBanner/ImgBanner'
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer'
import ProjectBanner from '../../components/ProjectBanner/ProjectBanner'

export default function HomePage(){
    return (
        <>
            <NavBar />
            <NavMobile />
            <div className={styles.HomePage}>
                <IntroContainer />
                <Bio />
                <ImgBanner />
                <ServiceContainer />
                <ProjectBanner />
            </div>
        </>
    )
}