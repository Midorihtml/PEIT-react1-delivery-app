export const getRestaurants = async () => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/restaurants`);
    const restaurants = await res.json();
    return restaurants;
}

export const getRestaurantId = async (id) => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/restaurants/${id}`);
    const restaurant = await res.json();
    return restaurant;
}
