import React from 'react'
import Footer from './Footer'
import Header from './Header'

import { Outlet} from "react-router-dom";

import { connect } from 'react-redux'; 
import '../App.css'
import HeaderMobile from './HeaderMobile';


const Layout = ({children}) => { 

  return (
    <div className='Layout'>
      <div className="largerHeader">
        <Header></Header>
      </div>
      <div className="smallHeader">
      <HeaderMobile></HeaderMobile>
      </div>
      
      
      <div className="MainContent">
        <Outlet>{children}</Outlet>
      </div>
      
      <div className="largeFooter">
        <Footer />
      </div>
      
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