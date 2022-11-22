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
                    <img src="/images/coverimage.png" height="550" width="650"/>
                </div>
            </div>
        </div>

    );
};

export default Title;