// store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
// Import your root reducer
import GuestToggleReducer from './Reducers/GuestToggleReducer';
// import SearchSectionToggleReducer from './Reducers/SearchSectionToggleReducer';
import UserNameReducer from './Reducers/UserNameReducre';
import ListingReducer from './Reducers/ListingReducers';
import CurrentProductReducer from './Reducers/CurrentProductReducer';
import ListSetupReducer from './Reducers/ListSetupReducer';
import currentUserListingsReducer from './Reducers/currentUserListingsReducer';
import AllRoomsDetailsReducer from './Reducers/AllRoomsDetailsReducer';
import isBookingReducer from './Reducers/isBookingReducer';
import AllWishListReducer from './Reducers/AllWishListReducer';
import UserProfileReduxer from './Reducers/UserProfileReduxer';
import FooterHeaderNoneReducer from './Reducers/FooterHeaderNoneReducer';


const rootReducer = combineReducers({
    guestToggle: GuestToggleReducer,
    CurrentProductReducer:CurrentProductReducer,
    currentUserListingsReducer:currentUserListingsReducer,
    UserProfileReduxer:UserProfileReduxer,
    userName:UserNameReducer,
    ListingReducer:ListingReducer,
    ListSetupReducer:ListSetupReducer,
    AllRoomsDetailsReducer:AllRoomsDetailsReducer,
    isBookingReducer:isBookingReducer,
    AllWishListReducer:AllWishListReducer,
    FooterHeaderNoneReducer:FooterHeaderNoneReducer    
  });



const store = createStore(rootReducer);

console.log(store.getState())

export default store;

