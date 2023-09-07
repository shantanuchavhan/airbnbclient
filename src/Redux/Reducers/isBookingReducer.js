const initialState={
    isBooking:false
}

const isBookingReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'SETISBOOKINGREDUCER':
          return {
            ...state,
            isBooking: action.payload, // Corrected property name
          };
        default:
          return state;
      }
}

export default isBookingReducer;