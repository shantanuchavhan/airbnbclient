import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import setRooms from '../Redux/Actions/setRooms'
import '../styles/CommonTransition.css'
import '../App.css'
import Card from '../components/Card'
const Home = ({rooms,setRooms}) => {
  const [active,setActive]=useState("Amazing-View")
  const [noResponse,setNoResponse]=useState()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 160);
  }, []);
  
  useEffect(() => {
    console.log(active, "active");
    fetch('http://localhost:5000/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filterName: "Amazing-View" })
    })
    .then(response => response.json())
    .then(data => {
      setRooms(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []); // Pass an empty array as the second argument
  
 
  
  


  function currentSelected(filterName) {
    setActive(filterName); // Assuming setActive is a state setter function for your active filter state
  
    fetch('http://localhost:5000/filter', {
      method: 'POST', // Set the HTTP method
      headers: {
        'Content-Type': 'application/json' // Specify the content type
      },
      body: JSON.stringify({ filterName }) // Send filterName as JSON in the request body
    })
    .then(response => response.json()) // Call .json() to parse response data
    .then(data => {
      setRooms(data)
      console.log(rooms)
      
    })
    .catch(error => {
      // Handle any errors that might occur during the fetch
      console.error('Error fetching data:', error);
    });
  } 
  return (
    <main className={`mainComponentHome fade-in ${isLoading ? 'loading' : ''}`}>
        <Filters active={active} currentSelected={currentSelected} />
        <div className="roomImages">
         {rooms.map((room,index)=>(
            <Card image={room.photos[0]} location={room.location} price={room.price} id={room._id} roomData={room} />
         ))} 
           
         
            
        </div>
    </main>
  )
}
const mapStateToProps = (state) => {
  return {
    rooms: state.AllRoomsDetailsReducer.rooms
    
  };
};

const mapDispatchToProps = {
  setRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);