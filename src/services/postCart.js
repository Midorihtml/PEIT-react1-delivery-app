export const postCart = async (products) => {
    const url = process.env.REACT_APP_API_URL;
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(products)
    };
    const res = await fetch(`${url}/cart`, post);
    return res;
}