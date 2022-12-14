import styles from "./Floor_oneDb.module.css";
import Link from 'next/link';

const Floor_oneDb = () => {
    return (
        <div className={styles.container}>
        <div className={styles.nav}>
        <div className={styles.logo}>
                <img src="/images/jadelogo.png" height="90"/>
            </div>
            <div className={styles.layer}>
            <div className={styles.logo}>
                <button className={styles.vacant_btn}></button>
                <label className={styles.vacant_lbl}>Vacant Room</label>
                <button className={styles.occupied_btn}></button>
                <label className={styles.occupied_lbl}>Occupied Room</label>
                <Link href="/Dashboard1"><button className={styles.active}>Floor 1</button></Link>
                <Link href="/Dashboard2"><button className={styles.floor2_btn}>Floor 2</button></Link>
                <Link href="/Dashboard3"><button className={styles.floor3_btn}>Floor 3</button></Link>
            </div>
            </div>
            <div className={styles.container1}>
            <div className={styles.library}>
                <button className={styles.library_btn}></button>
                <label className={styles.library_lbl}>Audio Visual Room</label>
            </div>

            <div className={styles.room111}>
                <button className={styles.room111_btn}></button>
                <label className={styles.room111_lbl}>Room 005</label>
            </div>
            <div className={styles.room112}>
                <button className={styles.room112_btn}></button>
                <label className={styles.room112_lbl}>Room 006</label>
            </div>
            

            </div>
            <hr className={styles.hr}>
            </hr>

            <Link href="/index"><button className={styles.home}><img src="/images/home_btn.png" height="30"/></button></Link>

        </div>
        </div>
        
    );
};

export default Floor_oneDb;

