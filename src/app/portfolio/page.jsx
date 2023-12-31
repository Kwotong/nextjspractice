import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function Portfolio () {
    return (
        <div className={styles.container}>
            <h2 className={styles.seltctTitle}>Choose a gallery</h2>
            <div className={styles.items}>
                <Link className={styles.item} href='/portfolio/illustrations'>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link className={styles.item} href='/portfolio/website'>
                    <span className={styles.title}>Website</span>
                </Link>
                <Link className={styles.item} href='/portfolio/applications'>
                    <span className={styles.title}>Applications</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;