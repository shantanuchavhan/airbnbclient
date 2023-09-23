import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/TripsPage.css';
import '../styles/CommonTransition.css';
import setCurrentProduct from '../Redux/Actions/setCurrentProduct';
import { useNavigate } from 'react-router-dom';
import DeleteBox from '../components/DeleteBox';

const TripsPage = ({ userName, setCurrentProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingText, setIsLoadingText] = useState(true);
  const [trips, setTrips] = useState([]);
  const [isDeleteBox, setIsDeleteBox] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Fetch trip data from the server
    fetch("https://airbnbcloneshantanu.onrender.com/api/Trips", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userName.userName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch trip data");
        }
        return response.json();
      })
      .then(data => {
        setIsLoadingText(false);
        // Update the trips state with the fetched data
        setTrips(data);
      })
      .catch(error => {
        console.error("Error fetching trip data:", error);
        // Handle the error, show an error message to the user, etc.
      });
  }, [userName]);

  function deleteit(id) {
    console.log(id, "trip");
    fetch("https://airbnbcloneshantanu.onrender.com/api/delete", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    });
    const updatedTrips = trips.filter(booking => booking._id !== id);

    // Update the state with the new array
    setTrips(updatedTrips);
  }

  function ViewListing(listing_data) {
    setCurrentProduct(listing_data);
    navigate("/Product");
  }

  return (
    <main className={`TripsPage fade-in ${isLoading ? 'loading' : ''}`}>
      <h3>Your Trips</h3>
      <div className="Trips">
        {isLoadingText ? (
          <main className="center">
            <h1 className="gray">Loading...</h1>
          </main>
        ) : trips.length > 0 ? (
          trips.map((trip, index) => (
            <div key={index} className="Trip">
              {trip.listing.photos && (
                <img
                  className="Trip__image"
                  onClick={() => ViewListing(trip.listing)}
                  src={`http://localhost:5000/${trip.listing.photos[0]}`}
                  alt=""
                />
              )}
              <h3 className="Trip__Title" onClick={() => ViewListing(trip.listing)}>
                {trip.listing.title}
              </h3>
              <h4 className="Trip__division">{new Date(trip.startDate).toISOString().split('T')[0]}</h4>
              <h4 className="Trip__division">{new Date(trip.endDate).toISOString().split('T')[0]}</h4>
              <div className="listing_data" onClick={() => setIsDeleteBox(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              {isDeleteBox === index ? (
                <DeleteBox deleteAction={() => deleteit(trip._id)} setIsDeleteBox={setIsDeleteBox} />
              ) : null}
            </div>
          ))
        ) : (
          <div className="empty_result">
            <h2>You have no trips.</h2>
          </div>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    currentProduct: state.CurrentProductReducer.currentProduct,
  };
};

const mapDispatchToProps = {
  setCurrentProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsPage);
