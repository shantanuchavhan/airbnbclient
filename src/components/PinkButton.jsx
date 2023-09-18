import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../App.css'
const PinkButton = ({BtnName,link,width, action}) => {
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
        <h3 style={{width:width}} >{BtnName}</h3>
    </div>
  )
}

export default PinkButton
