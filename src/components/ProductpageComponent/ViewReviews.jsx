import React, { useState ,useEffect} from 'react'
import '../../styles/ProductPage.css'

const ViewReviews = ({reviews,userName,listingId,listingOwner}) => {
    const [viewReviews,setViewReviews]=useState([])
    useEffect(() => {
        setViewReviews(reviews);
       
        console.log(reviews)
      }, [reviews]);

      console.log(viewReviews,"iyguyggy")
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
            setViewReviews((prevReviews) =>
              prevReviews.filter((review) => review._id !== reviewId)
            );
            // Handle successful deletion
            console.log('Review deleted successfully.');
            
          })
          .catch((error) => {
            // Handle error here
            console.error('Error deleting review:', error);
            alert('Error deleting review');
          });
      }
  return (
    <div className="allViewReviews">
        <h2 className="reviews__title">All Reviews</h2>
        {viewReviews && viewReviews.length > 0 ? (
          viewReviews.map((review, index) => (
            <div className="review" style={{width:"50%", overflow:"hiden"}} key={index}>
              <div className="commentHeader">
                <h3 style={{color:"white"}} >{review.user}</h3>
                
                {userName === listingOwner ? (
                  <svg style={{fill:"white"}}
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
           
              {Array.from({ length: 5 }, (_, starIndex) => (
                <svg
                style={{fill:"white"}}
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-3 h-3 ${
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
              <p style={{color:"white"}} className="review_comment">{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Book now to add first review...</p>
        )}
      
    </div>
  )
}

export default ViewReviews
