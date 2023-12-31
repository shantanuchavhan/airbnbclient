import React from 'react'
import { useState } from 'react'
import '../styles/Header.css'
import SearchSectionMoile from './SearchSectionMoile'
const HeaderMobile = () => {
    const [searchSection,setSearchSection]= useState(false)
    function SwitchSearchSection(params) {
        
        setSearchSection(!searchSection)
        
    }
  return (
    <div  className="HeaderMobile">
        <div onClick={SwitchSearchSection} className="SearchSectionMobile flexA">
            <div className="flexA">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div>
                <h4 className="gray" >Anywhere</h4>
                <h4 className="lightGray marginTop-10">Any week . Add guests</h4>
            </div>
        </div>
        <div className="filterMobile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        </div>
        {
            searchSection?  <SearchSectionMoile SwitchSearchSection={SwitchSearchSection}/> : ""
        }
    </div>
  )
}

export default HeaderMobile
