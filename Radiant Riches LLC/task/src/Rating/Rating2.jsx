// Import React library
import React from 'react';
// Import CSS file for styling
import './Rating1.css';
// Import Icon components
import Icon10 from '../Svg/Icon10.jsx';
import Btn2 from '../Button/btn2.jsx';
import Icon11 from '../Svg/Icon11.jsx';

// Functional component for the Rating2 section
function Rating2() {
  return (
    <div>
      {/* Top section */}
      <div className='Top'> 
        <div className='srct'>
          <div className='structure'>
            {/* Rate section */}
            <div className='Rate'>
              {/* Icon for rating */}
              <h3><Icon10/></h3>
              {/* Rating value */}
              <h4>9.5</h4>
            </div>
            {/* Excellence section */}
            <div className='Excellence'>
              {/* Rating description */}
              <h5>Excellent</h5>
            </div>
            {/* Stars section */}
            <div className='Stars'>
              {/* Icon for stars */}
              <Icon11/>
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

// Export the Rating2 component
export default Rating2;
