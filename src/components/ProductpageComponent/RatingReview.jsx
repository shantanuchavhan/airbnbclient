import React, { useState, useEffect } from 'react';
import Button from '../Button';
import '../../styles/ProductPage.css';
import { connect } from 'react-redux';

const RatingReview = ({ userName, listingId, bookedUsers, listingOwner }) => {
  const [ratings, setRatings] = useState(0);
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://airbnbcloneshantanu.onrender.com/listings/${listingId}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response here
        setReviews(data);
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
        alert('Error fetching reviews');
      });
  }, [listingId]);

  function addRatingReview() {
    // Check if the user is in the bookedUsers list before allowing review submission
    if (bookedUsers.includes(userName)) {
      const data = {
        user: userName,
        text: newReview,
        rating: ratings,
      };
      fetch(`https://airbnbcloneshantanu.onrender.com/listings/${listingId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Handle successful response here
          setReviews(data);
        })
        .catch((error) => {
          // Handle error here
          console.error(error);
          alert('Error adding review');
        });
    } else {
      alert('You can only add a review after booking.');
    }
  }

  function getReviewWords(e) {
    setNewReview(e.target.value);
  }

//   // Define a function to delete a comment
function deleteComment(listingId, reviewId) {

  fetch(`https://airbnbcloneshantanu.onrender.com/listings/${listingId}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );
      // Handle successful deletion
      console.log('Review deleted successfully.');
      // You might want to update your UI to reflect the deleted review.
    })
    .catch((error) => {
      // Handle error here
      console.error('Error deleting review:', error);
      alert('Error deleting review');
    });
}


  return (
    <div>
      {bookedUsers.includes(userName) && (
        <div>
          <div className="ratings">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  index <= ratings ? 'fillRatingSvg' : ''
                }`}
                onClick={() => setRatings(index)} // +1 to set the rating correctly
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"
                />
              </svg>
            ))}
          </div>
          <div className="review">
            <textarea
              onChange={getReviewWords}
              value={newReview}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div style={{width:"20%"}}>
          <Button onClickAction={addRatingReview} BtnName={'Add review'} />
          </div>
        </div>
      )}

      <div className="reviews">
        <h2 className="reviews__title">All Reviews</h2>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="commentHeader">
                <h3>{review.user}</h3>
                {/* Add an onClick handler to delete the comment */}
                {userName === listingOwner ? (
                  <svg
                    onClick={() =>
                      deleteComment(
                        listingId,
                        review._id,
                        
                      )
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                ) : (
                  ''
                )}
              </div>
              {/* ... other components */}
              {Array.from({ length: 5 }, (_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    starIndex < review.rating ? 'fillRatingSvg' : ''
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
              <p className="review_comment">{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Book now to add first review...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName.userName,
  };
};

export default connect(mapStateToProps)(RatingReview);
