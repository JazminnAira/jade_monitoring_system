import styles from "./Floor_twoDb.module.css";

const Floor_twoDb = () => {
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
                <a href="/Dashboard1"><button className={styles.floor1_btn}>Floor 1</button></a>
                <a href="/Dashboard2"><button className={styles.active}>Floor 2</button></a>
                <a href="/Dashboard3"><button className={styles.floor3_btn}>Floor 3</button></a>
            </div>
            </div>
            <div className={styles.container1}>
            <div className={styles.library}>
                <button className={styles.library_btn}></button>
                <label className={styles.library_lbl}>LIBRARY</label>
            </div>

            <div className={styles.room104}>
                <button className={styles.room104_btn}></button>
                <label className={styles.room104_lbl}>Room 104</label>
            </div>
            <div className={styles.room103}>
                <button className={styles.room103_btn}></button>
                <label className={styles.room103_lbl}>Room 103</label>
            </div>
            <div className={styles.room102}>
                <button className={styles.room102_btn}></button>
                <label className={styles.room102_lbl}>Room 102</label>
            </div>
            <div className={styles.room101}>
                <button className={styles.room101_btn}></button>
                <label className={styles.room101_lbl}>Room 101</label>
            </div>

            <div className={styles.room109}>
                <button className={styles.room109_btn}></button>
                <label className={styles.room109_lbl}>Room 109</label>
            </div>
            <div className={styles.room110}>
                <button className={styles.room110_btn}></button>
                <label className={styles.room110_lbl}>Room 110</label>
            </div>
            <div className={styles.room111}>
                <button className={styles.room111_btn}></button>
                <label className={styles.room111_lbl}>Room 111</label>
            </div>
            <div className={styles.room112}>
                <button className={styles.room112_btn}></button>
                <label className={styles.room112_lbl}>Room 112</label>
            </div>
            

            </div>
            <hr className={styles.hr}>
            </hr>

        </div>
        </div>
        
    );
};

export default Floor_twoDb;

