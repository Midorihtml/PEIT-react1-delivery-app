import React from 'react'
import { useRating } from '../../hooks&aux/useRating'
import styles from './card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { getRestaurants } from '../../services'
import { LocationContext } from '../../App'
import { getDistance } from '../../hooks&aux/getDistance'

const Card = ({ product }) => {
    const rating = useRating(product.rating)
    const [restaurant, setRestaurant] = React.useState([])

    const coords = React.useContext(LocationContext)

    React.useEffect(() => {
        getRestaurants()
            .then(res => {
                const resFilter = res.filter(e => e.id === product.restaurantId)
                setRestaurant(resFilter)
            })
    }, [product.restaurantId])

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={product.img} alt={product.name} />
            {coords && <div className={styles.distance}><span className={styles.distanceText}>{getDistance(coords, restaurant[0])} km</span></div>}
            {restaurant.length > 0 && <h3 className={styles.title}>{restaurant[0].name}</h3>}
            <ul className={styles.ul}>
                {product.category.map(e => (
                    <li key={e} className={styles.li}>{e}</li>
                ))}
                <li className={styles.price}><FontAwesomeIcon icon={faDollarSign} /> {product.price}</li>
            </ul>
            {rating}
        </div>
    )
}

export default React.memo(Card)

