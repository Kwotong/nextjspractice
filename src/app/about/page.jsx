import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

function About () {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                src='https://wallpapercave.com/wp/wp2471975.jpg'
                alt=''
                fill={true}
                className={styles.img}
                />
                <div className={styles.imgText} >
                    <h1 className={styles.imgTitle} >Digital Storyteller</h1>
                    <h2 className={styles.imgDescription} >Hand crafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h2 className={styles.title} >Who Are We?</h2>
                    <p className={styles.description} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        <br />
                        <br />
                        content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                        sometimes by accident, sometimes on purpose (injected humour and the like).
                        <br />
                        <br />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  
                    </p>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title} >What do we do?</h2>
                    <p className={styles.description} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        <br />- Creative Illustrations
                        <br />
                        <br />- Dynamic Websites
                        <br />
                        <br />- Fast and handy Mobile Apps
                    </p>
                    <Button url='/contact' text='Contact Us' />
                </div>
            </div>
        </div>
    )
}

export default About;