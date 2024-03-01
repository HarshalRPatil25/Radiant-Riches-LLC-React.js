// Import React library
import React from 'react';
// Import CSS file for styling
import '../Css/Path.css';
// Import Icon component
import Icon4 from '../Svg/Icon4.jsx';

// Functional component for the path navigation
function Path() {
  return (
    <div>
      {/* Definition list for the path navigation */}
      <dt className='Path'>
        {/* List item for "Home" */}
        <li className='Path1'>Home</li>
        {/* Icon for the first path */}
        <div>
          <li className='Path2'><Icon4 /></li>
        </div>
        {/* List item for "Hosting for all" */}
        <li className='Path3'>Hosting for all</li>
        {/* Icon for the second path */}
        <div>
          <li className='Path4'><Icon4 /></li>
        </div>
        {/* List item for "Hosting" */}
        <li className='Path5'>Hosting</li>
        {/* Icon for the third path */}
        <div>
          <li className='Path6'><Icon4 /></li>
        </div>
        {/* List item for "Hosting6" */}
        <li className='Path7'>Hosting6</li>
        {/* Icon for the fourth path */}
        <div>
          <li className='Path8'><Icon4 /></li>
        </div>
        {/* List item for "Hosting5" */}
        <li className='Path9'>Hosting5</li>
      </dt>
    </div>
  );
}

// Export the Path component
export default Path;
