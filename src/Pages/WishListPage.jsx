import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import PinkButton from '../components/PinkButton';
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

  function wishlistRoomsFilter(id){
    setWishListRooms((WishListRooms)=>
      WishListRooms.filter((WishListRoom)=>WishListRoom._id!==id)
    )
    

  }
  return (
    <div>
      <h1>Wishlists</h1>
      {
        userName ?
        <div className="roomImages">
         {wishListRooms?wishListRooms.map((room)=>(
            <Card key={room._id} roomData={room} allWishList={allWishList} wishlistRoomsFilter={wishlistRoomsFilter}/>
            
         )):<h2>no wishlist</h2>}     
      </div>  :
      <div>
        <h2>Log in to view your wishlists</h2>
        <h3>You can create, view, or edit wishlists once you’ve logged in.</h3>
        <PinkButton BtnName="login" LinkTo="/Login" width="30%"/>
      </div>

      }
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
