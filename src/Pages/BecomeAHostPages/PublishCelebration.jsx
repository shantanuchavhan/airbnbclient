import React from 'react'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
const PublishCelebration = ({listing,userName}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  console.log(listing)
  console.log(userName)
  
  return (
    <div  className={`center-div fade-in ${isLoading ? 'loading' : ''}`}>
      <h1>Congratulations, {userName}</h1>
      <p>From one Host to another – welcome aboard. Thank you for sharing your home and helping to create incredible experiences for our guests.</p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listing: state.ListingReducer,
    userName:state.userName.userName
  };
};



export default connect(mapStateToProps)(PublishCelebration);