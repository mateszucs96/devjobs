import React from 'react'
import styles from './header.module.scss';
import search from '../assets/desktop/icon-search.svg'
import filter from '../assets/mobile/icon-filter.svg';




const FilterBox = ({ handleSearchFilter, toggleModal }) => {

    return (
        <div className={styles.filterBox}>
            <form className={styles.filter} onSubmit={(e) => handleSearchFilter(e)}>
                <input type='text' placeholder='Filter by title...' />

                <div className={styles.buttonContainer}>
                    <div className={styles.filterButton} onClick={toggleModal}>
                        <img src={filter} alt='filter' />
                    </div>
                    <button className={styles.searchButton}>
                        <img src={search} alt='filter' />
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FilterBox