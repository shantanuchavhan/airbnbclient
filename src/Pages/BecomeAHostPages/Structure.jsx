import React from 'react';
import { connect } from 'react-redux';
import { setStructure } from '../../Redux/Actions/Listingactions';
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import TitleComponent from '../../components/Become-a-Host/TitleComponent';


import '../../styles/BecomeAHost/Structure.css';

import AmazingView from '../../Images/icons/Amazing-views.jpg';
import Beachfront from '../../Images/icons/Beachfront.jpg';
import Camping from '../../Images/icons/Camping.jpg';
import farm from '../../Images/icons/farm.jpg';
import HistoricalHomes from '../../Images/icons/Historical-homes.jpg';
// import IconicCities from '../../Images/icons/Iconic-cities.jpg';
import Pools from '../../Images/icons/Pools.jpg';
import Lakefront from '../../Images/icons/Lakefront.jpg';
import Trending from '../../Images/icons/Trending.jpg';
import TinyHomes from '../../Images/icons/Tiny-homes.jpg';
import Rooms from '../../Images/icons/Rooms.jpg';
import FeatureLayout from '../../components/Become-a-Host/FeatureLayout';

import { ChangeUsername } from '../../Redux/Actions/ChangeUserName';
const Structure = ({ structure, setStructure,userName ,ChangeUsername,ListingReducer}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.username,"data")
        ChangeUsername(data.username)
       // Assuming the server sends the username as a plain string
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);
  console.log(ListingReducer)
  console.log(userName,"username")
  const Titledata={
    title:"this is title",
    detail:"this is detail"
  }
  const optionData = [
    { optionName: 'House', optionIcon: AmazingView },
    { optionName: 'Flat/Appartment', optionIcon: HistoricalHomes },
    { optionName: 'Barn', optionIcon: Pools },
    { optionName: 'Boat', optionIcon: Beachfront },
    { optionName: 'Cabin', optionIcon: Lakefront },
    { optionName: 'Campervan/Motorhome', optionIcon: Pools },
    { optionName: 'Castle', optionIcon: AmazingView },
    { optionName: 'Cave', optionIcon: farm },
    { optionName: 'Container', optionIcon: Rooms },
    { optionName: 'Dome', optionIcon: AmazingView },
    { optionName: 'Earth Home', optionIcon: AmazingView },
    { optionName: 'Farm', optionIcon: farm },
    { optionName: 'Camping', optionIcon: Camping },
    { optionName: 'Rooms', optionIcon: Rooms },
    { optionName: 'Hotels', optionIcon: Trending },
    { optionName: 'Tiny-Homes', optionIcon: TinyHomes },
    // You can add more options here
  ];
  
  return (
    <main className={`fade-in ${isLoading ? 'loading' : ''}`}>
      <TitleComponent
        title={Titledata.title}
        description={Titledata.detail}
      />
      <FeatureLayout
      
      optionData={optionData}
      setOption={setStructure}
      selectedOptions={structure}
    />
    </main>
  )
};


const mapStateToProps = (state) => {
  return {
    structure: state.ListingReducer.structure,
    userName:state.ListingReducer.userName,
    ListingReducer:state.ListingReducer
  };
};

const mapDispatchToProps = {
  setStructure,
  ChangeUsername
};

export default connect(mapStateToProps, mapDispatchToProps)(Structure);