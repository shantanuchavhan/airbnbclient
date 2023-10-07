import React from 'react'
import { useState } from 'react';
import PinkButton from '../PinkButton';
import { DatePicker } from 'antd';

import Button from '../Button';
const AvaibilityCkeckMobile = ({currentProduct,setPayment,tripData,setTripData}) => {
  const [isAvailable,setIsAvailable]=useState(null)
  

  const handleStartDateChange = (date) => {
    setTripData(tripdata=>{return {...tripdata,startDate:date}});
  };



  const handleEndDateChange = (date) => {
    setTripData(tripdata=>{return {...tripdata,endDate:date}});
    if (startDate) {
      // Convert the start and end dates to JavaScript Date objects
      const startDateObj = new Date(tripData.startDate);
      const endDateObj = new Date(date);
      // Calculate the time difference in milliseconds
      const timeDifference = endDateObj.getTime() - startDateObj.getTime();
      // Calculate the difference in days
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      setTripData(tripdata=>{return {...tripdata,totalDays:daysDifference}});
      // Assuming you have the price available in your component state
      const price = currentProduct.price; // Replace with the actual price
      // Calculate the total cost
      setTripData(tripdata=>{return {...tripdata,totalAmount:daysDifference * price}});
     
    }
    checkAvailability()
  };
  

  function checkAvailability() {
    for (const booking of currentProduct.bookingDates) {
      const existingStartDate = new Date(booking.startDate);
      const existingEndDate = new Date(booking.endDate);
      const proposedStartDate = new Date(tripData.startDate);
      const proposedEndDate = new Date(tripData.endDate);
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

      <h1>Total Amount: {tripData.totalAmount<0?0:tripData.totalAmount}</h1>
      {isAvailable === null ?
      (
        <PinkButton BtnName="Check Availabilty" onClick={checkAvailability}/>
        ) : isAvailable === true ? (
            <PinkButton BtnName="Proceed" action={()=>{setPayment(true)}}/> 
        ) : (
            <Button BtnName="not Availabilty"/>
    )}  
    </div>
  )
}



  
export default AvaibilityCkeckMobile;

