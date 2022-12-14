import styles from "./Floor_threeDb.module.css";
import Link from 'next/link';

const Floor_threeDb = () => {
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
                <Link href="/Dashboard1"><button className={styles.floor1_btn}>Floor 1</button></Link>
                <Link href="/Dashboard2"><button className={styles.floor2_btn}>Floor 2</button></Link>
                <Link href="/Dashboard3"><button className={styles.active}>Floor 3</button></Link>
            </div>
            </div>
            <div className={styles.container1}>
            <div className={styles.conference}>
                <button className={styles.conference_btn}></button>
                <label className={styles.conference_lbl}>CONFERENCE ROOM</label>
            </div>
    
            <div className={styles.room205}>
                <button className={styles.room205_btn}></button>
                <label className={styles.room205_lbl}>Room 205</label>
            </div>

            <div className={styles.room204}>
                <button className={styles.room204_btn}></button>
                <label className={styles.room204_lbl}>Room 204</label>
            </div>
            <div className={styles.room203}>
                <button className={styles.room203_btn}></button>
                <label className={styles.room203_lbl}>Room 203</label>
            </div>
            <div className={styles.room202}>
                <button className={styles.room202_btn}></button>
                <label className={styles.room202_lbl}>Room 202</label>
            </div>
            <div className={styles.room201}>
                <button className={styles.room201_btn}></button>
                <label className={styles.room201_lbl}>Room 201</label>
            </div>

            <div className={styles.room211}>
                <button className={styles.room211_btn}></button>
                <label className={styles.room211_lbl}>Room 211</label>
            </div>
            <div className={styles.room212}>
                <button className={styles.room212_btn}></button>
                <label className={styles.room212_lbl}>Room 212</label>
            </div>
            <div className={styles.room213}>
                <button className={styles.room213_btn}></button>
                <label className={styles.room213_lbl}>Room 213</label>
            </div>
            <div className={styles.room214}>
                <button className={styles.room214_btn}></button>
                <label className={styles.room214_lbl}>Room 214</label>
            </div>
            

            </div>
            <hr className={styles.hr}></hr>

            <Link href="/index"><button className={styles.home}><img src="/images/home_btn.png" height="30"/></button></Link>

        </div>
        </div>
        
    );
};

export default Floor_threeDb;

