import React from 'react';
import { useEffect,useState } from 'react';
import '../styles/HostingPage.css';
import '../styles/Card.css';
import '../styles/CommonTransition.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import setCurrentProduct from '../Redux/Actions/setCurrentProduct';
import Cookies from 'js-cookie';


const Card = ({ image, location, price,  setCurrentProduct,  roomData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  image = "https://airbnbcloneshantanu.onrender.com/api/" + image;

  const setProduct = () => {
    const productId = roomData._id; // Replace with the actual product ID
    Cookies.set('productIdCookie', productId.toString());
    setCurrentProduct(roomData);
  };

  return (
    <Link to="/Product">
      <div onClick={setProduct}  className={`fade-in ${isLoading ? 'loading' : ''}`}>
        <div className='Image-Detail'>
          <img src={image} alt="" />
          <div className="details">
            <h3>{location}</h3>
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
            <h4>{price} night</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.CurrentProductReducer.currentProduct
  };
};

const mapDispatchToProps = {
  setCurrentProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
