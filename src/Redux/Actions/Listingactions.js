// listingActions.js


  // Define other actions here...
  
  export const addPhoto = (payload) => ({
    type: 'ADDPHOTO',
    payload,
  });
  
  export const getDiscounts = (payload) => ({
    type: 'ADDDISCOUNT',
    payload,
  });
  
  export const addLegal = (payload) => ({
    type: 'ADDLEGAL',
    payload,
  });
  
  export const setTitle = (payload) => ({
    type: 'SETTITLE',
    payload,
  });
  export const setDescription = (payload) => ({
    type: 'SETDESCRIPTION',
    payload,
  });
  export const setPrice = (payload) => ({
    type: 'SETPRICE',
    payload,
  });
  export const setId = (payload) => ({
    type: 'SETID',
    payload,
  });

  export  const setStructure=(value)=>({
      type: 'GETSTRUCTURETYPE',
      payload: value,
  })

  export const setPrivacyType= (option)=>({
    type: 'GETPRIVACYTYPE',
    payload: option,
})

export const setLocation=(option)=>({
  type: 'GETLOCATION',
  payload: option,
})


export const setFloorPlan=(type,count)=>{
  if(type==='guest'){
      return ({
          type: 'GETFLOORPLAN-GUEST',
          payload: count,
      })
  }
  else if(type==='bed'){
      console.log("bed")
      return({
          type: 'GETFLOORPLAN-BED',
          payload: count,
      })
  }else{
      return({
          type: 'GETFLOORPLAN-BATHROOM',
          payload: count,
      })
  }
}



export const setAmenities=(amenities)=>({
    
  type: 'ADDAMENITIES',
  payload: amenities,
})

