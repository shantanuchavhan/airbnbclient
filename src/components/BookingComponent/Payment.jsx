import React from 'react'
import PinkButton from '../PinkButton'
const Payment = ({currentProduct, tripData}) => {
  return (
    <div>
        <div className="PaymentHeading" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <h2>Confirm and pay</h2>
        </div>
        <div className="PaymentMobile_Product"  >
            <img className="PaymentMobile_Product_img" src={currentProduct.photos[0]} alt="" />
            <div className="PaymentMobile_Product_details" >
                <div>
                    <h3>{currentProduct.privacyType}</h3>
                    <h2>{currentProduct.title}</h2>
                </div>
                <div className="details1-link">
                <div>
                <h4 className='Rating ReservationBox__section1__averageRating' >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </h4>
                <div>
                    <h1>.</h1></div>
                    <h4>Superhost</h4>  
                </div>
            </div>
            </div>
        </div> 
        <div className="PaymentMobile_TripDetails">
            <h2>Your Trip</h2>
            <div>
                <div>
                    <h3>Dates</h3>
                    <h4>8-13</h4>
                </div>
                <span>Edit</span>
            </div>
            <div>
                <div>
                    <h3>Guests</h3>
                    <h4>1 guest</h4>
                </div>
                <span>Edit</span>
            </div>      
        </div> 
        <div>
            <h2>Price details</h2>
            <div>
                <span>{currentProduct.price} X {tripData.totalDays}</span>
                <span>{tripData.totalAmount}</span>
            </div>

        </div> 
        <div>
            {tripData.currentUser?(
                <PinkButton btnname="Login Required" link="/Login" />
            ):(
                <div>

                    
                </div>
            ) }
        </div> 
    </div>
  )
}

export default Payment
