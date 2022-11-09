import React from 'react'
import { Searchbar, Categories, Products, Skeleton, Header } from './index';
import { getProducts, getRestaurants } from '../services'
import styles from './home.module.css'
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll'
import { filterResults } from '../hooks&aux/filterResults';

export const Home = ({ handleOpenModal }) => {

    const [products, setProducts] = React.useState([])
    const [initialProducts, setInitialProducts] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [loading, setLoading] = React.useState(true)
    const [loadSkeleton, setLoadSkeleton] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([]);

    useInfiniteScroll(page, setPage, initialProducts, products, setProducts, setLoadSkeleton)

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
            <Header onClick={handleOpenModal} />
            <Searchbar onSearchSubmit={input => onSearchSubmit(input)}
                clearResults={clearResults} />
            <Categories setInitialProducts={setInitialProducts} setProducts={setProducts} setLoading={setLoading} />
            {loading ? <> <Skeleton /> <Skeleton /> </> : <Products id='productList' arrayProduct={products} search={restaurants} />}
            {loadSkeleton && <><Skeleton /></>}
        </div>
    )
}
