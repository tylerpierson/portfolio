import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <nav className={styles.Nav}>
            <img className={styles.image} src="/img/tp-logo.png"/>
            <ul className={styles.ul}>
                <div className={styles.listItemContainer}>
                    <Link className={styles.navItemTop} to='/'><li className={styles.listItem}>Home</li></Link>
                    <Link className={styles.navItemBottom} to='/'><li className={styles.listItem}>Home</li></Link>
                </div>
                <div className={styles.listItemContainer}>
                    <Link className={styles.navItemTop} to='/about'><li className={styles.listItem}>About Me</li></Link>
                    <Link className={styles.navItemBottom} to='/about'><li className={styles.listItem}>About Me</li></Link>
                </div>
                <div className={styles.listItemContainer}>
                    <a className={styles.navItemTop} href="#"><li className={styles.listItem}>Projects</li></a>
                    <a className={styles.navItemBottom} href="#"><li className={styles.listItem}>Projects</li></a>
                </div>
                <div className={styles.listItemContainer}>
                    <Link className={styles.navItemTop} to='/contact'><li className={styles.listItem}>Contact</li></Link>
                    <Link className={styles.navItemBottom} to='/contact'><li className={styles.listItem}>Contact</li></Link>
                </div>
            </ul>
        </nav>
    )
}