const initialState = {
    isSearchSection: false,
  };
  
  const SearchSectionToggleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCHTOGGLE':
        return {
          ...state,
          isSearchSection: !state.isSearchSection, // Corrected property name
        };
      default:
        return state;
    }
  };
  
  export default SearchSectionToggleReducer;
  