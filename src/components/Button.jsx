import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Button = ({BtnName,LinkTo,onClickAction,width}) => {
  return (
    <Link className='Links' to={LinkTo} onClick={onClickAction}>
        <div style={{width:width}} className='Btn'>{BtnName}</div>
    </Link>
  )
}

export default Button