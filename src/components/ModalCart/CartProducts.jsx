import React, { useEffect } from 'react'
import { CartState } from '../../CartContext/CartContext'
import styles from './cartProducts.module.css'
import { getRestaurants } from '../../services/'
import { CartCard } from './CartCard'

export const CartProducts = () => {
    const { state: { cart } } = CartState()
    const [restaurant, setRestaurant] = React.useState(null)

    useEffect(() => {
        getRestaurants().then((res) => {
            setRestaurant(res)
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            {cart.map(product => (
                <CartCard key={product.id} product={product} restaurants={restaurant} />
            ))}
        </div>
    )
}
