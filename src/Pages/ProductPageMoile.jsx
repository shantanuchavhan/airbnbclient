import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/ProductPage.css';

import SetIsBooking from '../Redux/Actions/SetIsBooking';

import PinkButton from '../components/PinkButton';
import Button from '../components/Button';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import SetHeaderFooter from '../Redux/Actions/SetHeaderFooter';

const ProductPageMobile = ({ currentProduct, userName, SetIsBooking, SetHeaderFooter, isFooterHeader }) => {
  const navigate = useNavigate();
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  useEffect(() => {
    SetHeaderFooter(false);
  }, [SetHeaderFooter, isFooterHeader]);

  const images = currentProduct.photos.map((photoUrl) => ({
    src: photoUrl,
    alt: 'Image Alt Text',
  }));

  const toggleAmenities = () => {
    setShowAllAmenities(!showAllAmenities);
  };

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
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

      <div className="ProductPageMobile_MiddleSection">
        <div className="details-1">
          <h1>{currentProduct?.title || ''}</h1>
          <div className="">
            <div className="">
              <h4 className="Rating ReservationBox__section1__averageRating">
                {currentProduct && currentProduct.averageRating !== undefined
                  ? currentProduct.averageRating.toFixed(1)
                  : 0}
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
              </h4>
              <div>
                <h5>Superhost</h5>
              </div>
            </div>
            <h2>{currentProduct.location}</h2>
          </div>
        </div>


        <div className="">
            <h2>Entire Place Hosted By {currentProduct.ownerName}</h2>
            <div className='displayFlex alignItemsCenter'>
                <h4>{currentProduct.floorplan.guestCount||currentProduct.floorplan.guest} Guests</h4>
                <div><h1> </h1></div> 
                <h4>{currentProduct.floorplan.bedCount||currentProduct.floorplan.bed} Bedroom</h4>
                <div><h1> </h1></div>
                <h4>{currentProduct.floorplan.bedCount+1||currentProduct.floorplan.bed+1} Bathroom</h4>
                <div><h1> </h1></div>
                <h4>{currentProduct.floorplan.bathroomCount+1||currentProduct.floorplan.bathroom+1} Bathroom</h4>
                <div><h1> </h1></div>
            </div>
            <img src={"https://airbnbcloneshantanu.onrender.com/"+ currentProduct.photos[0]} alt="hghj" className="Ownerimg" /> 
        </div>

        <div className="">
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>

              <div>
                <h3>Self check-in</h3>
                <h4>You can check in with the doorperson</h4>
              </div>
          </div>
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3>Great check-in experiance</h3>
                <h4>92% of recent guest in witrh the check in process a 5-star Rating</h4>
              </div>
          </div>
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <div>
                <h4>Free Cancelation before 5 Aug</h4>
              </div>
          </div>      
        </div>

        <div className="">
          <p>{currentProduct.description}</p>
          <span href="">Show more left arrow</span >
      </div>

      <div className="amenities-section">
        <h2>What this place offers</h2>
        <div className="amenities-list">
          {showAllAmenities
            ? currentProduct.amenities.map((amenity, index) => (
                <div key={index}>
                  <h4>{amenity}</h4>
                </div>
              ))
            : currentProduct.amenities.slice(0, 5).map((amenity, index) => (
                <div key={index}>
                  <h4>{amenity}</h4>
                </div>
              ))}
        </div>
        {!showAllAmenities && currentProduct.amenities.length > 5 && (
          <PinkButton BtnName={`Show all ${currentProduct.amenities.length - 5} amenities`} onClickAction={toggleAmenities} />
        )}
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
