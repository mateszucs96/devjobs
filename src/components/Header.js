import React from 'react';
import styles from './header.module.scss';
import logo from '../assets/desktop/logo.svg';
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                < div className={styles.container} >
                    <img src={logo} alt='logo' className='logo' />
                    <div className={styles.toggleBox}>
                        <img src={sun} alt='logo' className='sun' />
                        <div className={styles.toggle}>
                            <div className='circle'></div>
                        </div>
                        <img src={moon} alt='logo' className='moon' />
                    </div>


                </div >

            </header >
            <div className={styles.filterBox}>
                <input type='text' placeholder='Filter by title...' />
            </div>
        </div>
    )
}

export default Header