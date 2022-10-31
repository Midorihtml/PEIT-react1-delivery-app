import React from 'react'
import { Searchbar, Categories, Products, Skeleton } from './index';
import { getProducts, getRestaurants } from '../services'
import styles from './home.module.css'
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll'
import { filterResults } from '../hooks&aux/filterResults';

export const Home = () => {

    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [loadSkeleton, setLoadSkeleton] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([]);

    useInfiniteScroll(getProducts, products, setProducts, setLoadSkeleton)

    /*get all products & setting the products in state*/
    React.useEffect(() => {
        restaurants.length === 0 &&
            getProducts()
                .then(res => {
                    setProducts(res)
                    setLoading(false)
                })
    }, [restaurants]);

    /* Updates 'restaurants' state with results that include the user's input
    @param input: searchbar input value */
    const onSearchSubmit = async input => {
        getRestaurants()
            .then(res => filterResults(res, input))
            .then(results => {
                setRestaurants(results);
            });
    };

    React.useEffect(() => {
        setLoading(true);
        restaurants.length > 0 &&
            getProducts(null, 'completeList')
                .then(products => products.filter(product => product.restaurantId === restaurants[0]?.id))
                .then(arrayProduct => setProducts(arrayProduct));
        setLoading(false)
    }, [restaurants])

    const clearResults = () => {
        setRestaurants([]);
    };

    return (

        <div className={styles.wrapper}>
            <Searchbar onSearchSubmit={input => onSearchSubmit(input)}
                clearResults={clearResults} />
            <Categories products={products} setProducts={setProducts} setLoading={setLoading} />
            {loading ? <> <Skeleton /> <Skeleton /> </> : <Products id='productList' arrayProduct={products} search={restaurants} />}
            {loadSkeleton && <><Skeleton /></>}

        </div>
    )
}
