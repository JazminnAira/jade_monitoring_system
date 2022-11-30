import styles from "./Title.module.css";
import Link from 'next/link';
import React from "react";


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";



const Title = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/images/jadelogo.png" height="90"/>
            </div>
            <div className={styles.layer}>
                <div className={styles.title_sub}>
                    <h1 className={styles.title}>JADE PROJECT</h1>
                    <label className={styles.subtitle}>ROOM MONITORING SYSTEM</label>
                    <button className={styles.signup_btn} onClick={() => setModalOpen(!modalOpen)}>Sign Up</button>
                    <Modal class="modal" className={styles.modal} toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                        <div className="modal-header">
                        <button aria-label="Close" className="close" type="button" onClick={() => setModalOpen(!modalOpen)}>
                            <span aria-hidden={true}>×</span>
                        </button>
                        </div>
                        <ModalBody className={styles.ModalBody}>
                        
                            <h4 className={styles.signuplbl}>Sign Up</h4>
                            <input type="text" className={styles.name} placeholder="Name"/><br></br><br></br>
                            <input type="text" className={styles.department} placeholder="Department"/><br></br><br></br>
                            <input type="text" className={styles.cnum} placeholder="Contact No."/> <br></br><br></br>
                            <input type="text" className={styles.email} placeholder="@email"/><br></br><br></br>
                            <input type="text" className={styles.password1} placeholder="*******"/> <br></br><br></br>
                            <button className={styles.signup_btn1}>Sign Up</button>
                       
                        </ModalBody>
                        <ModalFooter>
                        <Button
                            color="secondary"
                            type="button"
                            onClick={() => setModalOpen(!modalOpen)}
                        >
                            Close
                        </Button>
                        <Button color="primary" type="button">
                            Save changes
                        </Button>
                        </ModalFooter>
                    </Modal>
                    <button className={styles.login_btn}>Login</button>
                </div>
                <div className={styles.image}>
                    <div className={styles.login}>
                        <h4 className={styles.welcome}>WELCOME BACK!</h4>
                        <input type="text" className={styles.username} placeholder="@email"/> 
                        <input type="text" className={styles.password} placeholder="*********"/>
                    </div>
                    <img src="/images/coverimage.png" height="550" width="650"/>
                    <Link href="/Dashboard1"><button className={styles.login_btn1}>Login</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Title;