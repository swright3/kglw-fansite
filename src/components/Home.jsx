import react, { useState } from 'react'
import styles from './Home.module.css'

function Home({id}) {
    const [doors, setDoors] = useState('closed')

    function toggleDoors() {
        setDoors(prevDoors => prevDoors==='open' ? 'closed' : 'open')
    }

    return ( 
        <div className={styles.Home}>
            <div className={`${styles.leftDoor} ${doors==='open' ? styles.leftDoorOpen : ''}`}></div>
            <div className={`${styles.rightDoor} ${doors==='open' ? styles.rightDoorOpen : ''}`}></div>
            <button onClick={toggleDoors} className={`${styles.openBtn} ${doors==='open' ? styles.gone : ''}`}>Open the door!</button>
            
            <section className={`${styles.fadeIn} ${doors==='open' ? '' : styles.invisible}`} >
                <header className={styles.header}>
                </header>
                <div className={styles.menuContainer}>
                    <div className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Tier List</h2>
                    </div>
                    <div className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Discography</h2>
                    </div>
                    <div className={styles.menuItem}>
                        <h2 className={styles.itemTitle}>Socials</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;