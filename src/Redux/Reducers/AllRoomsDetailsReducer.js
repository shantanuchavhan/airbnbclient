// src/someReducer.js
const initialState = {
    rooms:[]
  };
  
const AllRoomsDetailsReducer = (state = initialState, action) => {
    switch (action.type) {

      
      case 'SETROOMS':
        console.log(action.payload,"ayfdftfdyue")
        return {
          ...state,
          rooms: action.payload, // Toggle the value
        };
      default:
        return state;
    }
  };
  
  export default AllRoomsDetailsReducer;