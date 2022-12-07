import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion'

function Home({firstLoad, afterFirstLoad}) {
    const [doorsOpen, setDoorsOpen] = useState(false);

    function toggleDoors() {
        setDoorsOpen(prevDoors => !prevDoors);
    }

    return ( 
        <div className={styles.Home}>
            <motion.div 
                className={styles.leftDoor}
                style={{originX: 0}}
                animate={doorsOpen && {rotateY: -90}}
                transition={{duration: 1.5}}
            />
            <motion.div 
                className={styles.rightDoor}
                style={{originX: '100%'}}
                animate={doorsOpen && {rotateY: 90}}
                transition={{duration: 1.5}}
            />
            <button onClick={toggleDoors} className={!doorsOpen ? styles.openBtn : styles.gone}>Open the door!</button>
            
            <section className={`${styles.mainMenu} ${styles.fadeIn} ${doorsOpen ? styles.visible : ''}`} >
                <header className={styles.header}>
                </header>
                <div className={styles.menuContainer}>
                    <Link to='/tierlist' className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Tier List</h2>
                    </Link>
                    <Link to='/discography' className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Discography</h2>
                    </Link>
                    <Link to='/socials' className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Socials</h2>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;