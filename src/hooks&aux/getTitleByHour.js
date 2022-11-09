import styles from '../components/Products/products.module.css';

export const getTitleByHour = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 4 && hour < 10) {
        return (
            <h2 className={styles.title}>Breakfast Restaurants Near You</h2>
        );
    }
    if (hour >= 10 && hour < 14) {
        return (
            <h2 className={styles.title}>Lunch Restaurants Near You</h2>
        );
    }
    if (hour >= 14 && hour < 18) {
        return (
            <h2 className={styles.title}>Dessert Restaurants Near You</h2>
        );
    }
    if ((hour >= 18 && hour < 24) || (hour >= 0 && hour < 4)) {
        return (
            <h2 className={styles.title}>Dinner Restaurants Near You</h2>
        );
    }
}