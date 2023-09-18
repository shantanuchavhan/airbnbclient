import React from 'react';
import { useEffect,useState } from 'react';
import '../styles/HostingPage.css';
import '../styles/Card.css';
import '../styles/CommonTransition.css'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import setCurrentProduct from '../Redux/Actions/setCurrentProduct';
import Cookies from 'js-cookie';



const Card = ({ key,userName,currentProduct,setCurrentProduct, roomData}) => {
  const [allWishList,setAllWishList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    setAllWishList(roomData.wishlist||[])
  }, [roomData.wishlist])
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  // image = "https://airbnbcloneshantanu.onrender.com/" + image;

  const setProduct = () => {    
        const productId = roomData._id; // Replace with the actual product ID
        Cookies.set('productIdCookie', productId.toString());
        console.log(roomData,"roomData")
        setCurrentProduct(roomData);
        console.log(currentProduct,"roomData")
        navigate('/Product')   
  };
  
  const addToWishList = (event) => {
    event.stopPropagation();
    if (allWishList.includes(roomData._id)) {
      // Remove the item from the wishlist
      const updatedWishList = allWishList.filter((wishId) => wishId !== roomData._id);
      setAllWishList(updatedWishList);
    } else {
      // Add the item to the wishlist
      const updatedWishList = [...allWishList, roomData._id];
      setAllWishList(updatedWishList);
    }
    
    console.log(userName,"addtowishlist")
    if(userName===""){
    
      navigate('/Login')
    }
    const productId = roomData._id; 
    fetch('https://airbnbcloneshantanu.onrender.com/addToWishlist',{
      method: 'POST', // Set the HTTP method
      headers: {
        'Content-Type': 'application/json' // Specify the content type
      },
      body: JSON.stringify({ id:productId ,username:userName})
    }).then((response)=>response.json())
    .then((data)=>{
      setAllWishList(data.wishlist)
      console.log(allWishList,"allWishList")
    })
    
    

  }
  console.log(allWishList,roomData._id,"listkeyofwish")
  return (
    
      <div onClick={setProduct}  className={`card ${isLoading ? 'loading' : ''}`}>
        <div className='Image-Detail'>
          <img src={roomData.photos[0]} alt="" />
          <div className="details">
            <h3 className="details__location">{roomData.location}</h3>
            {Array.from({ length: 5 }, (_, index) => (
              <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="10"  
              height="10"  
              className={` ${index < roomData.averageRating ? 'fillRatingSvg' : ''}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            
            ))}
            <h4>{roomData.price} night</h4>
            
          </div>
          
          {allWishList.length !== 0 ? (
            <div onClick={addToWishList} className={allWishList.includes(roomData._id) ? 'pinkWishListColor wishlistIcon' : 'wishlistIcon'}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </div>
          ) : (
            <div onClick={addToWishList} className='wishlistIcon'>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </div>
          )}

           
        </div>
      </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    userName:state.userName.userName,
    currentProduct: state.CurrentProductReducer.currentProduct
  };
};

const mapDispatchToProps = {
  setCurrentProduct,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
