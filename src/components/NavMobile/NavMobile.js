import { useState } from 'react';
import styles from './NavMobile.module.scss';

function NavMobile() {
    const [isRotated, setIsRotated] = useState(false);
    const [listShown, setListShown] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
        setListShown(!listShown);
    };

    return (
        <nav className={styles.NavMobile}>
            <button className={styles.NavBtn} onClick={handleClick}>
                <span className={`${styles.NavBtnTop} ${isRotated ? styles.rotateTop : styles.revertTop}`}>|</span>
                <span className={`${styles.NavBtnMid} ${isRotated ? styles.fadeOut : styles.fadeIn}`}>|</span>
                <span className={`${styles.NavBtnBottom} ${isRotated ? styles.rotateBottom : styles.revertBottom}`}>|</span>
            </button>
            <div className={`${styles.NavContainer} ${listShown ? styles.expandContainer : styles.collapseContainer}`}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>About Me</li>
                    <li className={styles.li}>Projects</li>
                    <li className={styles.li}>Contact Me</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;
