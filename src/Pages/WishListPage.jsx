import React from 'react'
import { useEffect } from 'react';
import Card from '../components/Card';
const WishListPage = ({userName}) => {
  const [wishListRooms,setWishListRooms] =
  useEffect(() => {
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
        setWishListRooms(data)
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
   
  };
};


export default connect( mapStateToProps)(WishListPage);
