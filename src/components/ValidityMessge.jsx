import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const ValidityMessge = ({message,link}) => {
    const navigate=useNavigate()
  return (
    <h4 onClick={()=>navigate(link)} className="validationMessage">{message}</h4>
  )
}

export default ValidityMessge
