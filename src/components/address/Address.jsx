import React from 'react';
import { useState } from 'react';
import styles from './address.module.css';
import { AddressModal } from '../addressModal/AddressModal.jsx';

const Address = (props) => {
    const [address, setAddress] = useState("Your address");
    const [deliveryTime, setDeliveryTime] = useState("13:30");

    return (
        <div>
            <ul className={styles.addressBox}>
                <li>{props.userInfo}</li>
                <li><button onClick={props.openEditAddress}>Edit Address</button></li>
                <li>{"30 mins"}</li>
                <li><button>Choose time</button></li>
            </ul>
        </div>
    );
};

export { Address };