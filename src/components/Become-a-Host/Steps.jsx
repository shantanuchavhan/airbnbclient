import React from 'react'
import '../../styles/BecomeAHost/BecomeAHostPages.css'
const Steps = ({stepNo,title,desc,img}) => {
  
  return (
    <main className='AboutYourPlace'>
      <div>
        <h4>{stepNo}</h4>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <img className="img" src={img.img} alt="" />
    </main>
  )
}

export default Steps;