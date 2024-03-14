import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

export default function HomePage(){
    return (
        <>
            <NavBar />
            <h1>Welcome!</h1>
            <div className={styles.imgContainer}>
                <img className={styles.Image} src="https://i.imgur.com/UCkBOcc.png" />
            </div>
            <div className={styles.bgDesign}></div>
        </>
    )
}