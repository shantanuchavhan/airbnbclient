// src/someReducer.js
const initialState = {
    isFooterHeader: true,
  };
  
  const FooterHeaderNoneReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'TOGGLEHEADERFOOTER':
        return {
          ...state,
          isFooterHeader: action.payload, // Toggle the value
        };
      default:
        return state;
    }
  };
  
  export default FooterHeaderNoneReducer;
  
  