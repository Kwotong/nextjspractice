import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

function BlogPost({ params }) {
    console.log(params)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Why do we use it?</h1>
                    <p className={styles.shortDesc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <div className={styles.author}>
                        <Image
                            src='https://wallpapercave.com/wp/wp11853313.jpg'
                            alt='author img'
                            width={40}
                            height={40}
                            className={styles.authorImage}
                        />
                        <p className={styles.authorName}>Herman Rackham</p>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image 
                    src='https://wallpapercave.com/uwp/uwp3513700.jpeg'
                    alt='blog img'
                    fill={true}
                    className={styles.blogImage}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.description}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                <br />
                <br />
                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi 
                <br />
                <br />
                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellatOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
                </p>
            </div>
        </div>
    )
}

export default BlogPost;