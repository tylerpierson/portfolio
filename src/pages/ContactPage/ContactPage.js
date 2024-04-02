import styles from './ContactPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'

export default function ContactPage(){
    return (
        <>
            <NavBar />
            <h1>Contact Page</h1>
            <form action="https://submit-form.com/9atYbBFL">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" />
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    )
}