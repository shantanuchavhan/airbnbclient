

            const initialState = {
              id:null,
              structure: "",
              privacyType: "",
              location: "",
              floorplan: {
                guestCount: 4,
                bedCount: 1,
                bathroomCount: 1
              },
              amenities: [],
              photos: [],
              title: '',
              description: '',
              price: 6000,
              discounts: [],
              reviews: [],
              averageRating: 0, 
              bookedUsers: [],
              bookingDates: [],
            
            };

            const ListingReducer = (state = initialState, action) => {
              switch (action.type) {
                case 'GETSTRUCTURETYPE':
                  console.log(action.payload)
                  return {
                    ...state,
                    structure: action.payload,
                  };
                case 'GETPRIVACYTYPE':
                  console.log(action.payload)
                  return {
                    ...state,
                    privacyType: action.payload,
                  };
                case 'GETLOCATION':
                  console.log(action.payload)
                  return {
                    ...state,
                    location: action.payload,
                  };
                case 'GETFLOORPLAN-GUEST':
                  return {
                    ...state,
                    floorplan: {
                      ...state.floorplan,
                      guestCount: action.payload,
                    },
                  };
                case 'GETFLOORPLAN-BATHROOM':
                  return {
                    ...state,
                    floorplan: {
                      ...state.floorplan,
                      bathroomCount: action.payload,
                    },
                  };
                case 'GETFLOORPLAN-BED':
                  return {
                    ...state,
                    floorplan: {
                      ...state.floorplan,
                      bedCount: action.payload,
                    },
                  };
                case 'ADDAMENITIES':
                  // console.log(action.payload,'actiom')
                  return {
                    ...state,
                    amenities: action.payload,
                  };
                case 'SETTITLE':
                  console.log(action.payload,"title")
                  return {
                    ...state,
                    title: action.payload,
                  };
                case 'SETDESCRIPTION':
                  console.log(action.payload)
                  return {
                    ...state,
                    description: action.payload,
                  };
                case 'SETVISIBILITY':
                  return {
                    ...state,
                    visibility: action.payload,
                  };
                case 'SETPRICE':
                  return {
                    ...state,
                    price: action.payload,
                  };
                case 'SETDISCOUNT':
                  return {
                    ...state,
                    discounts: action.payload,
                  };
                case 'SETLEGAL':
                  return {
                    ...state,
                    legal: action.payload,
                  };
                case 'ADDPHOTO':
                  return {
                    ...state,
                    photos:action.payload,
                  };
                case 'ADDDISCOUNT':
                  return {
                    ...state,
                    discounts:action.payload,
                  };
                case 'ADDLEGAL':
                  return {
                    ...state,
                    legal:action.payload,
                  };
                case 'SETID':
                  return {
                    ...state,
                    id:action.payload,
                  };
                case 'SETREVIEWS':
                  return {
                    ...state,
                    reviews:action.payload,
                  };
                case 'SETAVERAGERATING':
                  return {
                    ...state,
                    averageRating:action.payload,
                  };
                case 'SETBOOKEDUSERS':
                  return {
                    ...state,
                    bookedUsers:action.payload,
                  };
                default: 
                  return state;
              }
            };

            export default ListingReducer;
