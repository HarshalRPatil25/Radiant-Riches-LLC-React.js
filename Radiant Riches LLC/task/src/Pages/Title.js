// Import React library
import React from 'react';
// Import CSS file for styling
import '../Css/Title.css';
// Import components
import Filter from './Filter.js';
import Tools from './Tools.js';
import Path from './Path.js';
import Btn1 from '../Button/btn1.jsx';
import Card1 from './Card1.js';
import Card2 from './Card2.js';
import Card3 from './Card3.js';
import Card4 from './Card4.js';
import Card5 from './Card5.js';
import Btn3 from '../Button/btn3.jsx';

// Functional component for the title section
const Title = () => {
  return (
    <>
      {/* Container for the title section */}
      <div className='contain'>
        {/* Title section */}
        <div className='title'>
          {/* Title text */}
          <h1>Best Website builders in the US</h1>
          {/* Horizontal line */}
          <span><hr /></span>
          {/* Filter component */}
          <Filter />
          {/* Horizontal line */}
          <div className='hr'>
            <hr />
          </div>
          {/* Tools component */}
          <Tools />
          {/* Path component */}
          <Path />
          {/* Button component 1 */}
          <Btn1 />
          {/* Card component 1 */}
          <Card1 />
          {/* Button component 3 */}
          <Btn3 />
          {/* Card component 2 */}
          <Card2 />
          {/* Card component 3 */}
          <div className='Card3'>
            <Card3 />
          </div>
          {/* Card component 4 */}
          <Card4 />
          {/* Paragraph for related deals */}
          <div className='pn'>
            <p className='para'>Related deals you might like for</p>
          </div>
          {/* Card component 5 */}
          <Card5 />
          {/* Footer section */}
          <div className='ft'>
            {/* Left section with text */}
            <div className='imf'>
              <p className='P'>Sign up and get exclusive special deals</p>
            </div>
            {/* Right section with button */}
            <div className='search'>
              <button className='Button1' >Sign UP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the Title component
export default Title;
