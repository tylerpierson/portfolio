import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

export default function HomePage(){
    return (
        <>
            <NavBar />
            <h1>This is the HomePage</h1>
            <div className={styles.bgDesign}></div>
        </>
    )
}