import React, { useState } from 'react'
import '../styles/Login.css'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ChangeUsername } from '../Redux/Actions/ChangeUserName';
import SetListSetup from '../Redux/Actions/SetListSetup';
import ValidityMessge from '../components/ValidityMessge';
import PinkButton from '../components/PinkButton';
import SetIsBooking from '../Redux/Actions/SetIsBooking';
const LoginPage = ({userName,ChangeUsername,isListSetupActive,SetListSetup,SetIsBooking,isBooking }) => {
  const [redirect,setRedirect] = useState("");
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  console.log(isBooking,"isBooking")
  async function Login(event){
    console.log(email,"email")
    
    const response = await fetch('http://localhost:5000/login', {
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



  return (
    <div className='Login-container'>
       
      
        <h1>Log In</h1>             
        <input className="Login-container__input" name='Email' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email..'/> <br />
        <input className="Login-container__input"  name='Password' onChange={(e)=>setPassword(e.target.value)} type="password" id="" placeholder='Password..'/> <br />
        <PinkButton BtnName="Login" action={Login}/>
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