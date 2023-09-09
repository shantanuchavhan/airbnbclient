
import './App.css';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/home';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HostingPage from './Pages/HostingPage';
import HostHome from './components/HostHomeComponent/HostHome';

import BookingPage from './Pages/BookingPage';
import BecomeHomeLayout from './components/Become-a-Host/Layout'
import AboutYourPlace from './Pages/BecomeAHostPages/AboutYourPlace';

import PrivacyType from './Pages/BecomeAHostPages/PrivacyType';
import Location from './Pages/BecomeAHostPages/Location';
import FloorPlan from './Pages/BecomeAHostPages/FloorPlan';
import Photos from './Pages/BecomeAHostPages/Photos';
import StandOut from './Pages/BecomeAHostPages/StandOut';
import Amenities from './Pages/BecomeAHostPages/Amenities';
import Title from './Pages/BecomeAHostPages/Title';
import Description from './Pages/BecomeAHostPages/Description';
import FinishSetup from './Pages/BecomeAHostPages/FinishSetup';

import Price from './Pages/BecomeAHostPages/Price';
import Discount from './Pages/BecomeAHostPages/Discount';
import TripsPage from './Pages/TripsPage';
import PublishCelebration from './Pages/BecomeAHostPages/PublishCelebration';
import Structure from './Pages/BecomeAHostPages/Structure';
import OverView from './Pages/BecomeAHostPages/OverView'

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home/> } />
          <Route path='/Product' element={ <ProductPage/> } />
          <Route path='/Login' element={ <LoginPage/> } />
          <Route path='/Register' element={ <RegisterPage/> } />
          <Route path='/Hosting' element={ <HostingPage/> } />
          <Route path='/Trips' element={ <TripsPage/>} />
          
        </Route>

        <Route path='/host/home' element={<HostHome/>} />
        <Route path='/Booking' element={<BookingPage/>} />
        <Route path='/Become-a-Host' element={<BecomeHomeLayout/>} >
          <Route path='/Become-a-Host/overview' element={ <OverView/> } />
          <Route path='/Become-a-Host/about-your-place' element={ <AboutYourPlace/> } />
          <Route path='/Become-a-Host/structure' element={ <Structure/> } />
          <Route path='/Become-a-Host/privacy-type' element={ <PrivacyType/> } />
          <Route path='/Become-a-Host/location' element={ <Location/> } />
          <Route path='/Become-a-Host/floor-plan' element={ <FloorPlan/> } />
          <Route path='/Become-a-Host/stand-out' element={ <StandOut/> } />
          <Route path='/Become-a-Host/amenities' element={ <Amenities/> } />
          <Route path='/Become-a-Host/photos' element={ <Photos/> }/>
          <Route path='/Become-a-Host/title' element={ <Title/> } />
          <Route path='/Become-a-Host/Description' element={ <Description/> } />
          <Route path='/Become-a-Host/finish-setup' element={ <FinishSetup/> } />
          <Route path='/Become-a-Host/price' element={ <Price/> } />
          <Route path='/Become-a-Host/discount' element={ <Discount/> } />
          <Route path='/Become-a-Host/publish-celebration' element={ <PublishCelebration/> } />
        </Route>


       
      </Routes>
    </Router>
  );
}

export default App;
