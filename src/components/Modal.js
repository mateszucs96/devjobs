import '../globals.scss';
import location from '../assets/desktop/icon-location.svg';

const Modal = ({ handleLocationSearch, handleCloseModal }) => {
  const showChecked = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <div className="backdrop" onClick={handleCloseModal}></div>
      <div className="modal">
        <form onSubmit={(e) => handleLocationSearch(e)}>
          <div className="location-filter">
            <img src={location} alt="location-icon"></img>
            <input type="text" placeholder="Filter by location..."></input>
          </div>
          <div className="line"></div>
          <div className="checkbox-container">
            <label className="checkbox" htmlFor="checkbox">
              <input
                onClick={showChecked}
                className="checkbox__input"
                type="checkbox"
                id="checkbox"
              ></input>
              <div className="checkbox__box"></div>
              Full Time Only
            </label>
          </div>
          <button className="applyButton">Search</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
