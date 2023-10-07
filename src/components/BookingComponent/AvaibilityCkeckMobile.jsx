import React from 'react'
import { useState } from 'react';
import PinkButton from '../PinkButton';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import Button from '../Button';
const AvaibilityCkeckMobile = ({currentProduct,setPayment}) => {
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isAvailable,setIsAvailable]=useState(null)
  const [totalAmount,setTotalAmount]=useState("")

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };



  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (startDate) {
      // Convert the start and end dates to JavaScript Date objects
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(date);
      // Calculate the time difference in milliseconds
      const timeDifference = endDateObj.getTime() - startDateObj.getTime();
      // Calculate the difference in days
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      console.log(daysDifference,"daysDifference")
      // Assuming you have the price available in your component state
      const price = currentProduct.price; // Replace with the actual price
      // Calculate the total cost
     setTotalAmount(daysDifference * price)
    }
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
        setIsAvailable(false)
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

      <h1>Total Amount: {totalAmount}</h1>
      {isAvailable === null ?
      (
        <PinkButton BtnName="Check Availabilty" onClick={checkAvailability}/>
        ) : isAvailable === true ? (
            <PinkButton BtnName="Proceed" onClick={setPayment(true)}/> 
        ) : (
            <Button BtnName="not Availabilty"/>
    )}  
    </div>
  )
}


const mapStateToProps = (state) => ({
    currentProduct: state.CurrentProductReducer.currentProduct,
    
  });
  
  const mapDispatchToProps = {
   
   
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(AvaibilityCkeckMobile);

