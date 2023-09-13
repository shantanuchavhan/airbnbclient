import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/HostingPage.css'
import setCurrentProduct from '../../Redux/Actions/setCurrentProduct';
import DeleteBox from '../../components/DeleteBox';
import { useNavigate } from 'react-router-dom';

const AllBooking = ({ userName,currentProduct,setCurrentProduct }) => {
  const [bookings, setBookings] = useState([]);
  const [isDeleteBox, setIsDeleteBox] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    fetch("https://airbnbcloneshantanu.onrender.com/Bookings", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ owner: userName.userName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch booking data");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(error => {
        console.error("Error fetching booking data:", error);
      });
  }, [userName]);

  function deleteBooking(id) {
    console.log(id, "Booking");
    fetch("https://airbnbcloneshantanu.onrender.com/Booking/delete", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    });
  
    // Use the filter method to create a new array excluding the deleted booking
    const updatedBookings = bookings.filter(booking => booking._id !== id);
  
    // Update the state with the new array
    setBookings(updatedBookings);
  }

  function ViewListing(listing_data){
    setCurrentProduct(listing_data)
    navigate("/Product")
  }
  

  return (

  <main className="TripPage">
    {bookings.length > 0 ? (
      bookings.map((booking, index) => (
        <div key={index} className="Trip">
          {booking.listing.photos && <img onClick={()=>ViewListing(booking.listing)} className="Trip__image" src={`http://localhost:5000/${booking.listing.photos[0]}`} alt="" />}
            <h3 onClick={()=>ViewListing(booking.listing)} className=" Trip__Title">{booking.listing.title}</h3>
            <h4  className="Trip__division">{new Date(booking.startDate).toISOString().split('T')[0]}</h4>
            <h4  className="Trip__division">{new Date(booking.endDate).toISOString().split('T')[0]}</h4>
            <h4  className="Trip__division">{booking.user}</h4>
            <div className="listing_data Trip__division" onClick={() => setIsDeleteBox(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Cancel
            </div>
        {isDeleteBox === index ? (
          <DeleteBox deleteAction={() => deleteBooking(booking._id)} setIsDeleteBox={setIsDeleteBox} />
        ) : null}
      </div>
    ))
  ) : (
    <div className="empty_result">
      <h2>You have no Bookings.</h2>
    </div>
  )}
</main>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    currentProduct: state.CurrentProductReducer.currentProduct
  };
};

const mapDispatchToProps = {
    setCurrentProduct
  };


export default connect(mapStateToProps,mapDispatchToProps)(AllBooking);
