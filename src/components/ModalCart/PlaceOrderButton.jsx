import React from 'react'
import styles from './PlaceOrderButton.module.css'
import arrow from '../../assets/flechaRigth.svg'
import { Link } from 'react-router-dom'

export const PlaceOrderButton = () => {


    return (
        <Link to='/success'>
            <button className={styles.button}>Place Order <img className={styles.arrow} src={arrow} alt='rigth arrow' /></button>
        </Link>
    )
}
