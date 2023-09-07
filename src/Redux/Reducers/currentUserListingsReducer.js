const initialState = {
    currentUserListings: [],
  };


  const currentUserListingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SETCURRENTUSERSLISTING':
        return {
          ...state,
          currentUserListings: action.payload, // Corrected property name
        };
      default:
        return state;
    }
  };
  
  export default currentUserListingsReducer;


  