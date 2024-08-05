import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className={styles.Link} to='/'>
                        <li className={styles.li}>Home</li>
                    </Link>
                    <Link className={styles.Link} to='/about'>
                        <li className={styles.li}>About Me</li>
                    </Link>
                    <Link className={styles.Link} to='/contact'>
                        <li className={styles.li}>Contact</li>
                    </Link>
                    <a className={styles.Link} href="/documents/resume.docx.pdf" download="Tyler_Pierson_Resume.pdf">
                        <li className={styles.li}>Resume</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;
