import React from 'react'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import Title from '../../components/Become-a-Host/TitleComponent';

import AmazingView from '../../Images/icons/Amazing-views.jpg';
import HistoricalHomes from '../../Images/icons/Historical-homes.jpg';
import Pools from '../../Images/icons/Pools.jpg';
import Lakefront from '../../Images/icons/Lakefront.jpg';
import Beachfront from '../../Images/icons/Beachfront.jpg';
import farm from '../../Images/icons/farm.jpg';
import Camping from '../../Images/icons/Camping.jpg';
import TinyHomes from '../../Images/icons/Tiny-homes.jpg';
import Rooms from '../../Images/icons/Rooms.jpg';
import Trending from '../../Images/icons/Trending.jpg'; 
import FeatureLayout from '../../components/Become-a-Host/FeatureLayout'
import { setAmenities } from '../../Redux/Actions/Listingactions';

const Amenities = ({amenities,setAmenities}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  
  const data={
    title:"Tell guests what your place has to offer",
    description:"You can add more amenities after you publish your listing."
  }
  const optionData1 = [
    { optionName: 'Wifi', optionIcon: AmazingView },
    { optionName: 'Tv', optionIcon: HistoricalHomes },
    { optionName: 'Kitchen', optionIcon: Pools },
    { optionName: 'Washing Machine', optionIcon: Lakefront },
    { optionName: 'Free Parking on premises', optionIcon: Beachfront },
    { optionName: 'Air Conditioning', optionIcon: farm },
    { optionName: 'Refrigerator', optionIcon: farm },
    { optionName: 'Dedicated Workspace', optionIcon: Camping },
    { optionName: 'Paid Parking premices', optionIcon: TinyHomes },

    // Add more options here
  ];

  const optionData2 = [
    { optionName: 'Pool', optionIcon: Pools },
    { optionName: 'Hot Tub', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Patio', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'BBQ Grill', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Outdoor Dining Area', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Fire Pit', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Pool Table', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Indoor Fireplace', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Piano', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Exercise Equipment', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Lake Access', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Mountain view', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Valley View', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Garden View', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Beach Access', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Ski-in/Ski-Out', optionIcon: Pools }, // Use Pools icon as placeholder
    { optionName: 'Outdoor Shower', optionIcon: Pools }, // Use Pools icon as placeholder
    // Add more options here
  ];

  const optionData3 = [
    { optionName: 'Smoke Alarm', optionIcon: AmazingView },
    { optionName: 'First aid kit', optionIcon: HistoricalHomes },
    { optionName: 'Fire Extigisher', optionIcon: Pools },
    { optionName: 'Carbon Monoxide', optionIcon: Lakefront },
   // Add more options here
  ];

  
  
  function addAmenities(selectedNow) {
    // console.log(selectedNow,"selectedNow")
    const updatedAmenities = amenities.includes(selectedNow)
      ? amenities.filter(amenitie => amenitie !== selectedNow)
      : [...amenities,selectedNow];
    
    // console.log(updatedAmenities,"updatedAmenities")
    setAmenities([...updatedAmenities]);

    // console.log(amenities,"amenities")
  }
  
  
  
  
  return (
    
    <div className={`fade-in ${isLoading ? 'loading' : ''}`}>
      <Title title={data.title} description={data.description} />
      <FeatureLayout
         optionData={optionData1}
         setOption={addAmenities}
         selectedOptions={amenities}
      />
      <p style={{color:"black"}}>Do you have any standout amenities?</p>
      <FeatureLayout
  
         optionData={optionData2}
         setOption={addAmenities}
         selectedOptions={amenities}
         />
        <p style={{color:"black"}}>Do you have any of these safety items?</p>
        <FeatureLayout
          optionData={optionData3}
          setOption={addAmenities}
          selectedOptions={amenities}
          />

    </div>
    
  )
}

const mapStateToProps = (state) => {
  console.log(state.ListingReducer)
  return {
    amenities: state.ListingReducer.amenities
  };
};

const mapDispatchToProps = {
  setAmenities
};

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
