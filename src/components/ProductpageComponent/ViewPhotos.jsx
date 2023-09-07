import React from 'react'
import '../../styles/ProductPage.css'
const ViewPhotos = ({photos}) => {
  return (
    <div className="viewPhotos">
        {photos.map((photo)=>(
            <img className="viewPhotos-img" src={"http://localhost:5000/" + photo} alt="" />

        ))}
      
    </div>
  )
}

export default ViewPhotos
