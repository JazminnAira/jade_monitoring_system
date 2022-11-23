import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.background}> 
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src="./images/roomimage.png" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.title} > <h1>Contact us </h1> 
                </div>
                <div className={styles.title2} >
                    Facebook Page : <br />
                    <b>JADE Project Official</b> 
                    <br /><br />
                    Contact Number : <br />
                    <b>09-XX-XXX-XXX</b> 
                    <br /><br />
                    Location : <br />
                    <b>Dasmariñas, Cavite</b> 
                    <br /><br />
                    Email : <br />
                    <b>jade_emerald@gmail.com</b> 
                    <br /><br />
                    You may visit too : <br />
                    <a className={styles.a} href=""><b>Instagram</b></a> <br />
                    <a className={styles.a} href=""><b>Twitter</b></a> <br />
                    <a className={styles.a} href=""><b>Youtube</b></a> <br />
                    <br /><br />
                </div>
            </div>
        </div>


    );
};

export default Contact;