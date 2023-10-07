import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import AvaibilityCkeckMobile from '../components/BookingComponent/AvaibilityCkeckMobile'
import Payment from '../components/BookingComponent/Payment'
const BookingPageMobile = ({currentProduct,userName}) => {
    const [payment,setPayment]=useState(false)
    const [tripData,setTripData]=useState({
        startDate:"",
        endDate:"",
        totalDays:0,
        guest:0,
        totalAmount:0,
        currentUser:userName
    })
  return (
    <div>
        {
            payment?
            <Payment currentProduct={currentProduct} tripData={tripData} setTripData={setTripData} />:
            <AvaibilityCkeckMobile setPayment={setPayment} currentProduct={currentProduct} tripData={tripData} setTripData={setTripData} />
        }
      
    </div>
  )
}

const mapStateToProps = (state) => ({
    currentProduct: state.CurrentProductReducer.currentProduct,
    userName:state.userName.userName,
    
  });
  
  const mapDispatchToProps = {
   
   
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(BookingPageMobile);

