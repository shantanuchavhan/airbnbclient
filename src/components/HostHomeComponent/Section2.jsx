import React from 'react'
import '../../styles/HostHome/section2.css'
import '../../styles/HostHome/HostHomes.css'


import featureSectionImage from '../../Images/Airbnb-images-feature-section.webp'


const Section2 = () => {
  return (
    <div className="sections section2">
    <h1>Airbnb it easily with Airbnb Setup</h1>
    <img className='section2__featureImage' src={featureSectionImage} alt="" />
    <div className='section2__features'>
      <div className="section2__features__feature">
        <h3>One-to-one guidance from a Superhost </h3>
        <p>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
      </div>
      <div className="section2__features__feature">
        <h3>An experienced guest for your first booking</h3>
        <p>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
      </div>
      <div className="section2__features__feature">
        <h3>Specialised support from Airbnb </h3>
        <p>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
      </div>
    </div>
  </div>
  )
}

export default Section2