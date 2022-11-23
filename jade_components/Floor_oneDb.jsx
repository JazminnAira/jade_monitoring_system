import styles from "./Floor_oneDb.module.css";

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
<<<<<<< HEAD
                <a href="/Dashboard1"><button className={styles.active}>Floor 1</button></a>
                <a href="/Dashboard2"><button className={styles.floor2_btn}>Floor 2</button></a>
                <a href="/Dashboard3"><button className={styles.floor3_btn}>Floor 3</button></a>
=======
                <button className={styles.floor1_btn}>Floor 1</button>
                <button className={styles.floor2_btn}>Floor 2</button>
                <button className={styles.floor3_btn}>Floor 3</button>
>>>>>>> 9bcc2a09a3351f69b45af385cc65496a04cc7311
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

        </div>
        </div>
        
    );
};

export default Floor_oneDb;

