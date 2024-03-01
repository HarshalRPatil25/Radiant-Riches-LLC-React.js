import React from 'react';
import cpImg from '../Images/cp.png'; // Assuming cp.png is stored in the correct directory
import '../Css/Card1.css';
import Icon6 from '../Svg/Icon12'; // Importing Icon6 component
import Rating2 from '../Rating/Rating2.jsx'; // Importing Rating1 component
import Icon8 from '../Svg/Icon8.jsx';
function Card2() {
  return (
    <div>
      <div className='crd'>
        {/* Main container for the card */}
        <div className='stor'>
          {/* Content container */}
          <div className='content'>
            {/* Data section containing the icon and image */}
            <div className='data'>
              <Icon6 /> {/* Icon component */}
              <img src={cpImg} alt="img" /> {/* Image */}
            </div>
            {/* Text section */}
            <div className='text'>
              {/* Subsection for the main title */}
              <div className='text1'>
                <p><b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site
                  Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic
                  Websites and E-commerce Platforms (Green/White)</p>
                <h5><b>Main highlights</b></h5>
              </div>
              {/* Subsection for the detailed description */}
              <div className='text2'>
                <p>[What You Get]: Gain access to the SiteCraft design studio,
                  featuring a robust selection of design elements, SEO
                  optimization tools, and e-commerce integrations.
                </p>
              </div>
              <div className='text3'>
                <div className='innerText'>
                  <a className='lnk' href='#'>Show more </a>
                  <p className='showMore'><Icon8 /></p>

                </div>

              </div>
            </div>
            {/* Rating section */}
            <div className='Rate'>
              <Rating2 /> {/* Rating component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
