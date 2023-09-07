// src/someReducer.js
const initialState = {
  isGuestToggled: false,
};

const GuestToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'TOGGLE':
      return {
        ...state,
        isGuestToggled: action.payload, // Toggle the value
      };
    default:
      return state;
  }
};

export default GuestToggleReducer;

