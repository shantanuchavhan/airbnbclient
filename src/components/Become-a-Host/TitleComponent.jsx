import React from 'react'
import '../../styles/BecomeAHost/TitleComponent.css'
const TitleComponent = ({title,description}) => {
  return (
    <div className='TitleComponent'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default TitleComponent; 




    