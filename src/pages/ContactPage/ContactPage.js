import styles from './ContactPage.module.scss'
import Button from '../../components/Button/Button'

export default function ContactPage(){
    return (
        <>
            <h1>Contact Page</h1>
            <form>
                <label>Name<input type="text"></input></label>
            </form>
            <Button />      
        </>
    )
}