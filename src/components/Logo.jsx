import React from 'react'
import '../App.css'
import logo from '../Images/Airbnb-logo.png'
const Logo = () => {
  return (
    <div>
      <img src={logo} className="App-logo bigairbnblogo" alt="" />
    <img className='smallAirbnblogo'  src="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" alt="" />

    </div>
    
    
  )
}

export default Logo