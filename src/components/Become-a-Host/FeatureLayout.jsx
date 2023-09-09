import React from 'react';
import Option from './Option';
import '../../styles/BecomeAHost/Feature.css';

const FeatureLayout = ({optionData, setOption, selectedOptions }) => {
  function setItems(feature){
    console.log(feature,"feature")
    setOption(feature)
  }

  

  return (
    <div className='Feature'>
      <div>
        <form className='featureForm' action="">
          <div className='flex Options'>
            {optionData.map((option) => (
              <Option
                key={option.optionName}
                optionName={option.optionName}
                optionIcon={option.optionIcon}
                selectedOptions={selectedOptions}
                handleOptionSelect={setItems}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeatureLayout;
