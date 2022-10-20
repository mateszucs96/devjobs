import './App.css';
import HeaderBackground from './components/HeaderBackground';
import Modal from './components/Modal';
import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import { useGetData } from './hooks/useGetData';
import Details from 'components/Details';

function App() {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState(false);
  const [detailsData, setDetailsData] = useState([]);
  const { data, setData } = useGetData();
  const [theme, setTheme] = useState('light');

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const toggleTheme = (e) => {
    const toggleBox = e.target.closest('.toggle');
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    console.log(theme);
    toggleBox.style.justifyContent === 'flex-end'
      ? (toggleBox.style.justifyContent = 'flex-start')
      : (toggleBox.style.justifyContent = 'flex-end');
  };

  const handleSearchFilter = (e) => {
    e.preventDefault();
    const filtered = data.filter((company) =>
      company.position.split(' ').includes(e.target[0].value)
    );
    setData(filtered);
  };

  const handleLocationSearch = (e) => {
    e.preventDefault();
    console.log(e.target[1].checked);
    if (e.target[1].checked === true) {
      const filteredByLocation = data.filter(
        (el) => e.target[0].value === el.location && el.contract === 'Full Time'
      );
      setData(filteredByLocation);
      setModal(false);
    } else {
      const filteredByLocation = data.filter(
        (el) => e.target[0].value === el.location
      );
      setData(filteredByLocation);
      setModal(false);
    }
  };

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
        handleSearchFilter={handleSearchFilter}
        toggleModal={toggleModal}
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
