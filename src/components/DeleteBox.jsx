import React from 'react'


const DeleteBox = ({deleteAction,setIsDeleteBox}) => {
   
  return (
    <div>
        <h3>Are You sure</h3>
        <div style={{display:"flex",justifyContent:"space-around",gap:"8px" ,paddingTop:"8px"}}>
            <button onClick={deleteAction} >Yes</button>
            <button onClick={()=>{setIsDeleteBox(null)}} >No</button>
        </div>
    </div>
  )
}

export default DeleteBox