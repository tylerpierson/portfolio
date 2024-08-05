import React from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={styles.Nav}>
      <img className={styles.image} src="/img/tp-logo.png" alt="Logo"/>
      <ul className={styles.ul}>
        <Link className={styles.listItemContainer} to='/'>
          <div className={styles.navItemTop}><li className={styles.listItem}>Home</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>Home</li></div>
        </Link>
        <Link className={styles.listItemContainer} to='/about'>
          <div className={styles.navItemTop}><li className={styles.listItem}>About Me</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>About Me</li></div>
        </Link>
        <Link className={styles.listItemContainer} to='/contact'>
          <div className={styles.navItemTop}><li className={styles.listItem}>Contact</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>Contact</li></div>
        </Link>
        <a className={styles.listItemContainer} href="/documents/resume.docx.pdf" download="Tyler_Pierson_Resume.pdf">
          <div className={styles.navItemTop}><li className={styles.listItem}>Resume</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>Resume</li></div>
        </a>
      </ul>
    </nav>
  );
}
