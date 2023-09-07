import React from 'react'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import Steps from '../../components/Become-a-Host/Steps'
import img from '../../Images/stand-out.png'

const StandOut = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  const details={
    stepNo:"Step2",
    title:"Tell us about your place",
    desc:"In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.",
    img:{img}
  }
  return (
    <div className={` fade-in ${isLoading ? 'loading' : ''}`}>
      <Steps 
    stepNo={details.stepNo}
    title={details.title}
    desc={details.desc}
    img={details.img}
  />
    </div>
  )
}

export default StandOut