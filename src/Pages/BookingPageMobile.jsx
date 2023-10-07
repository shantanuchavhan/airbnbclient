import React from 'react'
import { useState } from 'react'
import AvaibilityCkeckMobile from '../components/BookingComponent/AvaibilityCkeckMobile'
import Payment from '../components/BookingComponent/Payment'
const BookingPageMobile = () => {
    const [payment,setPayment]=useState(false)
  return (
    <div>
    

        {
            payment?
            <Payment/>:
            <AvaibilityCkeckMobile setPayment={setPayment}/>
        }
      
    </div>
  )
}

export default BookingPageMobile
