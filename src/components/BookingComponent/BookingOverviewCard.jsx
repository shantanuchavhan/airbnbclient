import React from 'react'
import example from '../../Images/airbnb-Superhost-image.webp'
const BookingOverviewCard = ({BookingOverview}) => {
  return (
    <div className='BookingOverviewCard'>
        <div className='BookingOverviewCard__roomDetails BottomBorder'>
            <div ><img className="BookingOverviewCard__roomDetails__img" src={example} alt="" /></div>
            <div>
                <h5 className="lightGray">Entire apartment</h5>
                <h4 className="gray">Shangri-la:2BHK Flat near Imagica with Shared Pool</h4>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 smallStar">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <h5 className=""> 4.83<span className="lightGray"> (6 reviews)</span></h5>
                </div>
               
            </div>
        </div>
        <div className='BookingOverviewCard__roomPriceDetails BottomBorder'>
            <h2>Price details</h2>
            <div className="flex-justifyBetween gray">
                <h3>₹4,049.1 x 1 night</h3>
                <h3>₹4,049.1</h3>
            </div>
            <div className="flex-justifyBetween gray">
                <h3>Airbnb service fee</h3>
                <h3>₹571.64</h3>
            </div>
            <div className="flex-justifyBetween gray">
                <h3>Taxes</h3>
                <h3>₹485.9</h3>
            </div>
        </div>
        <div className="BookingOverviewCard__Total BottomBorder"> 
            <div className="flex-justifyBetween">
                <h4>Total (INR)</h4>
                <h4>₹5,106.64</h4>
            </div>
        </div>
      
    </div>
  )
}

export default BookingOverviewCard
