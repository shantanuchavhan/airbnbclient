import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../App.css'
const PinkButton = ({BtnName,link, action}) => {
   const navigate=useNavigate()
   function BtnAction(){
    if(link){
        navigate(link)
    }else{
        action()
    }
   }
  return (
    <div className="pinkBtn" onClick={BtnAction}>
        <h3 >{BtnName}</h3>
    </div>
  )
}

export default PinkButton
