import React from 'react';
import styles from './header.module.scss';
import logo from '../assets/desktop/logo.svg';
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import Cards from './Cards';
import FilterBox from './FilterBox';
import { useGetData } from '../hooks/useGetData';

const Header = () => {
    const { data, setData } = useGetData();

    const handleSearchFilter = (e) => {
        e.preventDefault();
        const filtered = data.filter(company => (
            company.position.split(' ').includes(e.target[0].value)
        ))
        setData(filtered)
    }


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
            <FilterBox handleSearchFilter={handleSearchFilter} />
            <Cards data={data} />
        </div >

    )
}

export default Header