import React from 'react'
import { Link } from 'react-router-dom'


import Footer from '../Footer'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

import logo from '../../Images/Airbnb-logo.png'

import { connect } from 'react-redux'
import SetListSetup from '../../Redux/Actions/SetListSetup'

const HostHome = ({userName,SetListSetup,isListSetupActive}) => { 
  function register(){
    SetListSetup(true)

  }

  return (
    <div>
          <header>
            <Link to="/"><img className="Airbnblogo" src={logo} alt="" /></Link>
            <div>
              <h3>Ready to airbnb it?</h3>
             
              <Link to='/Register' className='AirbnbSetupButton'>
                <svg onClick={register} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                
                <h3>Airbnb Setup</h3>
              </Link>
            </div>
        </header>
        <main>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
        </main>
        <Footer></Footer>
      </div>

  )
}
const mapStateToProps = (state) => {
  return {
    isListSetupActive: state.ListSetupReducer.isListSetupActive
  };
};

const mapDispatchToProps = {
      SetListSetup
};


export default connect(mapStateToProps,mapDispatchToProps)(HostHome)