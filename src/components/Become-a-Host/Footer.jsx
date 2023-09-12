import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createOrUpdateListing } from '../../Redux/Actions/listingActions'; // Replace with your actual action

const Footer = ({ listing, userName, createOrUpdateListing }) => {
  const [lastPage, setLastPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPathName = location.pathname.split('/').pop();

  useEffect(() => {
    setLastPage(currentPathName === 'publish-celebration');
  }, [currentPathName]);

  const PageList = [
    'overview', 'about-your-place', 'structure', 'privacy-type', 'location',
    'floor-plan', 'stand-out', 'amenities', 'photos', 'title', 'description',
    'finish-setup', 'price', 'discount', 'publish-celebration'
  ];

  const currentIndex = PageList.indexOf(currentPathName);

  const nextPath = () => {
    if (currentIndex < PageList.length - 1) {
      return `/Become-a-Host/${PageList[currentIndex + 1]}`;
    }
    return null;
  };

  const goBack = () => {
    if (currentIndex > 0) {
      const prevPath = `/Become-a-Host/${PageList[currentIndex - 1]}`;
      navigate(prevPath);
    }
  };

  const handlePublish = async () => {
    try {
      const formData = new FormData();
      for (const photo of listing.photos) {
        formData.append('photos', photo);
      }
      formData.append('listing', JSON.stringify({ ...listing, ownerName: userName.userName }));
      
      const response = await createOrUpdateListing(listing.id, formData);
      if (response) {
        alert('Listing updated successfully');
      } else {
        alert('Listing created successfully');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="footer">
      <div>
        <button className="BackFooterBtn" onClick={goBack}>
          Go Back
        </button>
      </div>
      {!lastPage && (
        <div>
          <button className="nextFooterBtn" onClick={() => navigate(nextPath())}>
            Next
          </button>
        </div>
      )}
      {lastPage && (
        <div>
          <Link className="Links" onClick={handlePublish} to="/hosting">
            <h3 className="PublishListing">Publish Listing</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  listing: state.ListingReducer,
  userName: state.userName,
});

const mapDispatchToProps = {
  createOrUpdateListing, // Replace with your actual action
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
