import styles from './ProjectsPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

export default function ProjectsPage(){
    return (
        <>
            <NavBar />
            <h1>This is the ProjectPage</h1>  
            <div className={styles.bgDesign}></div>
        </>
    )
}