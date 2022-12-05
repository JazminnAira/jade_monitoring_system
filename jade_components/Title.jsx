import styles from "./Title.module.css";
import Link from 'next/link';
import React, { useState } from "react";


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";



const Title = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const NumericOnly= (e) => { //angka only
    const reg = /^[0-9\b]+$/
    let preval=e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0,(preval.length-1))
}
    
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
                        <div className={styles.header}>
                        <button aria-label="Close" class="close" className={styles.close} type="button" onClick={() => setModalOpen(!modalOpen)}>
                            <span aria-hidden={true}>X</span>
                        </button>
                        </div>
                        <ModalBody className={styles.ModalBody}>
                        
                        <form action="/api/form" method="post">
                            <h4 className={styles.signuplbl}>Sign Up</h4>
                            <input type="text" className={styles.name} placeholder="Name"/><br></br><br></br>
                            <input type="text" className={styles.department} placeholder="Department"/><br></br><br></br>
                            <input type="text" onChange={NumericOnly} className={styles.cnum} placeholder="Contact No."/> <br></br><br></br>
                            <input type="email" className={styles.email} placeholder="@email"/><br></br><br></br>
                            <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."className={styles.password1} placeholder="*********" required /><br></br><br></br>
                            <input type="checkbox"
                            onClick={()=>setShowPassword(!showPassword)}
                            className={styles.showhide_passmodal} for="toggle"/><div className={styles.showhide_passlblmodal}>{showPassword?'hide password':'show password'}</div>
                        </form>
                       
                        </ModalBody>
                        <ModalFooter>
                        <Link href="/Dashboard1"><button className={styles.signup_btn1}  type="submit">Sign Up</button></Link>
                        </ModalFooter>
                    </Modal>
                    <button className={styles.login_btn}>Login</button>
                </div>
                <div className={styles.image}>
                    <div className={styles.login}>
                        <h4 className={styles.welcome}>WELCOME BACK!</h4>
                        <input type="email" className={styles.username} placeholder="@email" required/> 
                        <input type={showPassword?'text':'password'} id="pswrd" name="pswrd" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."className={styles.password} placeholder="*********" required />
                        <input type="checkbox"
                        onClick={()=>setShowPassword(!showPassword)}
                        className={styles.showhide_pass} for="toggle"/><div className={styles.showhide_passlbl}>{showPassword?'hide password':'show password'}</div>
                    </div>
                    <img src="/images/coverimage.png" height="550" width="650"/>
                    <Link href="/Dashboard1"><button className={styles.login_btn1}  type="submit">Login</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Title;