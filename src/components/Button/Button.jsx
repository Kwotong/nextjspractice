import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function Button ({url, text}) {
    return (
        <Link href={url} >
            <button className={styles.button}>{text}</button>
        </Link>
    )
}

export default Button;