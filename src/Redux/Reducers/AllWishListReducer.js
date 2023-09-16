initialState={
    allWishList:[]
}

const AllWishListReducer=(state = initialState, action)=>{
    switch (action.type) {

      
        case 'SETWISHLIST':
          
          return {
            ...state,
            rooms: action.payload, // Toggle the value
          };
        default:
          return state;
      }
    };

export default AllWishListReducer;