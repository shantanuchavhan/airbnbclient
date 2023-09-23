import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import setRooms from '../Redux/Actions/setRooms';
import '../styles/CommonTransition.css';
import '../App.css';
import Card from '../components/Card';
import setAllWishList from '../Redux/Actions/setAllWishList';

const Home = ({ userName, rooms, setRooms, setAllWishList, allWishList }) => {
  const [active, setActive] = useState("Amazing-View");
  const [isLoadingText, setIsLoadingText] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 160);
  }, []);

  useEffect(() => {
    fetchRoomsData(active); // Fetch initial data based on the default filter
  }, [active]);

  useEffect(() => {
    fetch(`https://airbnbcloneshantanu.onrender.com/getWishlist/${userName}`)
      .then((response) => response.json())
      .then((data) => setAllWishList(data))
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  }, [setAllWishList, userName]);

  function fetchRoomsData(filterName) {
    setIsLoadingText(true);
    setIsError(false);
    fetch('https://airbnbcloneshantanu.onrender.com/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filterName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoadingText(false);
        setRooms(data);
      })
      .catch((error) => {
        setIsError(true);
        console.error('Error fetching data:', error);
      });
  }

  function currentSelected(filterName) {
    setActive(filterName);
    fetchRoomsData(filterName);
  }

  return (
    <main className={`mainComponentHome fade-in ${isLoading ? 'loading' : ''}`}>
      <Filters active={active} currentSelected={currentSelected} />
      {isLoading ? (
        <main>
          <h1>Loading...</h1>
        </main>
      ) : isError ? (
        <main>
          <h1>Sorry, failed to load...</h1>
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
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.AllRoomsDetailsReducer.rooms,
    userName: state.userName.userName,
    allWishList: state.AllWishListReducer.allWishList,
  };
};

const mapDispatchToProps = {
  setRooms,
  setAllWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
