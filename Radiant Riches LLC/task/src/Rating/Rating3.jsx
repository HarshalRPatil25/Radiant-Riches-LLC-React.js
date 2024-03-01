// Import React library
import React from 'react';
// Import CSS file for styling
import './Rating1.css';
// Import Icon components
import Icon7 from '../Svg/Icon7.jsx';
import Btn2 from '../Button/btn2.jsx';

// Functional component for the Rating3 section
function Rating3() {
  return (
    <div>
      {/* Top section */}
      <div className='Top'> 
        <div className='srct'>
          <div className='structure'>
            {/* Rate section */}
            <div className='Rate'>
              {/* Rating value */}
              <h4>9.3</h4>
            </div>
            {/* Excellence section */}
            <div className='Excellence'>
              {/* Rating description */}
              <h5>Exceptional</h5>
            </div>
            {/* Stars section */}
            <div className='Stars'>
              {/* Icon for stars */}
              <Icon7/>
            </div>
          </div>
        </div>
        {/* View section */}
        <div className='View'>
          {/* Button for viewing */}
          <Btn2></Btn2>
        </div>
      </div>
    </div>
  );
}

// Export the Rating3 component
export default Rating3;
