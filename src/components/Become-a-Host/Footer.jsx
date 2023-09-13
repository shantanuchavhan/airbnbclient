import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../../styles/BecomeAHost/BecomeAHostPages.css';
import { connect } from 'react-redux';
import setCurrentUserListings from '../../Redux/Actions/setCurrentUserListings';

const Footer = ({ listing,userName ,setCurrentUserListings,currentUserListings}) => {
  const [lastPage, setLastPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPathName = location.pathname.split('/').pop();

  useEffect(() => {
    if (currentPathName === 'publish-celebration') {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }, [currentPathName]);


  const PageList = [
    "overview", "about-your-place", "structure", "privacy-type", "location",
    "floor-plan", "stand-out", "amenities", "photos", "title", "description",
    "finish-setup", "price", "discount", "publish-celebration"
  ];

  const currentIndex = PageList.indexOf(currentPathName);

  const Next = () => {
    if (currentIndex < PageList.length - 1) {
      const nextPath = '/Become-a-Host/' + PageList[currentIndex + 1];
      navigate(nextPath);
    } else {
      setLastPage(true);
    }
  };

  const Back = () => {
    if (currentIndex > 0) {
      const prevPath = '/Become-a-Host/' + PageList[currentIndex - 1];
      navigate(prevPath);
    }
  };

  const userData=userName
  // console.log(userData.userName,"userData.userName")
  let formData=new FormData()
  for (let i = 0; i < listing.photos.length; i++) {
    console.log(listing.photos[i], "listingPhotos");
    formData.append('photos',listing.photos[i])   
  }
  listing={...listing,ownerName:userData.userName}
 
  formData.append('listing', JSON.stringify(listing));
  
  
  

  
  function CreateAListing() {
 if (listing.id !== null) {
  const url = `https://airbnbcloneshantanu.onrender.com/listings/${listing.id}`;

  fetch(url, {
    method: 'PUT',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert('Listing updated successfully');
      console.log(data, "datalog");
      setCurrentUserListings([...currentUserListings, ...data.listings]);
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
      console.error('Fetch Error:', error);
    });
}else{
    fetch('https://airbnbcloneshantanu.onrender.com/listing', {
  method: 'POST',
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok',response.error);
    }
    return response.json();
  })
  .then(data => {
    alert('Listing created succesfully')
    console.log(data,"datalog")
    setCurrentUserListings([...currentUserListings,...data.listings])
    // 
    
  })
  .catch(error => {
    alert(error)
    console.error('Fetch Error:', error);
  });

  }
    

  
  


  }

  

  return (
    <div className="footer">
      <div>
        <button className='BackFooterBtn' onClick={Back}>Go Back</button>
      </div>
      {!lastPage ? (
        <div>
          <button className='nextFooterBtn' onClick={Next}>Next</button>
        </div>
      ) : (
        <div>
          <Link className='Links' onClick={CreateAListing} to='/hosting'><h3 className="PublishListing">Publish Listing</h3></Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listing: state.ListingReducer,
    userName:state.userName,
    currentUserListings:state.currentUserListingsReducer.currentUserListings
  };
};

const mapDispatchToProps = {
 
 setCurrentUserListings
  
  
};

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
