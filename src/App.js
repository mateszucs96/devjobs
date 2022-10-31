import './App.css';
import HeaderBackground from './components/HeaderBackground';
import Modal from './components/Modal';
import Header from './components/Header';
import Cards from './components/Cards';
import Details from 'components/Details';
import { useState } from 'react';
import { useGetData } from './hooks/useGetData';
import { useGetInput } from 'hooks/useGetInput';

function App() {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState(false);
  const [detailsData, setDetailsData] = useState([]);
  const { data, setData } = useGetData();
  const [theme, setTheme] = useState('light');
  const [values, onChange, onChangeCheckBox] = useGetInput();

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let filterArray = [...data];

    if (values.title) {
      filterArray = filterArray.filter((company) =>
        company.position.split(' ').includes(values.title)
      );
    }

    if (values.location) {
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

    setData(filterArray);
  };

  const toggleTheme = (e) => {
    const toggleBox = e.target.closest('.toggle');
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    console.log(theme);
    toggleBox.style.justifyContent === 'flex-end'
      ? (toggleBox.style.justifyContent = 'flex-start')
      : (toggleBox.style.justifyContent = 'flex-end');
  };

  // const handleSearchFilter = (e) => {
  //   e.preventDefault();
  //   console.log(values.title);
  //   const filtered = data.filter((company) =>
  //     company.position.split(' ').includes(values.title)
  //   );

  //   setData(filtered);
  //   handleLocationSearch(e);
  //   handleIsFullTime(e);
  //   console.log(data);
  // };

  const handleLocationSearch = (e) => {
    e.preventDefault();
    console.log(values.location);
    if (values.isFullTime === true) {
      const filteredByLocation = data.filter(
        (el) => values.location === el.location && el.contract === 'Full Time'
      );
      setData(filteredByLocation);
      setModal(false);
    } else {
      const filteredByLocation = data.filter(
        (el) => values.location === el.location
      );
      setData(filteredByLocation);
      setModal(false);
    }
  };

  // const handleIsFullTime = (e) => {
  //   e.preventDefault();
  //   if (values.isFullTime === true) {
  //     const filteredByFullTime = data.filter(
  //       (el) => el.contract === 'Full Time'
  //     );
  //     console.log(filteredByFullTime);
  //   }
  // };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleDetailsPage = (e) => {
    const position = e.target.closest('.cardC').children[2].textContent.trim();
    const target = data.filter((element) => element.position === position);
    setDetailsData(target);
    setDetails(!details);
  };

  return (
    <div className="App" data-theme={theme}>
      <HeaderBackground setTheme={toggleTheme} />

      <Header
        details={details}
        data={detailsData}
        handleLocationSearch={handleLocationSearch}
        handleSearchFilter={handleOnSubmit}
        toggleModal={toggleModal}
        onChange={onChange}
        onChangeCheckBox={onChangeCheckBox}
      />

      {modal && (
        <Modal
          data={data}
          handleLocationSearch={handleLocationSearch}
          handleCloseModal={handleCloseModal}
        />
      )}

      {details ? (
        <Details data={detailsData} />
      ) : (
        <Cards data={data} handleDetailsPage={handleDetailsPage} />
      )}
      <button>Load more</button>
    </div>
  );
}

export default App;
