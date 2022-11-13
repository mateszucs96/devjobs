// import { DataContext } from 'helpers/data-context';
// import { useContext, useState } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailsHeader from '../DetailsHeader';
import Filter from '../Filter';
// import Modal from './Modal';

const Header = () => {
  const [modal, setModal] = useState(false);
  // const { details } = useContext(DataContext);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  // const handleCloseModal = () => {
  //   setModal(false);
  // };

  return (
    <>
      <Routes>
        <Route path="/details/:id" element={<DetailsHeader />} />
        <Route path="/" element={<Filter toggleModal={toggleModal} />} />
      </Routes>
    </>
  );
};

export default Header;
