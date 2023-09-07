import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../Redux/Actions/Listingactions';
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'

import map from '../../Images/map-img.png';
import '../../styles/BecomeAHost/Location.css';


const Location = ({ location, setLocation }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  const handleLocationChange = (event) => {
      console.log(location,"lo")
    const newLocation = event.target.value;
    setLocation(newLocation.toLowerCase()); 
  };

  return (
    <main  className={`Location fade-in ${isLoading ? 'loading' : ''}`}>
      <div className="Location__Title">
        <h1>Where's your place located?</h1>
        <p>Your address is only shared with guests after they’ve made a reservation.</p>
      </div>
      <div className='Location__Input-container'>
        <div className='map-container'>
          <img className='mapImage' src={map} alt="" />
          <input className='locationInput' type="text" placeholder="Enter location" value={location} onChange={handleLocationChange} />
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.ListingReducer.location
  };
};

const mapDispatchToProps = {
  setLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
