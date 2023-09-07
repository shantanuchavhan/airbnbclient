import React from 'react';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import AllListing from '../components/HostingComponents/AllListing';
import AllBooking from '../components/HostingComponents/AllBooking';
import { setId, setStructure, setPrivacyType, setLocation, setFloorPlan, setAmenities, addPhoto, setTitle, setDescription, setPrice, getDiscounts } from '../Redux/Actions/Listingactions';
import '../styles/HostingPage.css';

import '../styles/CommonTransition.css'

const HostingPage = ({  setAmenities, addPhoto, getDiscounts, setTitle, setDescription, setPrice, setId, setStructure, setPrivacyType, setLocation, setFloorPlan }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);
  const navigate = useNavigate();
  const [currentSection,setCurrentSection]=useState("All Bookings")


  const addListing = () => {
    setId(null);
    setStructure("");
    setPrivacyType("");
    setLocation("");
    setFloorPlan({
      guestCount: 4,
      bedCount: 1,
      bathroomCount:1
    });
    setAmenities([]);
    addPhoto([]);
    setTitle("");
    setDescription("");
    setPrice(6000);
    getDiscounts([]);
    navigate('/Become-a-Host/overview');
  };

  function selectSelection(selectedName){
    setCurrentSection(selectedName)
  }

  return (
    <div   className={`Hosting fade-in ${isLoading ? 'loading' : ''}`}>
      <div onClick={addListing}>
        <Button BtnName="Add Listing" LinkTo="/Become-a-Host/overview" />
      </div>
      <div className="HostingNavBar">
        <h3 className={currentSection === "All Bookings"? "underLine":"gray"} onClick={()=>selectSelection("All Bookings")}>All Bookings</h3>
        <h3 className={currentSection === "All Bookings"? "gray":"underLine "} onClick={()=>selectSelection("All Listings")}>All Listings</h3>
      </div>

      {currentSection === "All Bookings" ? <AllBooking /> : <AllListing />}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserListings: state.currentUserListingsReducer.currentUserListings,
  };
};

const mapDispatchToProps = {
  setId,
  setStructure,
  setPrivacyType,
  setLocation,
  setFloorPlan,
  setAmenities,
  addPhoto,
  setTitle,
  setDescription,
  setPrice,
  getDiscounts,

};

export default connect(mapStateToProps, mapDispatchToProps)(HostingPage);
