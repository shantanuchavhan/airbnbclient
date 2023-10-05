import React  from 'react'
import { useState } from 'react'

import GuestBar from '../components/GuestBar'
import RatingReview from '../components/ProductpageComponent/RatingReview'
import ProductPageMobile from './ProductPageMoile'
import { connect } from 'react-redux'
import setCurrentProduct from '../Redux/Actions/setCurrentProduct'
import { useRef,useEffect } from 'react'
import ValidityMessge from '../components/ValidityMessge'
import ViewPhotos from '../components/ProductpageComponent/ViewPhotos'
import SetIsBooking from '../Redux/Actions/SetIsBooking'
import '../styles/ProductPage.css'

import ViewReviews from '../components/ProductpageComponent/ViewReviews'




const ProductPage = ({currentProduct,userName,SetIsBooking}) => {
    const [isGuestBarActive,setIsGuestBarActive]=useState(false)
    const [isScrollDown,setIsScrollDown]=useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [AdultCount,setAdultCount]=useState(0)
    const [ChildCount,setChildCount]=useState(0)
    const [InfantCount,setInfantCount]=useState(0)
    const [PetCount,setPetCount]=useState(0)

    const [isFixed, setIsFixed] = useState(false);
    const [isAvailable,setIsAvailable]=useState(null)


    useEffect(() => {
        const handleResize = () => {
            console.log("Window resized");
            setWindowWidth(window.innerWidth);
          };
          
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // <-- Remove this empty dependency array or add dependencies as needed
      

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollThreshold = 580; // Adjust this value as needed
    console.log(window.scrollY,scrollThreshold)
    if (window.scrollY > scrollThreshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

    // const today = new Date();
    // const defaultStartDate = today.toISOString().substr(0, 10); // Format as YYYY-MM-DD

    // const tomorrow = new Date(today);
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // const defaultEndDate = tomorrow.toISOString().substr(0, 10); // Tomorrow's date


    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);

    const [totalGuestCount,setTotalGuestCount]=useState(0)
    const [totalReservationAmount,setTotalReservationAmount]=useState(0)

    const [isLoginRequired,setIsLoginRequired]=useState(false)

    const [isViewPhotos,setIsViewPhotos]=useState(false)
    const [isViewReview,setIsViewReview]=useState(false)


    const headerRef = useRef(null);
     useEffect(() => {
        const handleClickOutside = (event) => {
          if (headerRef.current && !headerRef.current.contains(event.target)) {
            setIsGuestBarActive(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);


   let updatedStartDate=0
   let updatedEndDate=0
  console.log(currentProduct,'currentttt')

  

  function getTotalReservationAmount(data,datename) {
    if(datename==="updatedStartDate"){
        console.log(data,endDate,"datehhjhj")
        setStartDate(data);
        if (data && endDate) {
            
            const start = new Date(data);
            const end = new Date(updatedEndDate);
            const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    
            const totalDays = Math.round(Math.abs((end - start) / oneDay)) + 1;
            console.log(totalDays,"Total Days")
            const totalAmount = totalDays * currentProduct.price;
    
            setTotalReservationAmount(totalAmount); // Update the state with the calculated total amount
        } else {
            setTotalReservationAmount(0); // Set total amount to 0 if dates are not selected
        }

    }
    else{
        setEndDate(data);

        if (startDate && data) {
            
            const start = new Date(startDate);
            const end = new Date(data);
            const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    
            const totalDays = Math.round(Math.abs((end - start) / oneDay)) + 1;
            console.log(totalDays,"Total Days")
            const totalAmount = totalDays * currentProduct.price;
    
            setTotalReservationAmount(totalAmount); // Update the state with the calculated total amount
            checkAvailability()
           
        } else {
            setTotalReservationAmount(0); // Set total amount to 0 if dates are not selected
            checkAvailability()
        }

    }
    console.log(startDate,endDate,"dates")
    
}
  
  

    function getGuestBar(){
        setIsGuestBarActive(!isGuestBarActive)
        setIsScrollDown(!isScrollDown)

    }

  
    function Reserve() {
        if(userName===""){
            setIsLoginRequired(true)
        }else{
            const data = {
                user: userName,
                owner: currentProduct.ownerName,
                listing:currentProduct.title,
                listingId:currentProduct._id,
                startDate: startDate,
                endDate: endDate,
                guestCount: totalGuestCount,
                ReservationAmount:totalReservationAmount
            };
            fetch('https://airbnbcloneshantanu.onrender.com/Reserve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    // Handle successful response
                    return response.json(); // If the server sends a JSON response
                } else {
                    throw new Error(response.error);
                }
            })
            .then(data => {
                alert("Reserve Succesfull"); // Display the success response data
                setStartDate(null)
                setEndDate(null)
                setTotalGuestCount(0)
            })
            .catch(error => {
                alert(error); // Display errors and network issues
            });
        }    
    }

    
        
   
          

    function checkAvailability() {
        for (const booking of currentProduct.bookingDates) {
          const existingStartDate = new Date(booking.startDate);
          const existingEndDate = new Date(booking.endDate);
          const proposedStartDate = new Date(startDate);
          const proposedEndDate = new Date(endDate);
          console.log(existingStartDate,existingEndDate,proposedStartDate,proposedEndDate,"proposedEndDate","existingStartDate","existingEndDate","proposedStartDate")
      
          // Check for overlap
          if (
            (proposedStartDate >= existingStartDate && proposedStartDate < existingEndDate) ||
            (proposedEndDate > existingStartDate && proposedEndDate <= existingEndDate)
          ) {
            console.log(false)
            setIsAvailable(false)
            // There is an overlap, so the proposed booking is not available
            return false;
          }
        }
        console.log(true)
        setIsAvailable(true)
      
        // No overlap found, so the proposed booking is available
        return true;
      }
      const handleViewPhotosClick = () => {
       setIsViewPhotos(true);
      };
      const handleViewReviewsClick = () => {
        setIsViewReview(!isViewReview); // Toggle the state value
      };


    
    
    

  return (
    <div>
    {windowWidth <= 768 ? (
      <ProductPageMobile currentProduct={currentProduct} userName={userName} SetIsBooking={SetIsBooking} />
    ) : (
        <main className='ProductMain' ref={headerRef}>
        <div>
          <div className="details-1">
            <h1>{currentProduct?.title||""}</h1>
            <div className="details1-link">
                <div>
                <h4 onClick={handleViewReviewsClick} className='Rating ReservationBox__section1__averageRating' >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}

            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            </h4>
            <div>
                <h1> </h1></div>
                <h5>Superhost</h5>
                <div><h1> </h1></div>
                <h5 className="location">{currentProduct.location}</h5>
                </div>
                <div>
                    <h5>Share</h5>
                    <h5>Save</h5>
                </div>
            </div>
        </div>
       
        <div className="image-section">
        
        <div className="image-section__imgShow"  onClick={handleViewPhotosClick}>
            
            <img className="image-section__imgShow__coverimg" src={currentProduct.photos[0]} alt="" />
            
            <div className="image-section__imgShow-gridLayout">
                {currentProduct.photos.map((photo, index) => {
                    index+=1
                    if (index < 5) {
                    return <img key={index} src={photo} alt="" />;
                    }
                    return null;
                })}
            </div>


            </div>
            
        </div>
        {isViewPhotos? 
        <div className="ViewPhotos-container">
            <ViewPhotos photos={currentProduct.photos}/>
            <svg className="ViewPhotos-container-exit" onClick={()=>setIsViewPhotos(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>

        </div>
        :""}

       
       {
        isViewReview? 
        <div className="ViewReviews-container">
            <ViewReviews 
        reviews={currentProduct.reviews} 
        userName={userName}
        listingOwner={currentProduct.ownerName}
        listingId={currentProduct._id}


        />
        <svg className="ViewReviews-container-exit" onClick={()=>setIsViewReview(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        </div>
            :""
        }
        <article>
            <div className='Description-1'>
                <div>
                <h2>Farm stay Hosted By {currentProduct.ownerName}</h2>
                <div className='Features'>
                    <h5>{currentProduct.floorplan.guestCount||currentProduct.floorplan.guest} Guests</h5>
                    <div><h1> </h1></div> 
                    <h5>{currentProduct.floorplan.bedCount||currentProduct.floorplan.bed} Bedroom</h5>
                    <div><h1> </h1></div>
                    <h5>{currentProduct.floorplan.bedCount+1||currentProduct.floorplan.bed+1} Bathroom</h5>
                    <div><h1> </h1></div>
                    <h5>{currentProduct.floorplan.bathroomCount+1||currentProduct.floorplan.bathroom+1} Bathroom</h5>
                    <div><h1> </h1></div>
                </div>
               
                </div> 
                <img src={"https://airbnbcloneshantanu.onrender.com/"+ currentProduct.photos[0]} alt="hghj" className="Ownerimg" />
                <div style={{display:'flex', gap:'24px',alignItems:'center' }}>
                    <h3>Rs.{currentProduct.price} </h3><span style={{color:'gray'}}>ninght</span>
                    <div className='Rating'>
                        <h4 onClick={handleViewReviewsClick}  className='ReservationBox__section1__averageRating' >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}
                <svg      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                </h4>
                <h4 onClick={handleViewReviewsClick}  >{currentProduct.reviews.length} Reviews</h4>
                    </div>
                </div>
            </div>
            <div className="descroptions description-2">
        

                    <div>
                        <h4>Self check-in</h4>
                        <h5>You can check in with the doorperson</h5>
                    </div>
                    <div>
                        <h4>Great check-in experiance</h4>
                        <h5>92% of recent guest in witrh the check in process a 5-star Rating</h5>
                    </div>
                    <div>
                        <h4>Free Cancelation before 5 Aug</h4>
                       
                    </div> 
                
            </div>
            <div className="descroptions description-3">
                <p>{currentProduct.description}</p>
                <span href="">Show more left arrow</span >
            </div>

            <div className="descroptions description-4">
                <h2>Where you will sleep</h2>
                <div className='sleep-info'>
                    <h3>Bedroom</h3>
                    <h4>1 Queen bed,1 single bed</h4>
                </div>
            </div>
            <div className="descroptions description-5">
                <h2>What this place offer</h2>
                <div className="FeatureList">
                    {currentProduct.amenities.map((amenity)=>(
                        <div>
                            <h4>{amenity}</h4>
                        </div>
                    )

                    )}
                    
                </div>
               
            </div>
            {/* <div className="descroptions descroption-6">
                <h2>Select Check-in date</h2>
                <h3>Add your travel dates for exact pricing</h3>
                <div className="Calender">
                    Calender

                </div>
            </div> */}
            <div className={`description-7 ${isFixed ? 'fixed' : ''}`}>
                <div className="ReservationBox">
                    <div className='ReservationBox__section1'>
                        <h1>Rs {currentProduct.price} <span style={{color:'#9b9696'}}>night</span></h1>
                        <div>
                            <h4 className='ReservationBox__section1__averageRating' >  
                                <span  onClick={handleViewReviewsClick} >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                
                            </h4>
                           
                            <div onClick={handleViewReviewsClick}  ><h4>{currentProduct.reviews.length} reviews</h4></div>
                        </div>
                    </div>
                    <div className='Inputs-Layout'>
                        <div>
                        <input
                            type="date"
                            value={startDate} // Set the value to the state value
                            className="Inputs-Layout__Input"
                            onChange={(e)=>{
                                updatedStartDate = e.target.value;
                                // Update the state
                                console.log(updatedStartDate)
                                getTotalReservationAmount(updatedStartDate,"updatedStartDate");
                            }}
                            />
                        </div>
                    
                        <div className="border-left">
                        <input
                        
                        type="date"
                        value={endDate} // Set the value to the state value
                        className="Inputs-Layout__Input"
                        onChange={(event) => {
                            updatedEndDate = event.target.value;
                            console.log(updatedEndDate)
                            getTotalReservationAmount(updatedEndDate,"updatedEndDate");
                        }}                       
                        />
                        </div>
                        <div className="GuestCountWrapper" onClick={getGuestBar}>
                            <h5 style={{color:"gray"}}>Total Guests {totalGuestCount}</h5>
                            {isScrollDown ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            }
                        </div>
                        
                    </div>
                    <h4>Total Amount:{totalReservationAmount}</h4>
                    
                        
                    {isAvailable === null ? (
                        <button onClick={checkAvailability}>Check Availability</button>
                        ) : isAvailable === true ? (
                        <button onClick={Reserve}>Reserve</button>
                        ) : (
                        <button>Not Available</button>
                    )}

                    {isLoginRequired ? <div onClick={()=>SetIsBooking(true)}><ValidityMessge  link="/Login" message="Login Required!!:Log in" /></div> : ""}

                        
                </div>
            </div>
            <div className={` ${isFixed ? 'GuestBardivfixed' : 'GuestBardiv'}`}>
            {isGuestBarActive? <GuestBar totalCount={totalGuestCount} setTotalCount={setTotalGuestCount} AdultCount={AdultCount} ChildCount={ChildCount} InfantCount={InfantCount} PetCount={PetCount} setAdultCount={setAdultCount} setChildCount={setChildCount} setInfantCount={setInfantCount} setPetCount={setPetCount} marginTopinPx="10px"/>:""}
            </div>
            
            <RatingReview listingId={currentProduct._id} listingOwner={currentProduct.ownerName} bookedUsers={currentProduct.bookedUsers}/>
        </article>
        </div>
        </main>
            
      )}
      </div> 
  )
}

const mapStateToProps = (state) => {
    return {
      currentProduct: state.CurrentProductReducer.currentProduct,
      userName:state.userName.userName
    };
  };
  
  const mapDispatchToProps = {
    setCurrentProduct,
    SetIsBooking
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPage); 