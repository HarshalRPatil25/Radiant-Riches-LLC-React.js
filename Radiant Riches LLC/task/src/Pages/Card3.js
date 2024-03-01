import React from 'react';
import cpImg from '../Images/cp.png'; // Assuming cp.png is stored in the correct directory
import '../Css/Card3.css';
import Icon13 from '../Svg/Icon13.jsx'; // Importing Icon6 component
import Rating3 from '../Rating/Rating3.jsx'; // Importing Rating1 component
import Icon8 from '../Svg/Icon8.jsx';

function Card3() {
  return (
    <div>
      <div className='crd'>
        {/* Main container for the card */}
        <div className='stor' style={{ marginTop: '38px' }}>
          {/* Content container */}
          <div className='content'>
            {/* Data section containing the icon and image */}
            <div className='data'>
              <Icon13 /> {/* Icon component */}
              <img src={cpImg} alt="img" /> {/* Image */}
            </div>
            {/* Text section */}
            <div className='text'>
              {/* Subsection for the main title */}
              <div className='text1'>
                <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                <h5><b>Main highlights</b></h5>
              </div>
              {/* Subsection for the detailed description */}
              <div className='text2'>
                <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
              </div>
              <div className='text3'>
                <div className='innerText'>
                  <a className='lnk' href='#'>Show more </a>
                  <p className='showMore'><Icon8 /></p>

                </div>

              </div>
            </div>
            {/* Rating section */}
            <div style={{ marginTop: '21px' }}>
              <Rating3 /> {/* Rating component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
