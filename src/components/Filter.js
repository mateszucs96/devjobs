import styles from './filter.module.scss';
import search from '../assets/desktop/icon-search.svg';
import filter from '../assets/sprite.svg';
import location from '../assets/desktop/icon-location.svg';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from 'helpers/data-context';

const FilterBox = ({ toggleModal }) => {
  const { data, setData } = useContext(DataContext);
  const showChecked = (e) => {
    console.log(e.target.checked);
  };

  const [values, setValues] = useState({
    isFullTime: false,
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeCheckBox = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  let filterArray = [...data];
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (values.title) {
      filterArray = filterArray.filter((company) =>
        company.position.split(' ').includes(values.title)
      );
    }

    if (values.location) {
      console.log(values.location);
      filterArray = filterArray.filter(
        (company) => values.location === company.location
      );
    }

    if (values.isFullTime) {
      filterArray = filterArray.filter(
        (company) => company.contract === 'Full Time'
      );
    } else {
      filterArray = filterArray.filter(
        (company) => company.contract === 'Part Time'
      );
    }
    console.log(filterArray);
    setData(filterArray);
  };

  return (
    <div className={styles.filterBox}>
      <form className={styles.filter} id="form" onSubmit={handleOnSubmit}>
        <div className={styles.filter__title}>
          <svg className={styles.iconSearch}>
            <use xlinkHref={`${filter}#icon-search`}></use>
          </svg>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Filter by title..."
            onChange={onChange}
          />
        </div>
        <div className={styles.filter__location}>
          <img src={location} />
          <input
            type="text"
            name="location"
            placeholder="Filter by location..."
            onChange={onChange}
          />
        </div>
        <div className={styles.filter__search}>
          <label className={`${styles.checkbox} checkbox`} htmlFor="checkbox">
            <input
              onClick={showChecked}
              className="checkbox__input"
              type="checkbox"
              id="checkbox"
              name="isFullTime"
              onChange={onChangeCheckBox}
            ></input>
            <div className="checkbox__box"></div>
            Full Time Only
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
          <button
            type="submit"
            className={`applyButton ${styles.mediaSearchButton}`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
