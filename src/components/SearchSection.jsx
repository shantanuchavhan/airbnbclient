import React from 'react'
import { useState } from 'react'
import '../styles/SearchSection.css'
import GuestBar from './GuestBar'
import { connect } from 'react-redux'; 
import { GuestToggle } from '../Redux/Actions/GuestToggleAction'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import setRooms from '../Redux/Actions/setRooms';
const SearchSection = ({GuestToggle, isAddDateActive, isCheckinActive, isCheckoutActive, isWhoActive,AddLocationActive, CheckinActive,  CheckoutActive,WhoActive , setSearchToggle,rooms,setRooms} ) => {
  const isGuestToggled = useSelector(state => state.guestToggle.isGuestToggled);

  const [totalGuestCount,setTotalGuestCount]=useState(0)
  const [AdultCount,setAdultCount]=useState(0)
  const [ChildCount,setChildCount]=useState(0)
  const [InfantCount,setInfantCount]=useState(0)
  const [PetCount,setPetCount]=useState(0)

  function SearchIt(e) {
    e.preventDefault();
    
    const SearchQuery = {
      location: location.toLowerCase(),
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      totalGuestCount: totalGuestCount
    };
  
    fetch("http://localhost:5000/search", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(SearchQuery)
    })
    .then(response => response.json())
    .then(data => {
      setRooms(data);
      GuestToggle();
      setSearchToggle(false);
    })
    .catch(error => {
      console.error('Error while searching:', error);
      // Handle the error if needed
    });
  }
  

    function WhoSection(){
      GuestToggle()
      WhoActive()

    }

    const [location,setLocation]=useState("")
    const [checkInDate,setCheckInDate]=useState("")
    const [checkOutDate,setCheckOutDate]=useState("")

    
   
  return (
    <div>
      <div className='Search-section'>
         <form  action="" onSubmit={SearchIt}>
          <label htmlFor=""  onClick={AddLocationActive} className={`section-1 ${isAddDateActive ? "Active" : ""}`}>
            <div className='border-right'>
              <div>Where</div>
              <input onChange={(e)=>setLocation(e.target.value)}  type="text" placeholder='Add Location' />
            </div>
            <div className='bar' style={{fontSize:'30px',color:'gray'}} >|</div>
          </label>
          
          <label  htmlFor="" onClick={CheckinActive} className={`section-2 ${isCheckinActive ? "Active" : ""}`}>
            <div className='border-right'>
              <div>Check in</div>
              <input type="Date" onChange={(e)=>setCheckInDate(e.target.value)} placeholder='Add Date' />
            </div>
            <div className='bar' style={{fontSize:'30px',color:'gray'}} >|</div>
          </label>
          <label htmlFor="" onClick={CheckoutActive} className={`section-3 ${isCheckoutActive ? "Active" : ""}`}>
            <div className='border-right'>
              <div>Check out</div>
              <input type="Date" onChange={(e)=>{setCheckOutDate( e.target.value)}}  placeholder='Add Date' />
            </div>
            <div className='bar' style={{fontSize:'30px',color:'gray'}} >|</div>
          </label>
          <label onClick={WhoSection} className={`section-4 ${isWhoActive ? "GuestActive" : ""}`}>
            <div className='border-right'>
              <div >Who</div>
              { totalGuestCount===0 ? <div   className='faint'>Add Guests</div>: <div   className='faint'>{totalGuestCount} Guests</div>  }
              
            </div>
           
          </label>
          <div  className={` ${isWhoActive ? " Submitbutton" : ""}`} >
            <button type="submit">Search</button>
          </div>
          
         
        </form>

        {
        isGuestToggled ? <GuestBar totalCount={totalGuestCount} setTotalCount={setTotalGuestCount} AdultCount={AdultCount} ChildCount={ChildCount} InfantCount={InfantCount} PetCount={PetCount} setAdultCount={setAdultCount} setChildCount={setChildCount} setInfantCount={setInfantCount} setPetCount={setPetCount} marginTopinPx="450px"/>:""
        }        
    </div>  
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isGuestToggled: state.isGuestToggled, // Access the isToggled state from the Redux store
    rooms:state.AllRoomsDetailsReducer.rooms
  };
};

const mapDispatchToProps = {
  GuestToggle, // Add the toggle action creator to props
  setRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
