import { FaRegStar, FaStar } from 'react-icons/fa';
import classes from '../components/MovieReview.module.css'
function Review({title, text, writer, rating = 5}) {
    const normalizedRating = Math.min(5, Math.max(1, Number(rating) || 5));

    return (
        <div className={classes.reviewItem}>
            <div className={classes.titleRow}>
                <h2 className={classes.title}>{title}</h2>
                <span className={classes.rating} aria-label={`${normalizedRating} out of 5 stars`}>
                    <span aria-hidden="true">
                        {Array.from({length: 5}, (_, starIndex) => (
                            starIndex < normalizedRating
                                ? <FaStar key={starIndex} />
                                : <FaRegStar key={starIndex} />
                        ))}
                    </span>
                </span>
            </div>
            <p className={classes.text}>{text}</p>
            <p className={classes.writer}><b>{writer}</b></p>
        </div>
    );
}
export default Review;