import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion'

function Home({doorsOpen, toggleDoors}) {

    const Motionlink = motion(Link)
    const motionlinkStyles = {
        color: '#1a2a1d',
        borderInlineWidth: '2rem',
        backgroundColor: '#51b84d'
    }

    return ( 
        <div className={styles.Home}>
            <motion.div 
                className={styles.leftDoor}
                style={{originX: 0}}
                initial={doorsOpen && {rotateY: -90}}
                animate={doorsOpen && {rotateY: -90}}
                transition={{duration: 1.5}}
            />
            <motion.div 
                className={styles.rightDoor}
                style={{originX: '100%'}}
                initial={doorsOpen && {rotateY: 90}}
                animate={doorsOpen && {rotateY: 90}}
                transition={{duration: 1.5}}
            />
            <button onClick={toggleDoors} className={!doorsOpen ? styles.openBtn : styles.gone}>Open the door!</button>
            
            <motion.section 
                className={styles.mainMenu}
                initial={{opacity: 0}}
                animate={doorsOpen ? {opacity: 1} : {opacity: 0}}
                transition={{duration: 1.5}}
            >
                <header className={styles.header}>
                </header>
                <div className={styles.menuContainer}>
                    <Motionlink
                        to='/tierlist' 
                        className={styles.menuItem}
                        whileHover={motionlinkStyles}
                        whileFocus={motionlinkStyles}
                        transition={{duration: 0.3}}
                    >
                        <h2 className={styles.itemTitle}>Tier List</h2>
                    </Motionlink>
                    <Motionlink
                        to='/discography' 
                        className={styles.menuItem}
                        whileHover={motionlinkStyles}
                        whileFocus={motionlinkStyles}
                        transition={{duration: 0.3}}
                    >
                        <h2 className={styles.itemTitle}>Discography</h2>
                    </Motionlink>
                    <Motionlink 
                        to='/socials' 
                        className={styles.menuItem}
                        whileHover={motionlinkStyles}
                        whileFocus={motionlinkStyles}
                        transition={{duration: 0.3}}
                    >
                        <h2 className={styles.itemTitle}>Socials</h2>
                    </Motionlink>
                </div>
            </motion.section>
        </div>
    );
}

export default Home;