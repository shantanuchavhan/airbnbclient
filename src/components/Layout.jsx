import React from 'react'
import Footer from './Footer'
import Header from './Header'

import { Outlet} from "react-router-dom";
import FooterMobile from './FooterMobile';
import { connect } from 'react-redux'; 
import '../App.css'
import HeaderMobile from './HeaderMobile';


const Layout = ({children,isFooterHeader}) => { 

  return (
    <div className='Layout'>
      <div className="largerHeader">
        <Header></Header>
      </div>
      {
        isFooterHeader?(
          <div className="smallHeader">
      <HeaderMobile></HeaderMobile>
      </div>
        ):null
      }
      
      
      <div className="MainContent">
        <Outlet>{children}</Outlet>
      </div>
      
      <div className="largeFooter">
        <Footer />
      </div>
      {
        isFooterHeader?
        (
          <div className="smallFooter">
        <FooterMobile/>
      </div>
        ):null
      }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSeacrhSection:state.isSeacrhSection,
    isGuestToggled: state.isGuestToggled, // Access the isToggled state from the Redux store
    isFooterHeader:state.FooterHeaderNoneReducer.isFooterHeader
  };
};


export default connect(mapStateToProps)(Layout);