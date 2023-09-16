import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import setRooms from '../Redux/Actions/setRooms'
import '../styles/CommonTransition.css'
import '../App.css'
import Card from '../components/Card'
import setAllWishList from '../Redux/Actions/setAllWishList'

const Home = ({userName,rooms,setRooms,setAllWishList,allWishList}) => {
  const [active,setActive]=useState("Amazing-View")
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 160);
  }, []);
  
  useEffect(() => {
    
    fetch('https://airbnbcloneshantanu.onrender.com/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filterName: "Amazing-View" })
    })
    .then(response => response.json())
    .then(data => {
      setRooms(data);
      console.log(data,"iguyggugyug")
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [setRooms]); // Pass an empty array as the second argument

  useEffect(()=>{
    fetch(`https://airbnbcloneshantanu.onrender.com/getWishlist/${userName}`)
    .then((response)=>response.json())
    .then((data)=>setAllWishList(data))
  },[setAllWishList,userName])
  
 
  
  


  function currentSelected(filterName) {
    setActive(filterName); // Assuming setActive is a state setter function for your active filter state
  
    fetch('https://airbnbcloneshantanu.onrender.com/filter', {
      method: 'POST', // Set the HTTP method
      headers: {
        'Content-Type': 'application/json' // Specify the content type
      },
      body: JSON.stringify({ filterName }) // Send filterName as JSON in the request body
    })
    .then(response => response.json()) // Call .json() to parse response data
    .then(data => {
      setRooms(data)
      console.log(data)
      
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
            <Card key={room._id}  image={room.photos[0]} location={room.location} price={room.price}  roomData={room} allWishList={allWishList} />
         ))} 
           
         
            
        </div>
    </main>
  )
}
const mapStateToProps = (state) => {
  return {
    rooms: state.AllRoomsDetailsReducer.rooms,
    userName:state.userName.userName,
    allWishList:state.AllWishListReducer.allWishList
    
  };
};

const mapDispatchToProps = {
  setRooms,
  setAllWishList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);