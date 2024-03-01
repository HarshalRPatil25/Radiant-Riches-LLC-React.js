// Import React and necessary components
import React from 'react';
import Icon1 from '../Svg/Icon1.jsx';
import Icon2 from '../Svg/Icon2.jsx';
import Icon3 from '../Svg/Icon3.jsx';

// Import CSS file for styling
import '../Css/Filter.css';

// Functional component for the Filter section
function Filter() {
  return (
    <div>
      {/* Ordered list for the filter options */}
      <ol>
        {/* First filter option */}
        <div className='icn1'>
          <li><Icon1 /></li>
        </div>
        {/* Text for the first filter option */}
        <li className='ic1'>Last Updated February 22, 2020</li>
        {/* Second filter option */}
        <div>
          <li className='icn2'><Icon2 /></li>
        </div>
        {/* Text for the second filter option */}
        <li className='ic2'>Advertising Disclosure</li>
        {/* Third filter option */}
        <li className='ic3'>Top Relevant</li>
        {/* Fourth filter option */}
        <div>
          <li className='icn3'><Icon3 /></li>
        </div>
      </ol>
    </div>
  );
}

// Export the Filter component
export default Filter;
