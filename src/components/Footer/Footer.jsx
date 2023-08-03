import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const year = new Date().getFullYear();

function Footer () {
    return (
        <div className={styles.container}>
            <div>{year} lamania. All rights reserved.</div>
            <div className={styles.social}>  
                <Image src='/1.png' width={15} height={15} alt='social image' className={styles.icon}/>
                <Image src='/2.png' width={15} height={15} alt='social image' className={styles.icon}/>
                <Image src='/3.png' width={15} height={15} alt='social image' className={styles.icon}/>
                <Image src='/4.png' width={15} height={15} alt='social image' className={styles.icon}/>
            </div>
        </div>
    )
}

export default Footer;