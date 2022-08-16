import React from 'react'
import styles from './header.module.scss';
import search from '../assets/desktop/icon-search.svg'
import filter from '../assets/mobile/icon-filter.svg';




const FilterBox = ({ data, handleSearchFilter }) => {

    return (
        <div className={styles.filterBox}>
            <form className={styles.filter} onSubmit={(e) => handleSearchFilter(e)}>
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
    )
}

export default FilterBox