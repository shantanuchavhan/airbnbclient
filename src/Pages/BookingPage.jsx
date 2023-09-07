import React from 'react'
import { connect} from 'react-redux'
import Header from '../components/BookingComponent/Header'
import BookingOverviewCard from '../components/BookingComponent/BookingOverviewCard'
import Footer from '../components/Footer'
import setCurrentProduct from '../Redux/Actions/setCurrentProduct'
import LoginPage from './LoginPage'
import '../styles/Booking.css'
const BookingPage = ({currentProduct,userName}) => {
  return (
    <div >
        <Header></Header>
        <div className="BookingPage__main" >
            <div>
                <h1>Confirm and pay</h1>
                <LoginPage/>
                
            </div>
            <div>
                <BookingOverviewCard/>
            </div>
            
        </div>
       

        

        <Footer/>
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
    setCurrentProduct
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
 
