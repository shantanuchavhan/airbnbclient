import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/ProductPage.css';

import SetIsBooking from '../Redux/Actions/SetIsBooking';

import PinkButton from '../components/PinkButton';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import SetHeaderFooter from '../Redux/Actions/SetHeaderFooter';

const ProductPageMobile = ({ currentProduct, userName, SetIsBooking, SetHeaderFooter, isFooterHeader }) => {
  const navigate = useNavigate();

  useEffect(() => {
    SetHeaderFooter(false);
  }, [SetHeaderFooter, isFooterHeader]);

  const images = currentProduct.photos.map((photoUrl) => ({
    src: photoUrl,
    alt: 'Image Alt Text',
  }));

  return (
    <div className="ProductPageMobile">
      <div className="ProductPageMobile__header">
        <svg
          onClick={() => navigate('/')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        <div className="ProductPageMobile__header--RightSection">
          {/* Your SVG icons */}
        </div>
      </div>

      <div className="ProductPageMobile_photos">
        <Carousel className="ProductPageMobile_photos_Carousel">
          {images.map((image, index) => (
            <div key={index}>
              <img style={{ height: '400px' }} src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="details-1">
        <h1>{currentProduct?.title || ''}</h1>
        <div className="details1-link">
          <div className="displayFlex alignItemsCenter">
            <h4 className="Rating ReservationBox__section1__averageRating">
              {currentProduct && currentProduct.averageRating !== undefined
                ? currentProduct.averageRating.toFixed(1)
                : 0}
              {/* Your SVG rating icon here */}
            </h4>
            <div>
              <h5>Superhost</h5>
            </div>
          </div>
          <h3>{currentProduct.location}</h3>
        </div>
      </div>

      <div className="ProductPageMobile_footer">
        <div className="ProductPageMobile_footer__Charges">
          <h3 className="displayFlex gap8">
            <h2>{currentProduct.price}</h2> night
          </h3>
          <h3 className="h4_marginTopNegative">Reserve Dates</h3>
        </div>

        <PinkButton BtnName="Reserve" width="30%" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentProduct: state.CurrentProductReducer.currentProduct,
  userName: state.userName.userName,
  isFooterHeader: state.FooterHeaderNoneReducer.isFooterHeader,
});

const mapDispatchToProps = {
  SetIsBooking,
  SetHeaderFooter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageMobile);
