import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

export default function HomePage(){
    return (
        <>
            <NavBar />
            <div className={styles.HomePage}>
                <div className={styles.introContainer}>
                    <h4 className={styles.headingSM}>Design Portfolio</h4>
                    <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span> a<br/>web designer <span className={styles.spanPlus}>+</span><br/><span className={styles.spanText}>developer</span></h1>
                    <p className={styles.paragraph}>Crafting great web design or development involves a harmonious fusion of creativity, functionality, and user experience. It's about more than just aesthetics; it's about creating an immersive digital environment that captivates users while effortlessly guiding them toward their goals.</p>
                    <img className={styles.image} src="https://i.imgur.com/CAtnkHR.png" />
                </div>
                <div className={styles.Bio}>
                    <div className={styles.contentContainer}>
                        <h4 className={styles.headingSM}>Who I am</h4>
                        <h1 className={styles.title}>Software<br/>Engineer</h1>
                    </div>
                    <p className={styles.titleDescription}>My role is as dynamic as the code I craft. I'm not just a coder; I'm an architect, a problem-solver, and an innovator.  </p>
                </div>
                <div className={styles.imgBannerContainer}>
                    <img className={styles.imgBanner} src="https://i.imgur.com/zACT24f.png" />
                </div>
                <div className={styles.serviceContainerMain}>
                    <div className={styles.serviceContainerLeft}>
                        <div className={styles.serviceCard}>
                            <h4 className={styles.serviceTitle}>Design</h4>
                            <p className={styles.serviceDescription}>Design in web development is the art of harmoniously blending aesthetics and functionality to create immersive digital experiences that captivate and engage users.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h4 className={styles.serviceTitle}>Development</h4>
                            <p className={styles.serviceDescription}>The intricate process of architecting and implementing innovative solutions, leveraging cutting-edge technologies to build robust, scalable, and user-centric digital platforms that empower and enrich the online experience.</p>
                        </div>
                        <div className={styles.headingSMContainer}>
                            <p className={styles.headingSM}>I provide comprehensive web development services, crafting tailored solutions that seamlessly integrate design, branding, and marketing strategies to elevate online presence and drive meaningful engagement.</p>
                        </div>
                    </div>
                    <div className={styles.serviceContainerRight}>
                        <h4 className={styles.headingSM}>Creative Solutions</h4>
                        <h2 className={styles.serviceHeader}>Services</h2>
                        <div className={styles.serviceCard}>
                            <h4 className={styles.serviceTitle}>Branding</h4>
                            <p className={styles.serviceDescription}>Branding in web development is the strategic cultivation of a cohesive digital identity, encompassing visual elements, messaging, and user experience, to establish a distinctive and memorable presence that resonates with audiences and fosters trust and loyalty.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h4 className={styles.serviceTitle}>Marketing</h4>
                            <p className={styles.serviceDescription}>Marketing in web development involves leveraging various digital channels and strategies to effectively promote products, services, or ideas, with the aim of reaching and engaging target audiences, driving traffic, and ultimately achieving business objectives, all while delivering compelling and relevant content tailored to user needs and preferences.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.projectBannerContainer}>
                    <h1 className={styles.projectBanner}>My Projects</h1>
                </div>
            </div>
        </>
    )
}