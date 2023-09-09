import React from 'react'
import '../../styles/BecomeAHost/Option.css'

const Option = ({optionName,optionIcon,selectedOptions,handleOptionSelect}) => {
  console.log(selectedOptions,"selectedOptions")
  
  return (
    <div>
        <div className={`Option ${selectedOptions.includes(optionName) ? "selected" : ""}`} onClick={() => handleOptionSelect(optionName)}>
              <input type="radio" name="language" value={optionName} style={{ display: "none" }} />
              <img className="structureImage" src={optionIcon} alt={optionName} />
              <h4>{optionName}</h4>
    </div>
    </div>
    
  )
}

export default Option