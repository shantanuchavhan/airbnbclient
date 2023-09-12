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
  // Check if listing.id exists (update) or not (create)
  const isUpdate = listing.id !== null;

  // Define the API endpoint URL
  const apiUrl = isUpdate
    ? `https://airbnbcloneshantanu.onrender.com/api/listings/${listing.id}`
    : 'https://airbnbcloneshantanu.onrender.com/api/listing';

  // Define the HTTP method based on whether it's an update or create
  const httpMethod = isUpdate ? 'PUT' : 'POST';

  // Create a new FormData object and append the listing data
  const formData = new FormData();
  for (const key in listing) {
    formData.append(key, listing[key]);
  }

  // Send the HTTP request to the server
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,

  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Handle success: Listing created or updated
      const successMessage = isUpdate
        ? 'Listing updated successfully'
        : 'Listing created successfully';

      alert(successMessage);
      console.log(data, 'datalog');
      setCurrentUserListings([...currentUserListings, ...data.listings]);
    })
    .catch((error) => {
      // Handle error
      alert(`Error: ${error.message}`);
      console.error('Fetch Error:', error);
    });
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
