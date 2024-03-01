import React from 'react';
import cpImg from '../Images/cp.png'; // Assuming cp.png is stored in the correct directory
import '../Css/Card4.css';
import Icon16 from '../Svg/Icon16.jsx'; // Importing Icon6 component
import Rating4 from '../Rating/Rating4.jsx'; // Importing Rating1 component
import Icon8 from '../Svg/Icon8.jsx';
import Offers from './Offers.js';
import Icon14 from '../Svg/Icon14.jsx';
function Card4() {
  return (
    <div>
      <div className='crd'>
        {/* Main container for the card */}
        <div className='stor' style={{ marginTop: '58px' }}>
          {/* Content container */}
          <div className='content'>
            {/* Data section containing the icon and image */}
            <div className='data'>
              <Icon16 /> {/* Icon component */}
              <img src={cpImg} alt="img" /> {/* Image */}
            </div>
            {/* Text section */}
            <div className='text'>
              {/* Subsection for the main title */}
              <div className='text1'>
                <p>CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides.</p>
                <div className='h5'>
                  <h5 style={{ marginLeft: '-45px', color: '#074786', fontWeight: 'lighter' }} >25% off</h5>

                  <h5>Main highlights</h5>
                </div>
              </div>
              {/* Subsection for the detailed description */}
              <div className='text2'>
                <Offers />
              </div>
              <div className='whyWe'>
                <caption>Why we love it</caption>

                <label className='lbl'><Icon14 />Documentation</label>
                <label className='lbl'><Icon14 />Documentation</label>
                <label className='lbl'><Icon14 />Out of box</label>
              </div>
              <div className='text3'>
                <div className='innerText'>
                  <a className='lnk' href='#'>Show more </a>
                  <p className='showMore'><Icon8 /></p>

                </div>

              </div>
            </div>
            {/* Rating section */}
            <div style={{ marginTop: '0px' }}>
              <Rating4 /> {/* Rating component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
