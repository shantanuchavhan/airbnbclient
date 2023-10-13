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
    <div style={{padding:"30px",minHeight:"100vh"}}>
      <h1 style={{marginBottom:"32px"}}>Wishlists</h1>
      {
        userName ?
        <div >
         {wishListRooms.length > 0?wishListRooms.map((room)=>(
            <Card key={room._id} roomData={room} allWishList={allWishList} wishlistRoomsFilter={wishlistRoomsFilter}/>
            
         )):<div>
          <h2 className="gray">No wishlist </h2>
          <PinkButton BtnName="Explore" link="/" width="0%"/>
          </div>}     
      </div>  :
      <div>
        <h2>Log in to view your wishlists</h2>
        <h3>You can create, view, or edit wishlists once you’ve logged in.</h3>
        <PinkButton BtnName="login" link="/Login" width="30%"/>
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
