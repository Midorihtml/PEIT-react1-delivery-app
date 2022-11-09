import React from 'react'
import styles from './IntroLogo.module.css'

export const IntroLogo = () => {
    return (
        <div className={styles.wrapper}>

            <h1 className={styles.pick}>Pick</h1>
            <span className={styles.line}>-</span>
            <h1 className={styles.eat} >eat</h1>
            <h2 className={styles.slogan}>like at home</h2>
        </div>
    )
}
