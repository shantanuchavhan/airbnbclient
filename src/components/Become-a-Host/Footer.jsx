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
    try {
      const url = listing.id
        ? `https://airbnbcloneshantanu.onrender.com/api/listings/${listing.id}`
        : 'https://airbnbcloneshantanu.onrender.com/api/listing';
  
      const method = listing.id ? 'PUT' : 'POST';
  
      const formData = new FormData(); // Create a FormData object for handling multipart/form-data
  
      // Append your form fields to formData
      formData.append('field1', value1); // Replace 'field1' and value1 with your field name and value
      formData.append('field2', value2); // Replace 'field2' and value2 with your field name and value
      // ...
  
      // Append your file input field to formData
      formData.append('photos', fileInput.files[0]); // Replace 'photos' with your file input name
  
      fetch(url, {
        method,
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (listing.id) {
            alert('Listing updated successfully');
          } else {
            alert('Listing created successfully');
          }
          setCurrentUserListings([...currentUserListings, ...data.listings]);
        })
        .catch(error => {
          alert(`Error: ${error.message}`);
          console.error('Fetch Error:', error);
        });
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error('Fetch Error:', error);
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
