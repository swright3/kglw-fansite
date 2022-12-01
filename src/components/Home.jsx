import styles from './Home.module.css'

function Home({id}) {
    return ( 
        <div className={styles.Home}>
            <div className={styles.splash}>
                <div className={`${styles.leftDoor} ${styles.leftDoorOpen}`}></div>
                <div className={`${styles.rightDoor} ${styles.rightDoorOpen}`}></div>
            </div>
        </div>
    );
}

export default Home;