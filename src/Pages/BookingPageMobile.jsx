import React from 'react'
import { useState } from 'react'
import AvaibilityCkeckMobile from '../components/BookingComponent/AvaibilityCkeckMobile'
import Payment from '../components/BookingComponent/Payment'
const BookingPageMobile = ({currentProduct}) => {
    const [payment,setPayment]=useState(false)
  return (
    <div>
    

        {
            payment?
            <Payment currentProduct={currentProduct} />:
            <AvaibilityCkeckMobile setPayment={setPayment} currentProduct={currentProduct}/>
        }
      
    </div>
  )
}

const mapStateToProps = (state) => ({
    currentProduct: state.CurrentProductReducer.currentProduct,
    
  });
  
  const mapDispatchToProps = {
   
   
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(BookingPageMobile);

