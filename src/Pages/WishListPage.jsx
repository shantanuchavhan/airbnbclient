import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

const WishListPage = ({userName,allWishList}) => {
  const [wishListRooms,setWishListRooms] = useState([])
  useEffect(() => {
    console.log("hii")
    fetch(`https://airbnbcloneshantanu.onrender.com/getWishlist/${userName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data received from the API
        console.log(data);
        setWishListRooms(data.wishlistItems)
      })
      .catch((error) => {
        // Handle errors
        console.error('Fetch error:', error);
      });
  }, [userName]);
  return (
    <div>
      <div className="roomImages">
         {wishListRooms.map((room)=>(
            <Card key={room._id} roomData={room} allWishList={allWishList} />
            
         ))}     
        </div>
      
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userName: state.userName.userName, 
    allWishList:state.AllWishListReducer.allWishList
    
   
  };
};


export default connect( mapStateToProps)(WishListPage);
