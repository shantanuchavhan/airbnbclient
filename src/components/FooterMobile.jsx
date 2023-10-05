import React from 'react';
import '../styles/Footer.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FooterMobile = ({ userName, isFooterHeader }) => {
  const navigate = useNavigate();

  const navigateTo = (section) => {
    switch (section) {
      case "Login":
        console.log('Login');
        navigate('/Login');
        break;
      case "Explore":
        console.log('Explore');
        navigate('/');
        break;
      case "Wishlists":
        console.log('Wishlist');
        navigate('/Wishlist');
        break;
      case "Trips":
        console.log('Trips');
        navigate('/Trips');
        break;
      case "Profile":
        console.log('Profile');
        navigate('/Profile');
        break;
      case "Inbox":
        console.log('Message');
        navigate('/Message');
        break;
      default:
        break;
    }
  };

  const sections = [
    {
      name: "Explore",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      name: "Wishlists",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      name: "Login",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
  ];

  return (
    isFooterHeader ? (
      <div className="FooterMobile">
    {userName.userName !== "" ? (
      loginSections.map((value) => (
        <div className="FooterMobile__Section" key={value.name}>
          <div onClick={() => navigateTo(value.name)} className={value.name === "Trips" ? "airbnblogo" : ""}>
            {value.svg}
          </div>
          <h3 onClick={() => navigateTo(value.name)}>{value.name}</h3>
        </div>
      ))
    ) : (
      logoutSections.map((value) => (
        <div className="FooterMobile__Section" key={value.name}>
          <div onClick={() => navigateTo(value.name)} className={value.name === "Trips" ? "airbnblogo" : ""}>
            {value.svg}
          </div>
          <h3 onClick={() => navigateTo(value.name)}>{value.name}</h3>
        </div>
      ))
    )}
  </div>
    ) : null
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    isFooterHeader: FooterHeaderNoneReducer.isFooterHeader
  };
};

export default connect(mapStateToProps)(FooterMobile);
