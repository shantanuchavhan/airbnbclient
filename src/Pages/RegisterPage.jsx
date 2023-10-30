import React, { useState } from 'react';
import '../styles/Register.css';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ValidityMessge from '../components/ValidityMessge';
import PinkButton from '../components/PinkButton';
// Import useHistory from react-router-dom

const RegisterPage = () => {
  
  useEffect(() => {
    fetch('https://airbnbcloneshantanu.onrender.com/api/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        console.log(userInfo)
        
      });
    });
  }, []);
  const [redirect,setRedirect]=useState(false)
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading]=useState(false)
  async function Register(event) {
    setIsLoading(true)
    try {

      const response = await fetch('https://airbnbcloneshantanu.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }), // Sending user data in the request body
      });

      if (response.ok) {
        console.log('User registered successfully');
        alert("Registration successful")
        
        setIsLoading(false)
        setRedirect(true)
        // Redirect to the login page after successful registration
      
      } else {
        console.error('Error registering user');
        // Handle the error (show an error message, etc.)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error or other exceptions
    }
  }

  const BtnName=isLoading? "Signin...":"Sign In"

  if (redirect) {
    return <Navigate to={'/Login'} />
  }

  return (
    <div className='Register-Container'>
      
        <h1>Sign Up</h1>
        <input className="Register-container__input"
          type='text'
          name='name'
          placeholder='Name..'
          onChange={(e) => setName(e.target.value)}
        />
        <input className="Register-container__input"
          type='text'
          name='email'
          placeholder='Email..'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="Register-container__input"
          type='password'
          name='password'
          placeholder='Password..'
          onChange={(e) => setPassword(e.target.value)}
        />
        <PinkButton action={Register} BtnName="Sign Up" />
       
        <ValidityMessge link="/Login" message="Already Login ? Login now" />
      
    </div>
  );
};

export default RegisterPage;
