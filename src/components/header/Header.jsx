import React, { useEffect } from 'react'
import { getCart, getRestaurants } from '../../services'
import cartLogo from '../../assets/cart.svg'
import styles from './header.module.css'
import { CartState } from '../../CartContext/CartContext'

export const Header = ({ onClick }) => {
    const [restaurants, setRestaurants] = React.useState([])
    const { state: { cart }, dispatch } = CartState()

    /*It is used to get the cart from the server and
    dispatch it to the cart context. */
    useEffect(() => {
        getCart()
            .then(res => dispatch({ type: "GET_CART", payload: res }))
    }, [dispatch])

    /* Used to get the restaurants from the server and set it to the state. */
    useEffect(() => {
        getRestaurants().then((res) => {
            setRestaurants(res)
        })
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>What do you<br />have a taste for?</h1>

                <div className={styles.cartWrapper} onClick={onClick}>
                    <img src={cartLogo} alt="cart logo" />
                    {cart.length > 0 && <span className={styles.cartItems}>{cart.length}</span>}
                </div>
            </div>
            {
                restaurants.length > 0 && <p className={styles.restaurantsAvaible}>{restaurants.length} Restaurants available</p>
            }
        </>
    )
}
