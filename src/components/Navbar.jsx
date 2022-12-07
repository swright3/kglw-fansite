import React from "react";
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import logo from '../assets/logo2.png';
import { motion } from 'framer-motion'

function Navbar() {

    const Motionlink = motion(Link);

    return ( 
        <nav className={styles.Navbar}>
            <img src={logo} alt="KGLW" width='50px' height='25px' className={styles.logo} />
            <div className={styles.navlinkList}>
                <Motionlink 
                    to='../' 
                    className={styles.navlink}
                    whileHover={{borderBottomWidth: '3px'}}
                    whileFocus={{borderBottomWidth: '3px'}}
                    transition={{duration: 0.03, ease: 'linear'}}
                >Home</Motionlink>
                <Motionlink 
                    to='./' 
                    className={styles.navlink}
                    whileHover={{borderBottomWidth: '3px'}}
                    whileFocus={{borderBottomWidth: '3px'}}
                    transition={{duration: 0.03, ease: 'linear'}}
                >Tierlist</Motionlink>
                <Motionlink 
                    to='../discography' 
                    className={styles.navlink}
                    whileHover={{borderBottomWidth: '3px'}}
                    whileFocus={{borderBottomWidth: '3px'}}
                    transition={{duration: 0.03, ease: 'linear'}}
                >Discography</Motionlink>
                <Motionlink 
                    to='../socials' 
                    className={styles.navlink}
                    whileHover={{borderBottomWidth: '3px'}}
                    whileFocus={{borderBottomWidth: '3px'}}
                    transition={{duration: 0.03, ease: 'linear'}}
                >Socials</Motionlink>
            </div>
        </nav>
     );
}

export default Navbar;