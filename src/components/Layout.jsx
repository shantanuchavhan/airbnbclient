import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Home from '../Pages/home'
import { Outlet, Link } from "react-router-dom";
import GuestBar from './GuestBar';
import { connect } from 'react-redux'; 
import '../App.css'
import SearchSection from './SearchSection';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


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