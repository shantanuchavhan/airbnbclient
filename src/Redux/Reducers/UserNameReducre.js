const initialState = {
    userName: "",
  };
  
  const UserNameReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'ChangeUsername':
       
        return {
          ...state,
          userName: action.payload, // Corrected property name
        };
      default:
        return state;
    }
    
  };
  
  export default UserNameReducer;
  