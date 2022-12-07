import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Helmet from 'react-helmet';

function Home({firstLoad, afterFirstLoad}) {
    const [doors, setDoors] = useState('closed');

    function toggleDoors() {
        setDoors(prevDoors => prevDoors==='open' ? 'closed' : 'open');
    }

    const menuStyles = `${styles.mainMenu} ${styles.fadeIn} ${doors==='open' ? '' : styles.invisible}`

    return ( 
        <div className={styles.Home}>
            {}
            <div className={`${styles.leftDoor} ${doors==='open' ? styles.leftDoorOpen : ''}`}></div>
            <div className={`${styles.rightDoor} ${doors==='open' ? styles.rightDoorOpen : ''}`}></div>
            <button onClick={toggleDoors} className={`${styles.openBtn} ${doors==='open' ? styles.gone : ''}`}>Open the door!</button>
            
            <section className={`${styles.mainMenu} ${styles.fadeIn} ${doors==='open' ? styles.visible : ''}`} >
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