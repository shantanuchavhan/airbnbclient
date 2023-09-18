const initialState = {
    userData: [],
  };
  
  const UserProfileReduxer= (state = initialState, action) => {
    
    switch (action.type) {
      case 'CHANGEUSERDATA':
       
        return {
          ...state,
          userData: action.payload, // Corrected property name
        };
      default:
        return state;
    }
    
  };
  
  export default UserProfileReduxer;
  