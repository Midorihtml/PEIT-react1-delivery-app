import React from 'react'
import { useFee } from '../../hooks&aux/useFee'
import deliveryFee from '../../assets/deliveryFee.svg'
import styles from './Fee.module.css'

export const Fee = () => {
    const fee = useFee()

    return (
        <section className={styles.wrapper}>
            <div className={styles.imgBg}>
                <img src={deliveryFee} alt='delivery' />
            </div>
            <p className={styles.text}>Delivery Fee</p>
            {fee ? <p className={styles.fee}>$ {fee}</p> : <p className={styles.fee}> $ 0</p>}
        </section>
    )
}
