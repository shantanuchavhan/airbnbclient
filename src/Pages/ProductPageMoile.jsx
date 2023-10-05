import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/ProductPage.css'

import SetIsBooking from '../Redux/Actions/SetIsBooking'

import PinkButton from '../components/PinkButton'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import SetHeaderFooter from '../Redux/Actions/SetHeaderFooter'

const ProductPageMobile = ({currentProduct,userName,SetIsBooking,SetHeaderFooter,isFooterHeader}) => {
  const navigate=useNavigate()
  useEffect(()=>{
    SetHeaderFooter(false)
    

  },[SetHeaderFooter,isFooterHeader])
  
  console.log(currentProduct,"currentProduct")
  const images = currentProduct.photos.map((photoUrl) => ({
    src: photoUrl, // Use the 'photoUrl' variable as the source URL
    alt: "Image Alt Text", // Provide an alt text for accessibility
  }));
  
  console.log(images,"images")
  return (
    <div className="ProductPageMobile">
      <div className="ProductPageMobile__header">
        <svg onClick={()=>navigate("/")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
        <Carousel className='ProductPageMobile_photos_Carousel'>
          {images.map((image, index) => (
            <div key={index}>
              <img style={{height:"400px"}} src={image.src} alt={image.alt} />
            </div>
          ))}
      </Carousel>
      </div> 


      <div className="details-1">
            <h1>{currentProduct?.title||""}</h1>
            <div className="details1-link">
                <div>
                <h4 onClick={handleViewReviewsClick} className='Rating ReservationBox__section1__averageRating' >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}

            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            </h4>
            <div>
                <h1> </h1></div>
                <h5>Superhost</h5>
                <div><h1> </h1></div>
                <h5 className="location">{currentProduct.location}</h5>
                </div>
                <div>
                    <h5>Share</h5>
                    <h5>Save</h5>
                </div>
            </div>
        </div>

      <div className="ProductPageMobile_footer">
        <div className="ProductPageMobile_footer__Charges">
          <h3 className="displayFlex gap8"><h2>{currentProduct.price}</h2> night</h3>
          <h3 className="h4_marginTopNegative">Reserve Dates</h3>
        </div>

        <PinkButton BtnName="Reserve" width="30%"/>
      </div>
   </div>
  )
}



const mapStateToProps = (state) => {
  return {
    currentProduct: state.CurrentProductReducer.currentProduct,
    userName:state.userName.userName,
    isFooterHeader: state.FooterHeaderNoneReducer.isFooterHeader
  };
};

const mapDispatchToProps = {
  SetIsBooking,
  SetHeaderFooter

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageMobile); 

