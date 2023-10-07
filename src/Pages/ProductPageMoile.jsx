import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/ProductPage.css';
import RatingReview from '../components/ProductpageComponent/RatingReview';
import SetIsBooking from '../Redux/Actions/SetIsBooking';

import PinkButton from '../components/PinkButton';
import Button from '../components/Button';

import { DatePicker } from 'antd';



import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import SetHeaderFooter from '../Redux/Actions/SetHeaderFooter';

const ProductPageMobile = ({ currentProduct, userName, SetIsBooking, SetHeaderFooter, isFooterHeader }) => {
  const navigate = useNavigate();
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  

  
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

  const getDescriptionPreview = () => {
    const maxLines = 5;
    const lines = currentProduct.description.split('\n');
    if (lines.length <= maxLines || showFullDescription) {
      return currentProduct.description;
    } else {
      return lines.slice(0, maxLines).join('\n');
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
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
        <div className="ProductPageMobile--details ">
          <h1>{currentProduct?.title || ''}</h1>
          <div className="displayFlex alignItemsCenter justifycontainBtn">
            <div className="displayFlex alignItemsCenter gap8">
              <h4 className="ProductPageMobile--details--links"  >
                {currentProduct && currentProduct.averageRating !== undefined
                  ? currentProduct.averageRating.toFixed(1)
                  : 0}
                  
              </h4>
              <div>
                <h2 className="ProductPageMobile--details--links" >Superhost</h2>
              </div>
            </div>
            <h2 className="ProductPageMobile--details--links" >{currentProduct.location}</h2>
          </div>
        </div>


        <div className="ProductPageMobile--details  displayFlex alignItemsCenter justifycontainBtn">
            <div>
            <h1>Entire Place Hosted By {currentProduct.ownerName}</h1>
            <div className='displayFlex alignItemsCenter'>
                <h3 className="ProductPageMobile--details--roomDescribe--check">{currentProduct.floorplan.guestCount||currentProduct.floorplan.guest} Guests</h3>
                <div><h1> </h1></div> 
                <h3 className="ProductPageMobile--details--roomDescribe--check">{currentProduct.floorplan.bedCount||currentProduct.floorplan.bed} Bedroom</h3>
                <div><h1> </h1></div>
                <h3 className="ProductPageMobile--details--roomDescribe--check">{currentProduct.floorplan.bedCount+1||currentProduct.floorplan.bed+1} Bathroom</h3>
                <div><h1> </h1></div>
                <h3 className="ProductPageMobile--details--roomDescribe--check">{currentProduct.floorplan.bathroomCount+1||currentProduct.floorplan.bathroom+1} Bathroom</h3>
                <div><h1> </h1></div>
            </div>
            </div>
            <img src={currentProduct.photos[0]} alt="hghj" className="Ownerimg" /> 
        </div>

        <div className="ProductPageMobile--details HosterFeatures">
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>

              <div>
                <h3>Self check-in</h3>
                <h4 className='ProductPageMobile--details--featuresDescribe'>You can check in with the doorperson</h4>
              </div>
          </div>
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3>Great check-in experiance</h3>
                <h4 className='ProductPageMobile--details--featuresDescribe'>92% of recent guest in witrh the check in process a 5-star Rating</h4>
              </div>
          </div>
          <div className="displayFlex alignItemsCenter gap16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <div>
                <h3 className="">Free Cancelation before 5 Aug</h3>
              </div>
          </div>      
        </div>

        <div className="ProductPageMobile--details description-section">
        <p>{getDescriptionPreview()}</p>
        {currentProduct.description.split('\n').length > 5 && (
          <span className="show-more" onClick={toggleDescription}>
            {showFullDescription ? 'Show less' : 'Show more'}
            {showFullDescription ? (
              <i className="fas fa-arrow-up"></i>
            ) : (
              <i className="fas fa-arrow-down"></i>
            )}
          </span>
        )}
      </div>

      <div className="ProductPageMobile--details amenities-section">
        <h1>What this place offers</h1>
        <div className="amenities-list">
          {showAllAmenities
            ? currentProduct.amenities.map((amenity, index) => (
                <div key={index}>
                  <h4 className="ammenity-name">{amenity}</h4>
                </div>
              ))
            : currentProduct.amenities.slice(0, 5).map((amenity, index) => (
                <div key={index}>
                  <h4 className="ammenity-name">{amenity}</h4>
                </div>
              ))}
        </div>
        {!showAllAmenities && currentProduct.amenities.length > 5 ? (
          <Button BtnName={`Show all ${currentProduct.amenities.length - 5} amenities`} onClickAction={toggleAmenities}  />
        ):(<Button BtnName={`Show less amenities`} onClickAction={toggleAmenities}  />)}
      </div>
      <div className="ProductPageMobile--details">
        <RatingReview listingId={currentProduct._id} listingOwner={currentProduct.ownerName} bookedUsers={currentProduct.bookedUsers}/>
        
      </div>
      </div>

               

      <div className="ProductPageMobile_footer">
        <div className="ProductPageMobile_footer__Charges">
          <h3 className="displayFlex gap8">
            <h2>{currentProduct.price}</h2> night
          </h3>
          <div>
      <h2>Select a Date Range:</h2>
      <div className="date-input">
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="date-input">
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
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
