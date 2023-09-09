import React from 'react';
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import { connect } from 'react-redux';
import { setFloorPlan } from '../../Redux/Actions/Listingactions';
import '../../styles/BecomeAHost/FloorPlan.css';


const FloorPlan = ({ guestCount, bedCount, bathroomCount, setFloorPlan,floorplans }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  console.log(guestCount,bathroomCount,floorplans)
 
  const increment = (type, value) => {
    setFloorPlan(type, value + 1);
  }

  const decrement = (type, value) => {
    if(value<=1){
    
      setFloorPlan(type, 1);
    }else{
      setFloorPlan(type, value - 1);
    }
    
  }

  return (
    <main className={`FloorPlan fade-in ${isLoading ? 'loading' : ''}`}>
      <div>
        <h1>Share some basics about your place</h1>
        <p>You'll add more details later, such as bed types.</p>
      </div>

      <div className="FloorPlanType-container Guest">
        <h3>Guests</h3>
        <div className='FloorPlanType-container__count'>
          <svg onClick={() => increment('guest',guestCount)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <h3>{guestCount}</h3>

          <svg onClick={() => decrement('guest', guestCount)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>: ''
          
        </div>
      </div>

      <div className="FloorPlanType-container Beds">
        <h3>Beds</h3>
        <div className='FloorPlanType-container__count'>
          <svg onClick={() => increment('bed', bedCount)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <h3>{bedCount}</h3>

        <svg onClick={() => decrement('bed', bedCount)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>:""
         
        </div>
      </div>

      <div className="FloorPlanType-container Bathrooms">
        <h3>Bathrooms</h3>
        <div className='FloorPlanType-container__count'>
          <svg onClick={() => increment('bathroom', bathroomCount||1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <h3>{bathroomCount||1}</h3>

         <svg onClick={() => decrement('bathroom', bathroomCount||1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> : ""
  
        </div>
      </div>

    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    guestCount: state.ListingReducer.floorplan.guestCount,
    bedCount: state.ListingReducer.floorplan.bedCount,
    bathroomCount: state.ListingReducer.floorplan.bathroomCount,
    floorplans:state.ListingReducer.floorplan,
  };
};

const mapDispatchToProps = {
  setFloorPlan
};

export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
 