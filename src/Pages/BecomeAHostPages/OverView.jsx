import React from 'react'
import '../../styles/BecomeAHost/OverView.css'
import OverViewimg1 from  '../../Images/Feature-describe-image1.webp'
import OverViewimg2 from  '../../Images/Feature-describe-image2.webp'
import OverViewimg3 from  '../../Images/Feature-describe-image3.webp'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
const OverView = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  return (
    <main  className={`OverView fade-in ${isLoading ? 'loading' : ''}`}>
      <div className="Title"><h1>It’s easy to get started on Airbnb</h1></div>
      <div className='container'>
        <div className='container__inner'>
          <div className='container__inner__info'>
            <h3>1 Tell Us About Your Place</h3>
            <p>Share some basic info, such as where it is and how many guests can stay.</p>
          </div>
          <img className='container__inner__img' src={OverViewimg1} alt="" />
        </div>
        <div className='container__inner'>
          <div className='container__inner__info'>
            <h3>2 Make it stand out</h3>
            <p>Add 5 or more photos plus a title and description – we’ll help you out.</p>
          </div>
          <img className='container__inner__img' src={OverViewimg3} alt="" />
        </div>

        <div className='container__inner'>
          <div className='container__inner__info'>
            <h3>3 Finish up and publish</h3>
            <p>Share some basic info, such as where it is and how many guests can stay.</p>
          </div>
          <img className='container__inner__img' src={OverViewimg2} alt="" />
        </div>

       
      </div>
    </main>
  )
}

export default OverView