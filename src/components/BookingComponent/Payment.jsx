import React from 'react'

const Payment = ({currentProduct}) => {
  return (
    <div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <h2>Confirm and pay</h2>
        </div>
        <div>
            <img src="" alt="" />
            <div>
                <h3>{currentProduct.privacyType}</h3>
            </div>
        </div>    
    </div>
  )
}

export default Payment
