import React from 'react';
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import TitleComponent from '../../components/Become-a-Host/TitleComponent';
import { getDiscounts } from '../../Redux/Actions/Listingactions';
import '../../styles/BecomeAHost/Discount.css';
import { connect } from 'react-redux';

const Discount = ({ discounts, getDiscounts }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  useEffect(() => {
    
    if (discounts) {
      setSelectDiscounts(discounts);
    }
  }, []);
  console.log(discounts,"dis");
  const [selectedDiscounts, setSelectDiscounts] = useState([]);
  const [inputValues, setInputValues] = useState({}); // Object to hold input values

  const TitleData = {
    title: 'Add discounts',
    description: 'Help your place stand out to get booked faster and earn your first reviews.',
  };

  function isItSelected(label, percent) {
   
    const updatedDiscounts = discounts.some(obj => obj.label === label)
      ? discounts.filter(discount => discount.label !== label)
      : [...discounts, { label, percent }];
    setSelectDiscounts([...updatedDiscounts]);
    getDiscounts(updatedDiscounts); // Make sure getDiscounts properly updates the Redux store
  }

  let discountItems = [
    { id: 'discount1', label: 'New listing promotion', desc: 'Offer 20% off your first 3 bookings', percent: 20 },
    { id: 'discount2', label: 'Weekly discount', desc: 'For stays of 7 nights or more', percent: 15 },
    { id: 'discount3', label: 'Monthly discount', desc: 'For stays of 28 nights or more', percent: 10 },
    // ... add more discounts as needed
  ];

  function setInput(event, label) {
    const newValue = event.target.value;
    setInputValues(prevValues => ({
      ...prevValues,
      [label]: newValue, // Store input value with label as key
    }));
  }

  return (
    <main className={`fade-in ${isLoading ? 'loading' : ''}`}>
      <TitleComponent title={TitleData.title} description={TitleData.description} />

      <div className='discounts'>
        {discountItems.map(item => (
          <div className='discount' key={item.id}>
            <div className='discount__features'>
              {selectedDiscounts.some(obj => obj.label === item.label) ? <div className='discount__features__percent '>
                {item.id==='discount1'? <span><h3 className='black'>{item.percent}</h3></span>:<input className='discount__features__percent__input  black' onChange={e => setInput(e, item.label)} value={inputValues[item.label] !== undefined ? inputValues[item.label] : item.percent} type='text' />}
                <h3 className='black'>%</h3>
              </div>:<div className='discount__features__percent'>
                {item.id==='discount1'? <span><h3 className='gray'>{item.percent}</h3></span>:<input className='discount__features__percent__input gray' onChange={e => setInput(e, item.label)} value={inputValues[item.label] !== undefined ? inputValues[item.label] : item.percent} type='text' />}
                <h3 className='gray'>%</h3>
              </div>}

              <div>
                <h5>{item.label}</h5>
                <p>{item.desc}</p>
              </div>
            </div>

            <div className='discount__checked' onClick={() => isItSelected(item.label, inputValues[item.label] || item.percent)}>
              {!selectedDiscounts.some(obj => obj.label === item.label) || (
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

// ... (mapStateToProps and mapDispatchToProps)

const mapStateToProps = (state) => {
  return {
    discounts: state.ListingReducer.discounts,
  };
};

const mapDispatchToProps = {
  getDiscounts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discount);
