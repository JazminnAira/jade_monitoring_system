import styles from "./Title.module.css";

const Title = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/images/jadelogo.png" height="90"/>
            </div>
            <div className={styles.layer}>
                <div className={styles.title_sub}>
                    <h1 className={styles.title}>JADE PROJECT</h1>
                    <label className={styles.subtitle}>ROOM MONITORING SYSTEM</label>
                    <button className={styles.signup_btn}>Sign Up</button>
                    <button className={styles.login_btn}>Login</button>
                </div>
                <div className={styles.image}>
                    <div className={styles.login}>
                        <h4 className={styles.welcome}>WELCOME BACK!</h4>
                        <input type="text" className={styles.username} placeholder="@email"/> 
                        <input type="text" className={styles.password} placeholder="*********"/>
                    </div>
                    <img src="/images/coverimage.png" height="550" width="650"/>
                    <button className={styles.login_btn1}>Login</button>
                </div>
            </div>
        </div>

    );
};

export default Title;