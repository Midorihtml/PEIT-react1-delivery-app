export const getCart = async () => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/cart`);
    const cart = await res.json();
    return cart;
}