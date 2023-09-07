import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import '../../styles/BecomeAHost/BecomeAHostPages.css';

const BecomeHomeLayout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Header />

      <div className="mainContentContainer">
        <div className="mainContentWrapper">
          <Outlet>{children}</Outlet>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BecomeHomeLayout;
