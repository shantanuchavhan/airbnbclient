import React from 'react'

import '../../styles/HostHome/section4.css'

const QuetionComponent = ({toggleValue,id,Quetiontoggle,Quetion,Answer}) => {
    console.log(id)
  return (
    <div className="section4__Quetions__Quetion">
                  <div className='section4__Quetions__Quetion__heading'>
                    <h3 id={id} onClick={Quetiontoggle} >{Quetion}</h3>
                    {toggleValue[id]==0?<svg className='section4__Quetions__Quetion__down' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>:<svg className='section4__Quetions__Quetion__up' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>}
                    
                    
                  </div>
                  {toggleValue[id]==0||<div className="section4__Quetions__Quetion__Answer">
                    <p>{Answer}</p>
                  </div>
                  }
                </div>
  )
}

export default QuetionComponent