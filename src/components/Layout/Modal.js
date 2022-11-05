import '../../globals.scss';
import location from '../../assets/desktop/icon-location.svg';

const Modal = ({
  handleOnSubmit,
  handleCloseModal,
  onChange,
  onChangeCheckBox,
}) => {
  const showChecked = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <div className="backdrop" onClick={handleCloseModal}></div>
      <div className="modal">
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="location-filter">
            <img src={location} alt="location-icon"></img>
            <input
              type="text"
              name="location"
              placeholder="Filter by location..."
              onChange={(e) => {
                onChange(e);
              }}
            ></input>
          </div>
          <div className="line"></div>
          <div className="checkbox-container">
            <label className="checkbox" htmlFor="checkbox-modal">
              <input
                onClick={showChecked}
                className="checkbox__input"
                type="checkbox"
                name="isFullTime"
                id="checkbox-modal"
                onChange={onChangeCheckBox}
              ></input>
              <div className="checkbox__box"></div>
              Full Time
            </label>
          </div>
          <button type="submit" className="applyButton">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
