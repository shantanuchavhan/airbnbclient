import React from 'react'
import { useState } from 'react';
import PinkButton from '../PinkButton';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
const AvaibilityCkeckMobile = ({currentProduct,setPayment}) => {
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isAvailable,setIsAvailable]=useState(null)

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    checkAvailability()
  };

  function checkAvailability() {
    for (const booking of currentProduct.bookingDates) {
      const existingStartDate = new Date(booking.startDate);
      const existingEndDate = new Date(booking.endDate);
      const proposedStartDate = new Date(startDate);
      const proposedEndDate = new Date(endDate);
      console.log(existingStartDate,existingEndDate,proposedStartDate,proposedEndDate,"proposedEndDate","existingStartDate","existingEndDate","proposedStartDate")
  
      // Check for overlap
      if (
        (proposedStartDate >= existingStartDate && proposedStartDate < existingEndDate) ||
        (proposedEndDate > existingStartDate && proposedEndDate <= existingEndDate)
      ) {
        console.log(false)
        
        // There is an overlap, so the proposed booking is not available
        return false;
      }
    }
    console.log(true)
    setIsAvailable(true)
  
    // No overlap found, so the proposed booking is available
    return true;
  }
    
  return (
    <div>
        <h1>Step 1/2</h1>
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

      <h1>Total Amount:</h1>
        {isAvailable ? <PinkButton BtnName="Check Availabilty" onClick={checkAvailability}/> : <PinkButton BtnName="Proceed" onClick={checkAvailability}/> }    
    </div>
  )
}


const mapStateToProps = (state) => ({
    currentProduct: state.CurrentProductReducer.currentProduct,
    
  });
  
  const mapDispatchToProps = {
   
   
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(AvaibilityCkeckMobile);

