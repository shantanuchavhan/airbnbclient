import React from 'react'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import { connect } from 'react-redux';
import TitleComponent from '../../components/Become-a-Host/TitleComponent';
import '../../styles/BecomeAHost/PrivacyType.css'

import home from '../../Images/icons/Amazing-views.jpg';


import { setPrivacyType } from '../../Redux/Actions/Listingactions';

const PrivacyType = ({privacyType,setPrivacyType}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  
  

  const TitleData={
    title:"What type of place will guests have?",
    description:""
  }

  function selectOption(option){
      
      setPrivacyType(option)
      console.log(privacyType)
  }
  return (
    <main  className={`privacy-type fade-in ${isLoading ? 'loading' : ''}`}>
      <TitleComponent
        title={TitleData.title}
        description={TitleData.description}
      />                                                                                                                                        
      <div className='Privacy-Options '>
        <div className={`Privacy-Options__Option ${privacyType==='Entire Place' ? "selected":""}`} onClick={()=>{selectOption('Entire Place')}}>
          <div className='Options__Option__desc'>
            <h4>An Entire Place</h4>
            <p>Guest have whole place to themseleves</p>
          </div>
          <img className='roomCategoryimg' src={home} alt="" />
        </div>
        <div className={`Privacy-Options__Option ${privacyType==='Room' ? "selected":""}`} onClick={()=>{selectOption('Room')}}>
          <div className='Options__Option__desc'>
            <h4>A Room</h4>
            <p>Guests have their own room in a home, plus access to shared spaces.</p>
          </div>
          <img className='roomCategoryimg' src={home} alt="" />
        </div>
        <div className={`Privacy-Options__Option ${privacyType==='Shared Room' ? "selected":""}`} onClick={()=>{selectOption('Shared Room')}}>
          <div className='Options__Option__desc'>
            <h4>A Shared Room</h4>
            <p>Guests sleep in a room or common area that may be shared with you or others</p>
          </div>
          <img className='roomCategoryimg' src={home} alt="" />
        </div>
      </div>

    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    privacyType: state.ListingReducer.privacyType
  };
};

const mapDispatchToProps = {
  setPrivacyType                                  
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyType);