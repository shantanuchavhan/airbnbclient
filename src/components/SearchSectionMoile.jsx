import React from 'react'
import GuestBar from './GuestBar'
import { useState } from 'react'
import '../styles/SearchSection.css'
const SearchSectionMoile = () => {
    const [isGuestBar,setIsGuestBar]=useState(false)
    function AddGuest(params) {
        setIsGuestBar(!isGuestBar)
        
    }

  return (
    <div className='SearchSectionMoile'>
        <div className='SearchSectionMoileContainer'>
        <div className="displayFlex justifycontainBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" />
        </div>
        <div className="displayFlex justifycontainBtn">
            <h4 className="gray">From</h4>
            <input type="date"  />
           
        </div>
        <div className="displayFlex justifycontainBtn">
            <h4 className="gray">To</h4>
            <input type="date" />
         
        </div>
        <div>
            <div className="displayFlex justifycontainBtn" onClick={AddGuest}>
                <h4 className="gray">Who</h4>
                <h4>Add Gusest</h4>
            </div>
            
            { 
                isGuestBar?
                <GuestBar/>
                :""
            }
        </div>
            
        </div>   
    </div>
  )
}

export default SearchSectionMoile
