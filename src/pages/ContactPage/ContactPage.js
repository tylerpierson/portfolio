import styles from './ContactPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'

export default function ContactPage(){
    return (
        <>
            <NavBar />
            <h1>Contact Page</h1>
            <form>
                <label>Name<input type="text"></input></label>
            </form>
            <Button />      
            <div className={styles.bgDesign}></div>
        </>
    )
}