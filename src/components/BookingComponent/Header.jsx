import React from 'react'
import { Link } from 'react-router-dom'
    import '../../styles/Booking.css'
import Logo from '../Logo'
const Header = () => {

  return (
    <div className='header'>
        <Link to="/"> <Logo/></Link>
        
      
    </div>
  )
}

export default Header
