
import React, { useState, useEffect, useRef } from 'react';
import SearchSection from './SearchSection'
import '../styles/Header.css'
import Logo from './Logo';
import AcountBar from './AcountBar'
import { GuestToggle } from '../Redux/Actions/GuestToggleAction'
import { connect } from 'react-redux';
import { ChangeUsername } from '../Redux/Actions/ChangeUserName';
import { Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Header = ({GuestToggle,isGuestToggled, ChangeUsername,userName,}) => {
 
  
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.username,"data")
        ChangeUsername(data.username)
  
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, [ChangeUsername]);

  console.log(userName,"username")
    
 
  
  const headerRef = useRef(null);
  const [searchToggle,setSearchToggle]=useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("event.taregt")
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        GuestToggle(false)
        setSearchToggle(false) // Disable SearchSection when clicking outside Header
        setAccountBarToggle(false)
      }
    };

    // Attach the event listener to the entire document
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [GuestToggle]);



  

  const [accountBarToggle, setAccountBarToggle ]=useState(false)

  const [isAddDateActive,setIsAddDateActive]=useState(true)
  const [isCheckinActive,setIsCheckinActive]=useState(false)
  const [isCheckoutActive,setIsCheckoutActive]=useState(false)
  const [isWhoActive,setIsWhoActive]=useState(false)

  
  function accountBarTogglefunction({userName}){
    setAccountBarToggle(!accountBarToggle)
    GuestToggle(false)
    setSearchToggle(false) 

  }

  function AddLocationActive(){
    setIsAddDateActive(true)
    setIsCheckinActive(false)
    setIsWhoActive(false)
    setIsCheckoutActive(false)
    GuestToggle(false)
  }
  function CheckinActive(){
    setIsAddDateActive(false)
    setIsCheckinActive(true)
    setIsWhoActive(false)
    setIsCheckoutActive(false)
    GuestToggle(false)
  }
  function WhoActive(){
 
    setIsAddDateActive(false)
    setIsCheckinActive(false)
    setIsWhoActive(true)
    setIsCheckoutActive(false)
    GuestToggle(!isGuestToggled)
   
  }
  function CheckoutActive(){
    setIsAddDateActive(false)
    setIsCheckinActive(false)
    setIsWhoActive(false)
    setIsCheckoutActive(true)
    
    GuestToggle(false)
  }

  const searchSection =(e)=>{
    if (e.target.innerHTML==='Anywhere') {
      AddLocationActive()
     
   }
  
   else if (e.target.innerHTML==='Any Week') {
      CheckinActive()
     
   }
   else if (e.target.innerHTML==='Add Guests') {
      console.log("Adding guest")
      WhoActive() 
   }
    setSearchToggle(true)
  }

  function SwitchToHosting(){
    setSearchToggle(false)
    setAccountBarToggle(false)
    console.log(userName,"switchHostingHome ")
    if(userName.userName!==""){
      navigate('/Hosting')
      
    }else{
      navigate('/Host/Home')
      
    }

  }
  
 
  
  return (
    <div className='HEADER' ref={headerRef}>
        <header className="App-header">
        <Link to="/"> <Logo/></Link>
       
        <div className='div-2'>
          <h4 onClick={searchSection}>Anywhere</h4>
          <div className='line'>|</div>
          <h4 onClick={searchSection}>Any Week</h4>
          <div className="line">|</div>
          <h4 onClick={searchSection}>Add Guests</h4>
          <svg className='searchSvg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>

        <div className='div-3'>
          <h4 onClick={SwitchToHosting} className='HostingH4'>Switch to hosting</h4>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <div className='Account' onClick={accountBarTogglefunction} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <h3>{userName.userName  ||'S'}</h3>
          </div>
        </div>
      
      </header>
      {
        searchToggle ?   <SearchSection 
        isAddDateActive={isAddDateActive}
             isCheckinActive={isCheckinActive}
             isCheckoutActive={isCheckoutActive}
             isWhoActive={isWhoActive}
             setIsAddDateActive={setIsAddDateActive}
             setIsCheckinActive={setIsCheckinActive}
             setIsCheckoutActive={setIsCheckoutActive}
             setIsWhoActive={setIsWhoActive}
             CheckinActive={CheckinActive}
             CheckoutActive={CheckoutActive}
             WhoActive={WhoActive}
             AddLocationActive={AddLocationActive}
             setSearchToggle={setSearchToggle}
         /> : ''
      }
       {
        accountBarToggle ? <AcountBar toggle={accountBarToggle} setToggle={setAccountBarToggle} />: ''

      }
    
     
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName, 
    isGuestToggled: state.isGuestToggled // Access the isToggled state from the Redux store
  };
};

const mapDispatchToProps = {
  ChangeUsername,
  GuestToggle // Add the toggle action creator to props
};
export default connect( mapStateToProps,mapDispatchToProps)(Header);
