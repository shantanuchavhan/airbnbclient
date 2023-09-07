import React from 'react'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import { connect } from 'react-redux'
import { setDescription } from '../../Redux/Actions/Listingactions'
import TitleComponent from '../../components/Become-a-Host/TitleComponent'


const Description = ({description,setDescription}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  const [count,setCount]=useState(0)
  const Titledata={
    title:"Create your description",
    description:'Share what makes your place special.'
  }
  function getText(event){
    if(event.target.value.length<=4000){
        setCount(event.target.value.length)
        setDescription(event.target.value)
    }
}
  return (
    <div className={`fade-in ${isLoading ? 'loading' : ''}`}>
        <TitleComponent
        title={Titledata.title}
        description={Titledata.description}
        />

      <div>
        <textarea onChange={getText} value={description} name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div>{count}/4000</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    description: state.ListingReducer.description
  };
};

const mapDispatchToProps = {
  setDescription
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);

