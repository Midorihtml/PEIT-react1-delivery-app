import React from 'react';
import styles from './CartCard.module.css';
import deleteIcon from '../../assets/delete.svg';
import { deleteCartItem } from '../../services'
import { CartState } from '../../CartContext/CartContext'
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const SCREEN_WIDTH = window.innerWidth - 30;

export const CartCard = ({ product, restaurants }) => {

    /* get restaurant name by restaurantId in product */
    const restaurantName = restaurants?.find((res) => res.id === product.restaurantId)?.name

    const { dispatch } = CartState()


    /* A hook that is used to animate the card swipe to delete from cart. */
    const [{ x }, api] = useSpring(() => ({ x: 0 }))

    const bind = useDrag(({ down, movement: [mx], direction, dragging }) => {
        api.start({ x: down ? direction[0] === -1 && mx : 0 })

        if (dragging && direction[0] === -1 && mx < -(SCREEN_WIDTH / 2)) {
            api.start({ x: down ? direction[0] === -1 && mx : -SCREEN_WIDTH })
            deleteCartItem(product.id)
                .then(dispatch({ type: "REMOVE_FROM_CART", payload: product.id }))
        }
    })

    return (
        <>
            <animated.section {...bind()} style={{ x }} className={styles.section}>
                <img className={styles.img} src={product.img} alt={product.name} />
                <div className={styles.contentTitles}>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.restaurantName}>{restaurantName}</p>
                </div>
                <p className={styles.price}>${product.price} x1</p>
                <div className={styles.trash} onClick={() => { deleteCartItem(product.id).then(id => dispatch({ type: "REMOVE_FROM_CART", payload: id })) }}>
                    <img className={styles.delete} src={deleteIcon} alt='delete icon' />
                </div>
            </animated.section>
        </>
    )
}
