import React from 'react';
import styles from "./About.module.css";


const About = () => {
    return (
        <div className={styles.background}>
             <div className={styles.layer}>
            <div className={styles.container}>
            
                <div>
                    <p className={styles.title}>ABOUT THE SYSTEM</p>
                </div>
               
                <div>
                    <p className={styles.content}>The room monitoring system is a newly established website to assist users on monitoring occupied and vacant rooms 
                    in the U-Building of TUP Cavite.
                    </p>
                    <p className={styles.content}>
                    Our goal is to minimize the workload of the worker that will check the rooms manually.
                    </p>
                    <p className={styles.content}>
                    Keep exploring our website and try it yourself!</p>
                </div>
                
            </div>
            
            <div className={styles.container2}>
                    <div className={styles.signup}>
                        <h4 className={styles.signuplbl}>Sign Up</h4>
                        <input type="text" className={styles.name} placeholder="Name"/> 
                        <input type="text" className={styles.department} placeholder="Department"/>
                        <input type="text" className={styles.cnum} placeholder="Contact No."/> 
                        <input type="text" className={styles.email} placeholder="@email"/>
                        <input type="text" className={styles.password} placeholder="*******"/> 
                        <button className={styles.signup_btn}>Sign Up</button>
                    </div>
                    
                </div>
            
        </div>
        
        </div>
        
        
        

    );
};

export default About;