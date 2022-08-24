
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import { useState } from 'react';
import FilterBox from './components/FilterBox';
import Cards from './components/Cards';
import { useGetData } from './hooks/useGetData';

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
    console.log(modal)
  }

  const { data, setData } = useGetData();

  const handleSearchFilter = (e) => {
    e.preventDefault();
    const filtered = data.filter(company => (
      company.position.split(' ').includes(e.target[0].value)
    ))
    setData(filtered)
  }

  const handleLocationSearch = (e) => {
    e.preventDefault();
    if (e.target[1].checked === true) {
      const filteredByLocation = data.filter((
        el => e.target[0].value === el.location && el.contract === 'Full Time'
      ))
      setData(filteredByLocation)
      setModal(false)
    } else {
      const filteredByLocation = data.filter(el => e.target[0].value === el.location)
      setData(filteredByLocation)
      setModal(false)
    }
  }


  return (
    <div className="App">
      <Header />
      <FilterBox handleSearchFilter={handleSearchFilter} toggleModal={toggleModal} />
      {modal && <Modal data={data} handleLocationSearch={handleLocationSearch} />}
      <Cards data={data} />
    </div>
  );
}

export default App;
