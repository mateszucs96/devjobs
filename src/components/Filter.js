import styles from './filter.module.scss';
import search from '../assets/desktop/icon-search.svg';
import filter from '../assets/sprite.svg';
import location from '../assets/desktop/icon-location.svg';

const FilterBox = ({
  handleSearchFilter,
  toggleModal,
  handleLocationSearch,
}) => {
  const showChecked = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className={styles.filterBox}>
      <form
        className={styles.filter}
        id="form"
        onSubmit={(e) => {
          handleSearchFilter(e);
          handleLocationSearch(e);
        }}
      >
        <div className={styles.filter__title}>
          <svg className={styles.iconSearch}>
            <use xlinkHref={`${filter}#icon-search`}></use>
          </svg>
          <input
            className={styles.input}
            onSubmit={handleLocationSearch}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className={styles.filter__location}>
          <img src={location} />
          <input type="text" placeholder="Filter by location..." />
        </div>
        <div className={styles.filter__search}>
          <label className={`${styles.checkbox} checkbox`} htmlFor="checkbox">
            <input
              onClick={showChecked}
              className="checkbox__input"
              type="checkbox"
              id="checkbox"
            ></input>
            <div className="checkbox__box"></div>
            Full Time
          </label>

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
          <button type="submit" className={styles.mediaSearchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
