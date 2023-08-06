import React from 'react'
import styles from './page.module.css';

function Darkmode() {

    const mode = 'dark';

    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙 </div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={ mode === 'dark' ? {left: '3px'} : {right: '3px'} }/>
        </div>
    )
}

export default Darkmode;