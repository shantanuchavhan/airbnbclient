import React, { useState } from 'react'
import '../styles/Login.css'

import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ChangeUsername } from '../Redux/Actions/ChangeUserName';
import SetListSetup from '../Redux/Actions/SetListSetup';
import ValidityMessge from '../components/ValidityMessge';
import PinkButton from '../components/PinkButton';
import SetIsBooking from '../Redux/Actions/SetIsBooking';
const LoginPage = ({userName,ChangeUsername,isListSetupActive,SetIsBooking,isBooking }) => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  console.log(isBooking,"isBooking")
  async function Login(event){
    console.log(email,"email")
    setIsLoading(true)
    const response = await fetch('https://airbnbcloneshantanu.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',// Sending user data in the request body
      });
    if(response.ok){
      const responseData=await response.json()

      const newUserName=responseData.username
      console.log(userName)
      ChangeUsername(newUserName)
      setIsLoading(false)
      console.log("userName is change to:" , userName)
      alert("Login succesful successful")
      console.log(isListSetupActive,"isList")
      if(isListSetupActive){
        
        navigate('/Become-a-Host/overview')
      }else if(isBooking){
        SetIsBooking(false)
        navigate("/Product")
      }else{
        navigate("/")
      }
    }
  }


  const BtnName=isLoading? "Login...":"Login"
  return (
    <div className='Login-container'>
       
      
        <h1>Log In</h1>             
        <input className="Login-container__input" name='Email' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email..'/> <br />
        <input className="Login-container__input"  name='Password' onChange={(e)=>setPassword(e.target.value)} type="password" id="" placeholder='Password..'/> <br />
        <PinkButton BtnName={BtnName} action={Login}/>
        <ValidityMessge link="/Register" message="Not Registered yet ? Signup Now " />
       
        
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    isListSetupActive: state.ListSetupReducer.isListSetupActive ,
    isBooking:state.isBookingReducer.isBooking
    // Access the isToggled state from the Redux store
  };
};


const mapDispatchToProps = {
  ChangeUsername,
  SetListSetup ,
  SetIsBooking
 // Add the toggle action creator to props
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)