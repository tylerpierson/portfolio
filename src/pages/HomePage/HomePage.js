import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

export default function HomePage(){
    return (
        <>
            <NavBar />
            <div className={styles.HomePage}>
                <h4 className={styles.headingSM}>Design Portfolio</h4>
                <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span> a<br/>web designer <span className={styles.spanPlus}>+</span><br/><span className={styles.spanText}>developer</span></h1>
                <p className={styles.paragraph}>Crafting great web design or development involves a harmonious fusion of creativity, functionality, and user experience. It's about more than just aesthetics; it's about creating an immersive digital environment that captivates users while effortlessly guiding them toward their goals.</p>
                <img className={styles.image} src="https://i.imgur.com/CAtnkHR.png" />
            </div>
            <div className={styles.Bio}>
                <h4 className={styles.headingSM}>Who I am</h4>
                <h1 className={styles.title}>Software<br/>Engineer</h1>
            </div>
        </>
    )
}