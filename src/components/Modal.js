import '../globals.scss';
import location from '../assets/desktop/icon-location.svg';

const Modal = ({ handleLocationSearch, handleCloseModal }) => {
  return (
    <>
      <div className="backdrop" onClick={handleCloseModal}></div>
      <div className="modal">
        <form onSubmit={(e) => handleLocationSearch(e)}>
          <div>
            <img src={location} alt="location-icon"></img>
            <input type="text" placeholder="Filter by location..."></input>
          </div>
          <div className="line"></div>
          <div>
            <input type="checkbox"></input>
            <label htmlFor="vehicle1"> Full Time Only</label>
          </div>
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
