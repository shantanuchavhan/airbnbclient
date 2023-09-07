import React, {useState} from 'react'
import QuetionComponent from './QuetionComponent'
import '../../styles/HostHome/section4.css'
import '../../styles/HostHome/HostHomes.css'





const Section4 = () => {

    const [toggleValue,setToggleValue]=useState({
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":0
      })

    const Quetions=["Is my place right for Airbnb?","Do I have to host all the time?","How much should I interact with guests?","Any tips on being a great Airbnb Host?","What are Airbnb’s fees?"]
    const Answers=["Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.","Not at all – you control your calendar. You can host once a year, a few nights a month or more often.","It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.","Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.","Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf. Learn more about fees"]
    function Quetiontoggle(event){
        setToggleValue((toggleValue)=>({
            ...toggleValue,
            [event.target.id]:!toggleValue[event.target.id]   
        }
        ))
}
  return (
    <div className="sections section4">
        <div className="section4-left">
            <h2 className='section4__title '>Your Quetions,   Answerd</h2>
        </div>
      
        <div className='section4__Quetions section4-right'>
            {Quetions.map((question, index) => (
                <QuetionComponent
                key={index} // Make sure to add a unique key for each element in the map
                toggleValue={toggleValue}
                Quetiontoggle={Quetiontoggle}
                id={(index+1).toString()} // Use index as the id or any unique identifier
                Quetion={question}
                Answer={Answers[index]}
                />
            ))}
        </div>

     </div>
  )
}

export default Section4