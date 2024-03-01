// Import React library
import React from 'react';
// Import CSS file for styling
import '../Css/Tools.css';

// Functional component for the tools section
function Tools() {
  return (
    <div>
      {/* Unordered list for tools */}
      <ul>
        {/* List item for "Tools" */}
        <li className='list1'>Tools</li>
        {/* List item for "AWS Builder" */}
        <li className='list2'>AWS Builder</li>
        {/* List item for "Start Build" */}
        <li className='list3'>Start Build</li>
        {/* List item for "Build Supplies" */}
        <li className='list4'>Build Supplies</li>
        {/* List item for "Tooling" */}
        <li className='list5'>Tooling</li>
        {/* List item for "BlueHosting" */}
        <li className='list6'>BlueHosting</li>
      </ul>
    </div>
  );
}

// Export the Tools component
export default Tools;
