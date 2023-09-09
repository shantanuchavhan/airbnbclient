import React from 'react'
import Footer from './Footer'
import Header from './Header'

import { Outlet} from "react-router-dom";

import { connect } from 'react-redux'; 
import '../App.css'



const Layout = ({children}) => { 

  return (
    <div className='Layout'>
      <Header></Header>
      <div className="MainContent">
        <Outlet>{children}</Outlet>
      </div>
      
      
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSeacrhSection:state.isSeacrhSection,
    isGuestToggled: state.isGuestToggled, // Access the isToggled state from the Redux store
  };
};


export default connect(mapStateToProps)(Layout);