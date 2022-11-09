import React from 'react'
import styles from './Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import imgProfile from '../../assets/profile.jpg'
export const Profile = () => {
    const menu = ['History of orders', 'Delivery addresses', 'Payment', 'Support', 'Exit']

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgYellow}>
                <h2 className={styles.txtProfile}>Profile</h2>
                <img className={styles.img} src={imgProfile} alt='profile' />
                <h1 className={styles.userName}>Nathan Drake</h1>
            </div>
            <ul className={styles.ul}>
                {
                    menu.map(e => <li className={styles.items} key={e}><span>{e}</span> <FontAwesomeIcon className={styles.icon} icon={faChevronRight} /></li>)
                }
            </ul>
        </div>
    )
}
