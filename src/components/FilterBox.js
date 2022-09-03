import styles from './filterBox.module.scss';
import search from '../assets/desktop/icon-search.svg';
import filter from '../assets/mobile/icon-filter.svg';
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
              <img src={filter} alt="filter" />
            </div>
            <button className={styles.searchButton}>
              <img src={search} alt="filter" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterBox;
