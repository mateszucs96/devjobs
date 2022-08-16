import React from 'react';
import styles from './header.module.scss';
import logo from '../assets/desktop/logo.svg';
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import search from '../assets/desktop/icon-search.svg'
import filter from '../assets/mobile/icon-filter.svg';
import Cards from './Cards';

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
                <form className={styles.filter}>
                    <input type='text' placeholder='Filter by title...' />

                    <div className={styles.buttonContainer}>
                        <button className={styles.filterButton} >
                            <img src={filter} alt='filter' />
                        </button>
                        <button className={styles.searchButton}>
                            <img src={search} alt='filter' />
                        </button>
                    </div>

                </form>
            </div>
            <Cards />
        </div>

    )
}

export default Header