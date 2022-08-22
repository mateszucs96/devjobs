import React from 'react';
import '../globals.scss';
import location from '../assets/desktop/icon-location.svg';

const Modal = () => {
    return (
        <div className='modal'>
            <form>
                <div>
                    <img src={location} alt='location-icon'></img>
                    <input type='text' placeholder='Filter by location...'></input>

                </div>
                <div>

                    <input type="checkbox" ></input>
                    <label htmlFor="vehicle1"> Full Time Only</label>
                </div>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Modal