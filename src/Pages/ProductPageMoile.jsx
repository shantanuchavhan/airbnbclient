import React from 'react'
import { connect } from 'react-redux'
import '../styles/ProductPage.css'

import SetIsBooking from '../Redux/Actions/SetIsBooking'

import SimpleImageSlider from "react-simple-image-slider";


const ProductPageMobile = ({currentProduct,userName,SetIsBooking}) => {
  console.log(currentProduct,"currentProduct")
  const images = currentProduct.photos.map((photoUrl)=>{
    return {
      url:photoUrl
    }
  })
  console.log(images,"images")
  return (
    <div>
      <div className="ProductPageMobile__header">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>
      <div className="ProductPageMobile">
      <SimpleImageSlider
        width="max-content"
        height={250}
        images={images}
        showNavs={true}
      />
      </div> 
   </div>
  )
}



const mapStateToProps = (state) => {
  return {
    currentProduct: state.CurrentProductReducer.currentProduct,
    userName:state.userName.userName
  };
};

const mapDispatchToProps = {
  SetIsBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageMobile); 

