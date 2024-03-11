import styles from './NavBar.module.scss'

export default function NavBar(){
    return (
        <nav className={styles.Nav}>
            <img className={styles.image} src="https://i.imgur.com/xbCw3gO.png"/>
            <ul className={styles.ul}>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Home</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>About Me</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Projects</li></a>
                <a className={styles.navItem} href="#"><li className={styles.listItem}>Contact</li></a>
            </ul>
        </nav>
    )
}