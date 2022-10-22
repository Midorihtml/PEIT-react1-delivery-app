// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../components/Card/card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinHearts, faFaceSmile, faFaceMeh, faFaceFrown } from '@fortawesome/free-regular-svg-icons';
export const useRating = (rating) => {

    if (rating >= 1 && rating < 30) {
        return (
            <div className={styles.ratingWrapper}>
                <FontAwesomeIcon className={styles.smile} icon={faFaceFrown} />
                <p className={styles.smile}>{rating} %</p>

            </div>
        )
    }
    if (rating >= 30 && rating < 50) {
        return (
            <div className={styles.ratingWrapper}>
                <FontAwesomeIcon className={styles.smile} icon={faFaceMeh} />
                <p className={styles.smile}>{rating} %</p>
            </div>
        )
    }
    if (rating >= 50 && rating < 75) {
        return (
            <div className={styles.ratingWrapper}>
                <FontAwesomeIcon className={styles.smile} icon={faFaceSmile} />
                <p className={styles.smile}>{rating} %</p>

            </div>
        )
    }
    if (rating >= 75 && rating <= 100) {
        return (
            <div className={styles.ratingWrapper}>
                <FontAwesomeIcon className={styles.smile} icon={faFaceGrinHearts} />
                <p className={styles.smile}>{rating} %</p>
            </div>
        )
    }
};