import React from 'react'
import { DatePicker } from 'antd';

const AvaibilityCkeckMobile = () => {
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
    
  return (
    <div>
        <h1>Step 1/2</h1>
    <div className="date-input">
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="date-input">
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      
    </div>
  )
}

export default AvaibilityCkeckMobile
