import React from 'react'
import '../../styles/HostHome/section1.css'
import '../../styles/HostHome/HostHomes.css'


import mapImage from '../../Images/map-img.png'


const Section1 = () => {
  return (
    <div className="sections section1">
            <div className="section1__hero">
              <div className='section1__hero__title'>
                <h1 className='section1__hero__title__Name'>Airbnb it</h1>
                <h1>You could earn</h1>
              </div>
              
              <h1>26,064</h1>
              <p className='gray'><span className='borderBottom black'>7 nights </span>at an estimated ₹3,723 a night</p>
           
              <p className='borderBottom gray' >learn how we estimate your earning</p>
              <div className='section1__hero__getPrice' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <div className="section1__hero__getPrice__Values">
                <h3 className='section1__hero__getPrice__Values__location'>Thane</h3>
                <h4 className='section1__hero__getPrice__Values__Bedrooms gray'>Entire place : 2 Bedrooms</h4>
              </div>
              

              </div>
              

            </div>.
            <div className="section1__map">
                <img src={mapImage} alt="" />
              </div>

          </div>
  )
}

export default Section1