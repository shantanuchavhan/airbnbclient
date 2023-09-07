// src/someReducer.js
const initialState = {
    isListSetupActive:false
  };
  
const ListSetupReducer = (state = initialState, action) => {
    switch (action.type) {

      
      case 'LISTSETUPACTIVE':
        
        return {
          ...state,
          isListSetupActive: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ListSetupReducer;
  
  