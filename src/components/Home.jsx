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
            
            <h1 className={doors==='open' ? styles.fadeIn : ''}>king gizzard and the lizard wizard</h1>
        </div>
    );
}

export default Home;