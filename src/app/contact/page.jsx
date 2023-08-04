import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

function Contact () {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Let's keep in touch</h2>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image 
                    src='/contact.png'
                    alt='contact image'
                    fill={true}
                    className={styles.imaga}
                    />
                </div>
                <form className={styles.form} >
                    <input type='text' placeholder='Name' className={styles.input} />
                    <input type='email' placeholder='Email' className={styles.input} />
                    <textarea placeholder='Message...' rows='5' className={styles.textarea} ></textarea>
                    <button url='#' className={styles.button}>send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;