import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/BookingComponent/Header';
import BookingOverviewCard from '../components/BookingComponent/BookingOverviewCard';
import Footer from '../components/Footer';

import LoginPage from './LoginPage';
import '../styles/Booking.css';
import BookingPageMobile from './BookingPageMobile';

const BookingPage = () => {
  const isMobile = window.innerWidth < 768; // Adjust the threshold as needed

  return (
    <div>
      {isMobile ? (
        <BookingPageMobile />
      ) : (
        <>
          <Header></Header>
          <div className="BookingPage__main">
            <div>
              <h1>Confirm and pay</h1>
              <LoginPage />
            </div>
            <div>
              <BookingOverviewCard />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};


export default BookingPage;
