// Import React library
import React from 'react';
// Import CSS file for styling
import './Rating1.css';
// Import Icon components
import Icon7 from '../Svg/Icon7.jsx';
import Icon10 from '../Svg/Icon10.jsx';
// Import Button component
import Btn2 from '../Button/btn2.jsx';

// Functional component for Rating1 section
function Rating1() {
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
              <h4>9.8</h4>
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

// Export the Rating1 component
export default Rating1;
