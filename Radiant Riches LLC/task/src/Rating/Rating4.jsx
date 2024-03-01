// Import React library
import React from 'react';
// Import CSS file for styling
import './Rating4.css';
// Import Icon component
import Icon15 from '../Svg/Icon15.jsx';
// Import Button component
import Btn2 from '../Button/btn2.jsx';

// Functional component for the Rating4 section
function Rating4() {
  return (
    <div>
      {/* Top section */}
      <div className='Top'> 
        <div className='srct'>
          <div className='structure'>
            {/* Rate section */}
            <div className='Rate'>
              {/* Rating value */}
              <h4>9.1</h4>
            </div>
            {/* Excellence section */}
            <div className='Excellence'>
              {/* Rating description */}
              <h5>Very Good</h5>
            </div>
            {/* Stars section */}
            <div className='Stars'>
              {/* Icon for stars */}
              <Icon15/>
            </div>
          </div>
        </div>
        {/* Vie section */}
        <div className='Vie'>
          {/* Button for viewing */}
          <Btn2></Btn2>
        </div>
      </div>
    </div>
  );
}

// Export the Rating4 component
export default Rating4;
