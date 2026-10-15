'use client';

import MovieReviewList from "./app/components/MovieReviewList";
import MovieReviewForm from "./app/components/MovieReviewForm";
import { useState } from 'react';
import initialReviews from './Reviews.json';

function App() {
  // empty array to hold reviews
  const [reviews, setReviews] = useState((initialReviews));

  // add new review handler
  function addReviewHandler(reviewData) {
    setReviews((existingReviews) => [reviewData, ...existingReviews]
    );}


  return (
    <>
    <main className="app">
      <h1 className="appTitle">Movie Reviews</h1>
      {/* using components */}
      <MovieReviewForm onAddReview={addReviewHandler} />
      <MovieReviewList reviews={reviews} />
    </main>

  


</>
  )
  }
export default App;