import React from 'react'
import '../styles/Gustbar.css'
const GuestBar = ({totalCount,setTotalCount,AdultCount,setAdultCount,ChildCount,setChildCount,InfantCount,setInfantCount,PetCount,setPetCount,marginTopinPx}) => {
    
    const increment = (guestType) => {
        switch (guestType) {
            case 'Adult':
                setAdultCount(AdultCount + 1);
                console.log(AdultCount,"AdultCount")
                setTotalCount(totalCount+1)
                console.log(totalCount,"totalCount")
                break;
            case 'Child':
                setChildCount(ChildCount + 1);
                setTotalCount(totalCount+1)
                break;
            case 'Infant':
                setInfantCount(InfantCount + 1);
                setTotalCount(totalCount+1)
                break;
            case 'Pet':
                setPetCount(PetCount + 1);
                setTotalCount(totalCount+1)
                break;
            default:
                break;
        }
    };

    const decrement = (guestType) => {
        switch (guestType) {
            case 'Adult':
                if (AdultCount > 0) setAdultCount(AdultCount - 1);
                setTotalCount(totalCount-1)
                break;
            case 'Child':
                if (ChildCount > 0) setChildCount(ChildCount - 1);
                setTotalCount(totalCount-1)
                break;
            case 'Infant':
                if (InfantCount > 0) setInfantCount(InfantCount - 1);
                setTotalCount(totalCount-1)
                break;
            case 'Pet':
                if (PetCount > 0) setPetCount(PetCount - 1);
                setTotalCount(totalCount-1)
                break;
            default:
                break;
        }
    };

  return (
    <div style={{position: "absolute", marginTop: marginTopinPx}} className='Guestbar'>
        
        <div className="Guest-Type">
            <div className="Guest-Type-Name">Adult</div>
            <div className='Counting'>
            
            <svg onClick={()=>{decrement('Adult')}}  className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
            </svg>
        
            <div className="count">{AdultCount}</div>
            
            <svg id='adultincrement' onClick={()=>{increment('Adult')}} value={AdultCount} className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            
            </div>
        </div>
        <div className="Guest-Type">
            <div className="Guest-Type-Name">Child</div>
            <div className='Counting'>
                <svg onClick={()=>{decrement('Child')}} className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
                
                <div className="count">{ChildCount}</div>
   
                <svg onClick={()=>{increment('Child')}} className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                

            </div>
                
        </div>
        <div className="Guest-Type">
        <div className="Guest-Type-Name">infant</div>
            <div className='Counting'>
             
                <svg onClick={()=>{decrement('Infant')}} className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
               
                <div className="count">{InfantCount}</div>
                
                <svg onClick={()=>{increment('Infant')}} className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
                
        </div>
        <div className="Guest-Type">

            <div className="Guest-Type-Name">Pet</div>
            <div className='Counting PetCount'>

                <svg className='svg-icons' onClick={()=>{decrement('Pet')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            
                <div className="count">{PetCount}</div>
              
                <svg className='svg-icons' onClick={()=>{increment('Pet')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </div>
        </div>
    </div>
  )
}

export default GuestBar