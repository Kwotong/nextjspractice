import React from 'react';
import styles from './page.module.css';
import Image from 'next/image'
import Link from 'next/link';

function Blog () {
    return (
        <div className={styles.container}>
            <Link className={styles.content} href='blog/post-1'>
                <div className={styles.imgContainer}>
                    <Image 
                    src='https://wallpapercave.com/uwp/uwp3659603.jpeg'
                    alt='blog img'
                    fill={true}
                    className={styles.image}
                    />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </Link>
            <Link className={styles.content} href='blog/post-2'>
                <div className={styles.imgContainer}>
                    <Image 
                    src='https://wallpapercave.com/uwp/uwp3664559.jpeg'
                    alt='blog img'
                    fill={true}
                    className={styles.image}
                    />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </Link>
            <Link className={styles.content} href='blog/post-3'>
                <div className={styles.imgContainer}>
                    <Image 
                    src='https://wallpapercave.com/uwp/uwp3544545.jpeg'
                    alt='blog img'
                    fill={true}
                    className={styles.image}
                    />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </Link>
            <Link className={styles.content} href='blog/post-4'>
                <div className={styles.imgContainer}>
                    <Image 
                    src='https://wallpapercave.com/uwp/uwp3521429.webp'
                    alt='blog img'
                    fill={true}
                    className={styles.image}
                    />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog;