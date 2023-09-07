import React, { useState } from 'react'
import '../styles/AccountBar.css'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ChangeUsername } from '../Redux/Actions/ChangeUserName'
const AcountBar = ({toggle,setToggle,userName,ChangeUsername}) => {
  const [redirect,setRedirect]=useState(false)
  if(userName){
    console.log(userName,"AccountBarUsernams")
  }
  function toggleIt(){
    setToggle(!toggle)
  }
  function logout() {
    // Call the logout API
    fetch('http://localhost:5000/logout', {
    method: 'POST',
    credentials: 'include', // Send cookies along with the request
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the successful logout response
        console.log(data.message);
        ChangeUsername("")
        setRedirect(true)
    
    })
    .catch((error) => {
        console.error('Error logging out:', error);
    });
}
  if(redirect){
    return <Navigate to="/"  />
  }
  return (
    <div >
      
      <div className='AccountBar'>
      
      { userName.userName ? (
          <Link to="/" onClick={logout}>
            <div><h4>LogOut</h4></div>
          </Link>
        ) : (
          <Link to="/Login" onClick={toggleIt}>
            <div><h4>LogIn</h4></div>
          </Link>
      )}
      
      <Link to="/Register"onClick={toggleIt} > <div ><h4 >SignUp</h4></div></Link>
      <Link to="/Trips" onClick={toggleIt}><div><h4>Trips</h4></div></Link>
      <Link to="/Hosting" onClick={toggleIt}> <div ><h4 >AirBnb Your Home</h4></div></Link>
      <Link to="/" onClick={toggleIt}> <div ><h4 >Help</h4></div></Link>
      </div>

    
    
     </div>
 
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName, 
    isGuestToggled: state.isGuestToggled // Access the isToggled state from the Redux store
  };
};

const mapDispatchToProps = {
  ChangeUsername,
// Add the toggle action creator to props
};

export default connect( mapStateToProps , mapDispatchToProps)(AcountBar);