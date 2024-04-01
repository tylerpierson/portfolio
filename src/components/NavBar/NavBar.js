import styles from './NavBar.module.scss'

export default function NavBar(){
    return (
        <nav className={styles.Nav}>
            <img className={styles.image} src="/img/tp-logo.png"/>
            <ul className={styles.ul}>
                <div className={styles.listItemContainer}>
                    <a className={styles.navItemTop} href="#"><li className={styles.listItem}>Home</li></a>
                    <a className={styles.navItemBottom} href="#"><li className={styles.listItem}>Home</li></a>
                </div>
                <div className={styles.listItemContainer}>
                    <a className={styles.navItemTop} href="#"><li className={styles.listItem}>About Me</li></a>
                    <a className={styles.navItemBottom} href="#"><li className={styles.listItem}>About Me</li></a>
                </div>
                <div className={styles.listItemContainer}>
                    <a className={styles.navItemTop} href="#"><li className={styles.listItem}>Projects</li></a>
                    <a className={styles.navItemBottom} href="#"><li className={styles.listItem}>Projects</li></a>
                </div>
                <div className={styles.listItemContainer}>
                    <a className={styles.navItemTop} href="#"><li className={styles.listItem}>Contact</li></a>
                    <a className={styles.navItemBottom} href="#"><li className={styles.listItem}>Contact</li></a>
                </div>
            </ul>
        </nav>
    )
}