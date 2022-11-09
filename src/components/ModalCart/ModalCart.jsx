import "./modalcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { OutsideAlerter } from "./OutsideAlerter.jsx";
import { Address } from '../address/Address'
import { CartProducts } from './CartProducts';
import { Fee } from './Fee';
import { TotalPrice } from "./TotalPrice";
import { PlaceOrderButton } from "./PlaceOrderButton";
import { CartState } from '../../CartContext/CartContext'



function ModalCart({ isOpenModal, setIsOpenModal, firstRef, openEditAddress, userInfo }) {

  const { state: { cart } } = CartState()

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


          <div className="modalTitle">
            <h1>Your Order</h1>
            <FontAwesomeIcon
              icon={faXmark}
              className="closeButton"
              onClick={closeButton}
            />
          </div>
          <Address setIsOpenModal={setIsOpenModal} openEditAddress={openEditAddress} userInfo={userInfo} />
          <CartProducts />
          <Fee />
          <TotalPrice />
          {cart.length > 0 && <PlaceOrderButton />}
        </OutsideAlerter>
      </div>
    </>
  );
}

export { ModalCart };
