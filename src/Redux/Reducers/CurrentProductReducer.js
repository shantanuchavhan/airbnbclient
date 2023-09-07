// src/someReducer.js
const initialState = {
    currentProduct:null
  };
  
const CurrentProductReducer = (state = initialState, action) => {
    switch (action.type) {

      
      case 'SETCURRENTPRODUCT':
        console.log(action.payload,"ayfdftfdyue")
        return {
          ...state,
          currentProduct: action.payload, // Toggle the value
        };
      default:
        return state;
    }
  };
  
  export default CurrentProductReducer;
  
  