import {useState} from 'react';
import classes from './RecommendationForm.module.css';

function RecommendationForm({onAddRecommendation}) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function textChangeHandler(event) {
        setEnteredText(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

   function submitHandler(event) {
  event.preventDefault();

  const recData = {
    id: Date.now().toString(),
    title: enteredTitle,
    name: enteredAuthor,     
    text: enteredText,    
  };

  onAddRecommendation(recData);
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
          <label htmlFor="author" className={classes.name}>
            Your name
          </label>
          <input
            id="author"
            type="text"
            required
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="text" className={classes.recommendation}>
            Recommendation
          </label>
          <textarea
            id="text"
            rows="3"
            required
            value={enteredText}
            onChange={textChangeHandler}
          />
        </p>
        <p className={classes["recommendation-form-submission"]}>
          <button type="submit" style={{ display: 'block', margin: '0 auto' }}>
            Share your Recommendation!
          </button>
        </p>
      </form>
    
    </>
  );

}

export default RecommendationForm;
