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
import SetHeaderFooter from '../Redux/Actions/SetHeaderFooter'
const Home = ({userName,rooms,setRooms,setAllWishList,allWishList,SetHeaderFooter}) => {
  const [active,setActive]=useState("Amazing-View")
  const [isLoadingtext, setIsLoadingtext] = useState(true);
  const[isError,setIsError ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    SetHeaderFooter(true)
  },[SetHeaderFooter])


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
      setIsLoadingtext(false)
      setRooms(data);
      console.log(data,"iguyggugyug")
    })
    .catch(error => {
      setIsError(true)
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
    setIsLoadingtext(true)
    fetch('https://airbnbcloneshantanu.onrender.com/filter', {
      method: 'POST', // Set the HTTP method
      headers: {
        'Content-Type': 'application/json' // Specify the content type
      },
      body: JSON.stringify({ filterName }) // Send filterName as JSON in the request body
    })
    .then(response => response.json()) // Call .json() to parse response data
    .then(data => {
      setIsLoadingtext(false)
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
      {isLoadingtext ? (
        <main className="center">
          <h1 className="gray">Loading...</h1>
        </main>
      ) : isError ? (
        <main className="center">
          <h1 className="gray">Sorry, failed to load...</h1>
        </main>
      ) : (
        <div className="roomImagesWrapper">
          <div className="roomImages">
            {rooms.map((room) => (
              <Card key={room._id} roomData={room} allWishList={allWishList} />
            ))}
          </div>
        </div>
      )}
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
  setAllWishList,
  SetHeaderFooter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);