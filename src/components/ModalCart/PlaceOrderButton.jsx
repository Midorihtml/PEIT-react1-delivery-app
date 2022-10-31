import React from 'react'
import styles from './PlaceOrderButton.module.css'
import arrow from '../../assets/flechaRigth.svg'

export const PlaceOrderButton = () => {
    return (
        <button className={styles.button}>Place Order <img className={styles.arrow} src={arrow} alt='rigth arrow' /></button>
    )
}
