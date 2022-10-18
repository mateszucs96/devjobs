import styles from './filterBox.module.scss';
import search from '../assets/desktop/icon-search.svg';
import filter from '../assets/sprite.svg';
import DetailsHeader from './DetailsHeader';

const FilterBox = ({ handleSearchFilter, toggleModal, details, data }) => {
  return (
    <div className={styles.filterBox}>
      {details ? (
        <DetailsHeader data={data} />
      ) : (
        <form className={styles.filter} onSubmit={(e) => handleSearchFilter(e)}>
          <input type="text" placeholder="Filter by title..." />

          <div className={styles.buttonContainer}>
            <div className={styles.filterButton} onClick={toggleModal}>
              <svg className={styles.iconFilter}>
                <use xlinkHref={`${filter}#icon-filter`}></use>
              </svg>
            </div>
            <button className={styles.searchButton}>
              <img
                className={styles.magnifyingGlass}
                src={search}
                alt="filter"
              />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterBox;
