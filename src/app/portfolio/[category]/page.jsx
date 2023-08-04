import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';

function Category ({params}) {
    return (
        <div>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Button text='Read More' url='#' />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.image}
                    src='https://wallpapercave.com/uwp/uwp3589629.webp'
                    alt='img'
                    fill={true}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Button text='Read More' url='#' />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.image}
                    src='https://wallpapercave.com/uwp/uwp3589629.webp'
                    alt='img'
                    fill={true}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>What is Lorem Ipsum?</h1>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Button text='Read More' url='#' />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.image}
                    src='https://wallpapercave.com/uwp/uwp3589629.webp'
                    alt='img'
                    fill={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category;