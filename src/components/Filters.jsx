import React, { useRef, useState,useEffect } from 'react';
import '../styles/Filters.css'; // Make sure to import your CSS file here
import '../styles/CommonTransition.css'
// Import your images
import AmazingView from '../Images/icons/Amazing-views.jpg';
import Beachfront from '../Images/icons/Beachfront.jpg';
import Camping from '../Images/icons/Camping.jpg';
import farm from '../Images/icons/farm.jpg';
import HistoricalHomes from '../Images/icons/Historical-homes.jpg';

import Pools from '../Images/icons/Pools.jpg';
import Lakefront from '../Images/icons/Lakefront.jpg';
import Trending from '../Images/icons/Trending.jpg';
import TinyHomes from '../Images/icons/Tiny-homes.jpg';
import New from '../Images/icons/New.jpg';

const Filters = ({active    ,currentSelected}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);
  
  const filtersContainerRef = useRef(null);
  const filterList = [
    { filterName: 'Amazing-View', filterIcon: AmazingView },
    { filterName: 'Beach-Front', filterIcon: Beachfront },
    { filterName: 'Lake-Front', filterIcon: Lakefront },
    { filterName: 'Farm', filterIcon: farm },
    { filterName: 'New', filterIcon: New },
    { filterName: 'Trending', filterIcon: Trending },
    { filterName: 'Tiny-Homes', filterIcon: TinyHomes },
    { filterName: 'Earth Home', filterIcon: AmazingView },
    { filterName: 'Camping', filterIcon: Camping },
    { filterName: 'Pool', filterIcon: Pools },
    { filterName: 'Cave', filterIcon: HistoricalHomes},
    // ... Add other filters ...
  ];


  

  const scrollRight = () => {
    if (filtersContainerRef.current) {
      filtersContainerRef.current.scrollLeft += 300; // Adjust the value to scroll more/less
    }
  };

  const scrollLeft = () => {
    if (filtersContainerRef.current) {
      filtersContainerRef.current.scrollLeft -= 300; // Adjust the value to scroll more/less
    }
  };

  return (
    <div style={{width:'100vw'}}  className={`filters-container fade-in ${isLoading ? 'loading' : ''}`}>
      <div className="filters" ref={filtersContainerRef}>
        {filterList.map((filter, index) => (
          
          <div className={`filter ${active===filter.filterName ? 'active':""}`} onClick={()=>{currentSelected(filter.filterName)}}>
            <img src={filter.filterIcon} alt="" />
            <h3>{filter.filterName}</h3>
          </div>
        ))}
      </div>
      <button className="scrollbar-left" onClick={scrollLeft}>
        Scroll left
      </button>
      <button className="scrollbar-right" onClick={scrollRight}>
        Scroll right
      </button>
    </div>
  );
};

export default Filters;
