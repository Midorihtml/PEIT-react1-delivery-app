import React from 'react'
import { CartState } from '../../CartContext/CartContext'
import { useFee } from '../../hooks&aux/useFee';
import styles from './TotalPrice.module.css'

export const TotalPrice = () => {
    const { state: { cart } } = CartState();
    const fee = useFee()
    const initialValue = 0;
    const totalPrice = cart.reduce((prev, current) => prev + current.price, initialValue) + fee;
    return (
        <span className={styles.totalPrice}>Total: $ {totalPrice ? totalPrice : ' 0'}</span>
    )
}
