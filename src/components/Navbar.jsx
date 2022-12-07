import React from "react";
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import logo from '../assets/logo2.png';

function Navbar() {

    return ( 
        <nav className={styles.Navbar}>
            <img src={logo} alt="KGLW" width='50px' height='25px' className={styles.logo} />
            <div className={styles.navlinkList}>
                <Link to='../' className={styles.navlink}>Home</Link>
                <Link to='./' className={styles.navlink}>Tierlist</Link>
                <Link to='../discography' className={styles.navlink}>Discography</Link>
                <Link to='../socials' className={styles.navlink}>Socials</Link>
            </div>
        </nav>
     );
}

export default Navbar;