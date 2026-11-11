import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import classes from '../components/MovieReviewForm.module.css';

function MovieReviewForm({onAddReview}) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [enteredWriter, setEnteredWriter] = useState('');
    const [enteredRating, setEnteredRating] = useState(1);

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function textChangeHandler(event) {
        setEnteredText(event.target.value);
    }
    function writerChangeHandler(event) {
        setEnteredWriter(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const reviewData = {
            title: enteredTitle,
            text: enteredText,
          writer: enteredWriter,
          rating: enteredRating
        };
        onAddReview(reviewData);
    }

     return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="title" className={classes.title}>
            Movie title
          </label>
          <input
            id="title"
            type="text"
            required
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="writer" className={classes.name}>
            Your name
          </label>
          <input
            id="writer"
            type="text"
            required
            value={enteredWriter}
            onChange={writerChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="text" className={classes.review}>
            Review
          </label>
          <textarea
            id="text"
            rows="3"
            required
            value={enteredText}
            onChange={textChangeHandler}
          />
        </p>
        <fieldset className={classes.ratingField}>
          <legend>Rating</legend>
          <div className={classes.ratingButtons} role="radiogroup" aria-label="Choose a rating from one to five stars">
            {Array.from({length: 5}, (_, starIndex) => {
              const rating = starIndex + 1;
              const isSelected = rating <= enteredRating;

              return (
                <button
                  key={rating}
                  type="button"
                  className={`${classes.ratingButton} ${isSelected ? classes.selected : ''}`}
                  aria-label={`${rating} star${rating === 1 ? '' : 's'}`}
                  aria-pressed={rating === enteredRating}
                  onClick={() => setEnteredRating(rating)}
                >
                  {isSelected ? <FaStar aria-hidden="true" /> : <FaRegStar aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          <span className={classes.ratingHint}>
            {enteredRating === 0 ? 'Select a rating' : `${enteredRating} out of 5 stars`}
          </span>
        </fieldset>
        <p className={classes["review-form-submission"]}>
          <button type="submit">Write your review!</button>
        </p>
      </form>
    </>
  );

}

export default MovieReviewForm;
