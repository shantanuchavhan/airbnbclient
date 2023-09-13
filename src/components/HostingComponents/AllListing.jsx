import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAmenities,addPhoto ,getDiscounts,setTitle,setDescription,setPrice,setStructure,setPrivacyType, setLocation,setFloorPlan,setId} from '../../Redux/Actions/Listingactions'
import setCurrentProduct from '../../Redux/Actions/setCurrentProduct'
import setCurrentUserListings from '../../Redux/Actions/setCurrentUserListings'
import '../../styles/HostingPage.css'
import DeleteBox from '../../components/DeleteBox';

const AllListing = ({userName,setAmenities,addPhoto ,getDiscounts,setTitle,setDescription,setPrice,setId,setStructure,setPrivacyType, setLocation,setFloorPlan,setCurrentUserListings,setCurrentProduct,currentUserListings}) => {
    const navigate = useNavigate();
    const [isDeleteBox, setIsDeleteBox] = useState(null);
    console.log(userName,"userName")
    useEffect(() => {
      // Use userName and setCurrentUserListings here
      fetch("https://airbnbcloneshantanu.onrender.com/allListing", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }), // Assuming userName is defined elsewhere
      })
        .then((response) => response.json())
        .then((data) => {
          // Use data and setCurrentUserListings here
          setCurrentUserListings(data);
        });
    }, [userName, setCurrentUserListings]); // Dependencies go in the array
    








    function edit(listing){
        setId(listing._id)
        setStructure(listing.structure)
        setPrivacyType(listing.privacyType)
        setLocation(listing.location)
        setFloorPlan(listing.floorplan)
        setAmenities(listing.amenities)
        addPhoto([])
        setTitle(listing.title)
        setDescription(listing.description)
        setPrice(listing.price)
        getDiscounts(listing.discounts)
        // deleteit(listing.title)
        navigate('/Become-a-Host/overview')
       
    
      }
    function deleteit(listing){
        fetch("https://airbnbcloneshantanu.onrender.com/Listing/delete",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title:listing.title}),
        }).then((response)=>{
          if(response.ok){
            console.log(listing,'current deleting ')
            setCurrentUserListings(currentUserListings.filter((deleteListing) => deleteListing !== listing));
            console.log(setCurrentUserListings,"setCurrentUserListings")
    
          }
    
        })
      }
    function ViewListing(listing){
        console.log(listing,"tf6tf6t7f6tft7guh ")
        setCurrentProduct(listing)
        navigate("/Product")
      }
  return (
  <div className="Listings">
    {currentUserListings.length > 0 ? (
      currentUserListings.map((listing) => (
        <div key={listing._id} className="Listing">
          <img onClick={()=>{ViewListing(listing)}} className="ListingImage" src={`https://airbnbcloneshantanu.onrender.com/${listing.photos[0]}`} alt="" />
      <div onClick={()=>{ViewListing(listing)}} className="listing_data"> <h4>{listing.title}</h4></div>
      <div onClick={()=>{ViewListing(listing)}} className="listing_data"> <h4>{listing.price}</h4></div>
      <div className="listing_data" onClick={() => edit(listing)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      </div>
      <div className="listing_data" onClick={()=>setIsDeleteBox(listing._id)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      </div>
          {isDeleteBox === listing._id ? (
            <DeleteBox deleteAction={() => deleteit(listing)} setIsDeleteBox={setIsDeleteBox} />
          ) : null}
        </div>
      ))
    ) : (
      <div className="empty_result">
        <h2>You have no listings.</h2>
      </div>
    )}
  </div>
  )
}



const mapStateToProps = (state) => {
    return {
      userName: state.userName, 
      ListingReducer:state.ListingReducer,
      currentUserListings:state.currentUserListingsReducer.currentUserListings
      
    };
  };
  
  const mapDispatchToProps = {
    setId,
    setStructure,
    setPrivacyType,
    setLocation,
    setFloorPlan,
    setAmenities,
    addPhoto,
    setTitle,
    setDescription,
    setPrice,
    getDiscounts,
    setCurrentProduct,
    setCurrentUserListings
  };
  
export default connect( mapStateToProps,mapDispatchToProps)(AllListing);
 