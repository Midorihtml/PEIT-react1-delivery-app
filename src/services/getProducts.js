let initialPage = 1;

const nextPage = async (res) => {
    const headers = res.headers.get('link');
    let next = headers.split(',')[1].split(';')[0].slice(2, -1);
    let last = headers.split(',')[2].split(';')[0].slice(2, -1);
    if (initialPage > 1) {
        next = headers.split(',')[2].split(';')[0].slice(2, -1);
        last = headers.split(',')[3]?.split(';')[0].slice(2, -1);
    }

    if (next <= last) {
        const nextFetch = await fetch(next);
        const nextPage = await nextFetch.json();
        initialPage++;
        return nextPage;
    }
}

export const getProducts = async (next, completeList) => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/products?_page=${initialPage}&_limit=3`);
    if (!next && !completeList) {
        const products = await res.json();
        return products;
    }
    if (completeList && !next) {
        const res = await fetch(`${url}/products`);
        const products = await res.json();
        return products;
    }
    return nextPage(res);
}

export const getProductCategory = async (category) => {
    const url = process.env.REACT_APP_API_URL;
    const res = await fetch(`${url}/products?q=${category}`);
    const products = await res.json();
    return products;
}
