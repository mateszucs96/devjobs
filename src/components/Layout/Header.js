import { DataContext } from 'helpers/data-context';
import { useContext, useState } from 'react';
import DetailsHeader from '../DetailsHeader';
import Filter from '../Filter';
import Modal from './Modal';

const Header = () => {
  const [modal, setModal] = useState(false);
  const { details } = useContext(DataContext);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return details ? (
    <DetailsHeader />
  ) : (
    <>
      <Filter toggleModal={toggleModal} />
      {modal && <Modal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Header;
