import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Logo'
import Button from '../Button'
import '../../styles/BecomeAHost/BecomeAHostPages.css'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/"> <Logo/></Link>
        <div className='header-btns'>
          <div >
            <Button  className='Links' BtnName="Quetions?" width="50%" />
          </div>
            
          <div >
          <Button  className='Links' BtnName="Save & exit" />
          </div>
            
        </div>
    </div>
  )
}

export default Header