import React from 'react'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import '../../styles/BecomeAHost/Price.css'
import TitleComponent from '../../components/Become-a-Host/TitleComponent'
import { setPrice } from '../../Redux/Actions/Listingactions'
const Price = ({price , setPrice}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  const TitleData={
    title:"Now, set your price",
    description:"You can change it anytime."
  }
  function setPriceValue(event){
    setPrice(event.target.value)
  }
  return (
    <div className={`fade-in ${isLoading ? 'loading' : ''}`}>
      <TitleComponent
        title={TitleData.title}
        description={TitleData.description}
      />
      <div>
        <input className='PriceInput' onChange={setPriceValue} type="text" placeholder=" Enter Price here" value={price}  name="" id="" />
      </div>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    price: state.ListingReducer.price
  };
};

const mapDispatchToProps = {
  setPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);