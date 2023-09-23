import React from 'react'

import { useState } from 'react'
import '../styles/SearchSection.css'
import PinkButton from './PinkButton'


const SearchSectionMoile = ({SwitchSearchSection}) => {
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
    <div className='SearchSectionMoile'>
        <div className='crossSvg'>
        <svg onClick={SwitchSearchSection} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>
        

        <div className='SearchSectionMoileContainer'>
        <div className="displayFlexCol justifycontainBtn">
        <div className="SearchSectionMoile-Destination">
            <h2>Where to?</h2>
        <div className="displayFlex SearchSectionMoile-Destination-searchInput">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search Destinations"/>
        </div>
        </div>
        <div className="SearchSectionMoile-Box displayFlex justifycontainBtn">
            <h3 className="gray">From</h3>
            <input type="date"  />
           
        </div>
        <div className="SearchSectionMoile-Box displayFlex justifycontainBtn">
            <h3 className="gray">To</h3>
            <input type="date" />
         
        </div>
       
        </div>
        <div className="displayFlex justifycontainBtn alignItemsCenter">
                <h3 className="underline" onClick={SwitchSearchSection}>Clear All</h3>
                <PinkButton BtnName="Search" link={'/'} width="20%" action={SearchIt}/>
        </div>
        
            
        </div>   
    </div>
  )
}

export default SearchSectionMoile
