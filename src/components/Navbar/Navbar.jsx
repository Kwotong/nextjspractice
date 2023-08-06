import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Darkmode from '@/components/Darkmode/Darkmode';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
]

function Navbar() {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href='/'>lanamia</Link>
            <div className={styles.links}>
                <Darkmode />
                {links.map((item, index) => {
                    return (<Link key={links.id} href={item.url} className={styles.link}>
                        {item.title}
                    </Link>)
                })}
                <button className={styles.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;