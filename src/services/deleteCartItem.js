export const deleteCartItem = async (productId) => {
    const url = process.env.REACT_APP_API_URL;
    await fetch(`${url}/cart/${productId}`, { method: 'DELETE' });
    return productId;
}