import MovieReview from './MovieReview.jsx';
import classes from '../components/MovieReviewList.module.css';
function MovieReviewList({reviews}) {
    
    return (
        <ul className={classes.reviews}>
        {
            reviews.map((review) => (
                <MovieReview
                    key={review.title}
                    title={review.title}
                    text={review.text}
                    writer={review.writer}
                    rating={review.rating}
                />
             )
                        
                    )
        }
        </ul>
);
}

export default MovieReviewList;