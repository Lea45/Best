import React, { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from local storage when the component mounts
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && review) {
      const newReview = { name, review, date: new Date().toLocaleString() };
      const updatedReviews = [...reviews, newReview];

      // Update the state and local storage
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      // Reset form fields
      setName("");
      setReview("");
    }
  };

  return (
    <div className="reviews">
      <div className="reviews-container">
        <h2>Leave a Review</h2>

        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>

        <div className="reviews-list">
          <h3>Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="review-item">
                <h4>{rev.name}</h4>
                <p>{rev.review}</p>
                <small>{rev.date}</small>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
