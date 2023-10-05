// src/someReducer.js
const initialState = {
    isFooterHeader: false,
  };
  
  const FooterHeaderNoneReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'TOGGLE':
        return {
          ...state,
          isFooterHeader: action.payload, // Toggle the value
        };
      default:
        return state;
    }
  };
  
  export default FooterHeaderNoneReducer;
  
  