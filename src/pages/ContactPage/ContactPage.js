import styles from './ContactPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'

export default function ContactPage(){
    return (
        <>
            <NavBar />
            <NavMobile />
            <div className={styles.ContactPage}>
                <div className={styles.FormContainer}>
                    <h1 className={styles.header}>Contact Me Today!</h1>
                    <form className={styles.Form} action="https://submit-form.com/9atYbBFL">
                        <label for="name">Name</label>
                        <input className={styles.input} type="text" id="name" name="name" required="" />
                        <label for="email">Email</label>
                        <input className={styles.input} type="email" id="email" name="email" required="" />
                        <label for="message">Message</label>
                        <textarea
                            className={styles.message}
                            id="message"
                            name="message"
                            required=""
                        ></textarea>
                        <button className={styles.button} type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}