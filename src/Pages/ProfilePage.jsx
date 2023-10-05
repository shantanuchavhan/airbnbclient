import React from 'react'
import { Link } from 'react-router-dom'
import HomSetupimg from '../Images/finish-setup.png'
import Button from '../components/Button'
import { ChangeUsername } from '../Redux/Actions/ChangeUserName'
import { connect } from 'react-redux'
import '../styles/Profile.css'
const ProfilePage = ({ChangeUsername,userName }) => {
  function logout() {
    // Call the logout API
    fetch('https://airbnbcloneshantanu.onrender.com/logout', {
    method: 'POST',
   
    credentials: 'include', // Send cookies along with the request
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the successful logout response
        console.log(data.message);
        ChangeUsername("")
        
    
    })
    .catch((error) => {
        console.error('Error logging out:', error);
    });
}
  return (
    <div className="ProfilePage">
      
      <h1>Profile</h1>
      
      <div className="ProfilePage-Section ">  
          <div className="displayFlex alignItemsCenter justifycontainBtn">
            <div className="displayFlex alignItemsCenter">
            <img className="profileImage" src={HomSetupimg} alt="" />
            <div>
              <h3>{userName}</h3>
              <h4 className="gray">show profile</h4>
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
      </div>

      <div className="ProfilePage-Section">
          <Link to="/Become-a-Host/overview">
            <div className="setUpSextion-Box">
            <div>
              <h3>AirBnb Your Place</h3>
              <p>Its simple to get setup and start earning.</p>
            </div>
            <div>
              <img className="setupImage" src={HomSetupimg} alt="" />
            </div>
          </div>
        </Link>
        <div className="PersonalInfoSection-link">
          <div className="displayFlex  gap8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>        
            <h3>Personal Info</h3>
          </div>
        
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
      </div>


      </div>
      
      <div className="ProfilePage-Section">
        <h2>Hosting</h2>
        <div className="displayFlex alignItemsCenter justifycontainBtn border-bottom" >
        <div className="displayFlex alignItemsCenter gap16">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        <h3>Manage your listing</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </div>
      </div>

      <Button onClickAction={logout} BtnName="Log Out" LinkTo="/" width="100%" />
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName.userName, // Access the userName state from the Redux store
  };
};


const mapDispatchToProps = {
  ChangeUsername,
// Add the toggle action creator to props
};

export default connect( mapStateToProps , mapDispatchToProps)(ProfilePage);


