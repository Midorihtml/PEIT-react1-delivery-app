import "./modalcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { OutsideAlerter } from "./OutsideAlerter.jsx";
import { Address } from '../address/Address'
import { CartProducts } from './CartProducts';
import { Fee } from './Fee';
import { TotalPrice } from "./TotalPrice";
import { PlaceOrderButton } from "./PlaceOrderButton";



function ModalCart({ isOpenModal, setIsOpenModal, firstRef, openEditAddress, userInfo }) {


  const closeButton = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className={`Overlay ${isOpenModal ? "Show" : ""}`}
        onClick={() => setIsOpenModal(!isOpenModal)}>

      </div>
      <div className={`modalBackground ${isOpenModal ? "Open" : ""}`}>
        <OutsideAlerter ref={firstRef} setIsOpenModal={setIsOpenModal}>
          <FontAwesomeIcon
            icon={faXmark}
            className="closeButton"
            onClick={closeButton}
          />

          <div className="modalTitle">
            <h1>Your Order</h1>
          </div>
          <Address setIsOpenModal={setIsOpenModal} openEditAddress={openEditAddress} userInfo={userInfo} />
          <CartProducts />
          <Fee />
          <TotalPrice />
          <PlaceOrderButton />
        </OutsideAlerter>
      </div>
    </>
  );
}

export default ModalCart;
