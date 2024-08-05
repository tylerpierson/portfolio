import styles from './ServiceContainer.module.scss';

function ServiceContainer() {
  return (
    <div className={styles.serviceContainerMain}>
        <h2 className={styles.altServiceHeader}>Experience</h2>
        <div className={styles.serviceContainerLeft}>
            <div className={styles.serviceCard}>
                <h4 className={styles.serviceTitle}>Frontend</h4>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceListItem}>JavaScript</li>
                    <li className={styles.serviceListItem}>HTML/CSS</li>
                    <li className={styles.serviceListItem}>SCSS</li>
                    <li className={styles.serviceListItem}>TypeScript</li>
                    <li className={styles.serviceListItem}>React.js</li>
                    {/* Add more frontend technologies as needed */}
                </ul>
            </div>
            <div className={styles.serviceCard}>
                <h4 className={styles.serviceTitle}>Backend</h4>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceListItem}>Node.js</li>
                    <li className={styles.serviceListItem}>Express.js</li>
                    <li className={styles.serviceListItem}>Django</li>
                    <li className={styles.serviceListItem}>Nuxt.js</li>
                    <li className={styles.serviceListItem}>MongoDB</li>
                    <li className={styles.serviceListItem}>MySQL</li>
                    <li className={styles.serviceListItem}>Supabase</li>
                    <li className={styles.serviceListItem}>Python</li>
                    {/* Add more backend technologies as needed */}
                </ul>
            </div>
            <div className={styles.headingSMContainer}>
                <p className={styles.headingSM}>I provide comprehensive web development services, crafting tailored solutions that seamlessly integrate design, branding, and marketing strategies to elevate online presence and drive meaningful engagement.</p>
            </div>
        </div>
        <div className={styles.serviceContainerRight}>
            <h2 className={styles.serviceHeader}>Experience</h2>
            <div className={styles.serviceCard}>
                <h4 className={styles.serviceTitle}>Deployment Tools</h4>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceListItem}>AWS</li>
                    <li className={styles.serviceListItem}>Cloudfront</li>
                    <li className={styles.serviceListItem}>EC2</li>
                    <li className={styles.serviceListItem}>S3</li>
                    <li className={styles.serviceListItem}>DigitalOcean</li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.serviceCard}>
                <h4 className={styles.serviceTitle}>Collaboration Tools</h4>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceListItem}>Slack</li>
                    <li className={styles.serviceListItem}>Discord</li>
                    <li className={styles.serviceListItem}>JIRA</li>
                    <li className={styles.serviceListItem}>Trello</li>
                    <li className={styles.serviceListItem}>GitHub</li>
                    <li className={styles.serviceListItem}>PUSH Project Management</li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
        <div className={styles.spritesheet}></div>
    </div>
  );
}

export default ServiceContainer;
