import React from 'react'
import '../../styles/HostHome/section5.css'
import '../../styles/HostHome/HostHomes.css'

import superHostImage from  '../../Images/airbnb-Superhost-image.webp'

const section5 = () => {
  return (
    <div className="sections section5">
              <div className="section5__left">
              <img className="section5__superHostImage" src={superHostImage} alt="" />
              </div>
              
              <div className="section5__right">
                <h2>Still have Quetions</h2>
                <h3 className="gray">Get answers from an experienced Superhost near you.</h3>
                
                <button className='learnMoreBtn'>Match with a Superset</button>
              </div>
            </div>
  )
}

export default section5