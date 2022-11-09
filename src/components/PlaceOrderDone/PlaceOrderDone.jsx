import React from 'react'
import delivery from '../../assets/delivery.png'
import styles from './PlaceOrderDone.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const PlaceOrderDone = () => {

    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.link}>
                <FontAwesomeIcon className={styles.close} icon={faXmark} />
            </Link>
            <img className={styles.img} src={delivery} alt='delivery' />
            <p className={styles.text}>Order Completed Succesfully</p>
            <p className={styles.text}>Thank you and see you later</p>
        </div>
    )
}
