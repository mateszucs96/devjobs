
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


  return (
    <div className="App">
      <Header />
      <FilterBox handleSearchFilter={handleSearchFilter} toggleModal={toggleModal} />
      {modal && <Modal />}
      <Cards data={data} />
    </div>
  );
}

export default App;
