import React from 'react'
import PinkButton from '../PinkButton'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../Button'
const Payment = ({currentProduct,userName, tripData,setPayment,setTripData}) => {
    const navigate=useNavigate()
    const startDateString = tripData.startDate;
    const startDate = new Date(startDateString).getDate();
    const endDateString = tripData.endDate;
    const endDate = new Date(endDateString).getDate();
    let monthShortNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let monthName = monthShortNames[new Date(endDateString).getMonth()]
    function Reserve() {
        if(userName===""){
            setIsLoginRequired(true)
        }else{
            const data = {
                user: userName,
                owner: currentProduct.ownerName,
                listing:currentProduct.title,
                listingId:currentProduct._id,
                startDate: tripData.startDate,
                endDate: tripData.endDate,
                guestCount: tripData.guest,
                ReservationAmount:tripData.totalAmount
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
                
                setTripData(data=>{return {...data,startDate:null}});
                setTripData(data=>{return {...data,endDate:null}});
                setTripData(data=>{return {...data,guest:null}});

               
            })
            .catch(error => {
                alert(error); // Display errors and network issues
            });
        }    
    }
    
    
  return (
    <div>
        <div className="PaymentHeading" >
            <svg onClick={()=>navigate("/Product")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <h2>Confirm and pay</h2>
        </div>
        <div className="PaymentMobile_Product PaymentMobile_section"  >
            <img className="PaymentMobile_Product_img" src={currentProduct.photos[0]} alt="" />
            <div className="PaymentMobile_Product_details" >
                <div>
                    <h3>{currentProduct.privacyType}</h3>
                    <h2>{currentProduct.title}</h2>
                </div>
                <div className="details1-link">
                <div>
                <h4 className='Rating ReservationBox__section1__averageRating' >{currentProduct && currentProduct.averageRating !== undefined ? currentProduct.averageRating.toFixed(1) : 0}
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" className='fillRatingSvg' d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </h4>
                <div>
                    <h1>.</h1></div>
                    <h4>Superhost</h4>  
                </div>
            </div>
            </div>
        </div> 
        <div className="PaymentMobile_TripDetails PaymentMobile_section">
            <h2>Your Trip</h2>
            <div className="PaymentMobile_TripDetails_attributes">
                <div>
                    <h3>Dates</h3>
                    
                    <h4>{startDate}-{endDate} {monthName}</h4>
                     
                </div>
                <span onClick={()=>setPayment(false)} >Edit</span>
            </div>
            <div className="PaymentMobile_TripDetails_attributes">
                <div>
                    <h3>Guests</h3>
                    <h4>1 guest</h4>
                </div>
                <span onClick={()=>setPayment(false)}  >Edit</span>
            </div>      
        </div> 
        <div className="PaymentMobile_paymentdetails PaymentMobile_section" >
            <h2>Price details</h2>
            <div className="displayFlex justifycontainBtn border-bot">
                <h3>{currentProduct.price}Rs Price X {tripData.totalDays} nights </h3>
                <h3>{tripData.totalAmount}. Rs</h3>
            </div>
            <div className="displayFlex justifycontainBtn" >
                <span>Total (INR):- </span>
                <span>{tripData.totalAmount}. Rs</span>
            </div>

        </div> 
        
            {tripData.currentUser===""?(
                <div className="PaymentMobile_section" >
                    <PinkButton BtnName="Login Required" link="/Login" />
                </div>
            ):(
                <div>
                    <div className="PaymentMobile_section" >
                        <h2>Pay with</h2>
                        <div className="PaymentMobile_paymentType">
                            <div className="displayFlex gap8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <h4>Credit or debit card</h4>
                            </div>
                            <h3>Edit</h3>
                        </div>
                    </div>
                    <div className="PaymentMobile_section">
                        <h2>Required for your trip</h2>
                        <div className="displayFlex justifycontainBtn">
                            <div>
                                <h4>Phone number</h4>
                                <p>Add and confirm your number to get trip updates</p>
                            </div>
                            <Button BtnName="Add"/>
                        </div>
                    </div>
                    <div className="PaymentMobile_section" >
                        <h2>Cancellation policy</h2>
                        <div>
                            <div>
                                <p>Free cancellation for 48 hours. Cancel before 27 Oct for a partial refund.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="PaymentMobile_section">
                        <h3 >
                            Ground rules</h3>
                        <div >
                            <div>
                                <p>We ask every guest to remember a few simple things about what makes a great guest.
                                    Follow the house rules
                                    Treat your Host’s home like your own</p>
                            </div>
                        </div>
                    </div>
                    <div className="PaymentMobile_section">
                    <PinkButton action={Reserve()} BtnName="Confirm and pay"/>
                    </div>
                </div>
                
            ) }
            
        
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

  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Payment); 

