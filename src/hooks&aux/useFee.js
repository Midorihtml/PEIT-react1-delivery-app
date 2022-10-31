import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../App";
import { CartState } from "../CartContext/CartContext";
import { getRestaurants } from "../services";
import { getDistance } from "./getDistance"

export const useFee = () => {
    const { state: { cart } } = CartState()
    const [restaurants, setRestaurants] = useState([])
    const coords = useContext(LocationContext)
    const fee = 5;
    // get all restaurants
    useEffect(() => {
        getRestaurants().then(res => setRestaurants(res))
    }, [])

    // find restaurant in cart
    const getRestaurantsInCart = (cart) => {
        let restaurant = [];
        cart.forEach(({ restaurantId }) => {
            restaurant = [...restaurant, restaurants.find(({ id }) => id === restaurantId)]
        });
        return restaurant;
    }
    // get distance between user and restaurants
    const getDistanceFromRestaurants = (restaurantsInCart) => {
        let distance = [];
        restaurantsInCart.forEach(({ lat, lon }) => {
            distance = [...distance, getDistance({ lat, lon }, coords)]
        })
        return distance.sort((a, b) => a - b)
    }
    // get fee
    const getFee = (distance) => {
        return distance / 10 * fee
    }
    if (cart && restaurants.length > 0) {
        const restaurantsInCart = getRestaurantsInCart(cart)
        const distance = getDistanceFromRestaurants(restaurantsInCart)
        const deliveryFee = getFee(distance[distance.length - 1])
        return deliveryFee
    }
}