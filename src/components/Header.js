import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from '../assets/desktop/logo.svg';
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import Cards from './Cards';
import FilterBox from './FilterBox';
import { useGetData } from '../hooks/useGetData';

const Header = () => {
    const { data, setData, reset } = useGetData();
    const [data1, setData1] = useState([]);

    const handleSearchFilter = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target[0].value)
        reset()
        data.forEach(el => console.log(el.position.split(' ')))
        const filtered = data.filter(company => (
            company.position.split(' ').includes(e.target[0].value)
        ))
        setData1(filtered)
        console.log(data1)
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
            <FilterBox data={data1} handleSearchFilter={handleSearchFilter} />
            <Cards data={data1} />
        </div >

    )
}

export default Header