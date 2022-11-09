//import { useRef, useEffect } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//import styles from './addressModal.module.css';
import '../ModalCart/modalcart.css';
import { OutsideAlerter } from "./OutsideAlerter.jsx";
import { AddressForm } from '../addressForm/AddressForm.jsx'

function AddressModal({ isAddressEditOn, setIsAddressEditOn, firstRef, handleInfoSubmit }) {

  const closeButton = () => {
    setIsAddressEditOn(false);
  };

  return (
    <>
      <div
        className={`Overlay ${isAddressEditOn ? "Show" : ""}`}
        onClick={() => setIsAddressEditOn(!isAddressEditOn)}>
      </div>
      <div className={`modalBackground ${isAddressEditOn ? "Open" : ""}`}>
        <OutsideAlerter ref={firstRef} setIsAddressEditOn={setIsAddressEditOn}>
          <FontAwesomeIcon
            icon={faXmark}
            className="closeButton"
            onClick={closeButton}
          />

          <div className='modalTitle'>
            <h1>Change address</h1>
          </div>

          <AddressForm handleInfoSubmit={handleInfoSubmit} />

        </OutsideAlerter>
      </div>
    </>
  );
}

export { AddressModal };