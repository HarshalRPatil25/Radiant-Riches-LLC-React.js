// Import React and necessary components
import React from 'react';
import Icon3 from '../Svg/Icon3.jsx';

// Import CSS file for styling
import '../Css/Footer.css';

// Functional component for the Footer section
function Footer() {
    return (
        <div>
            {/* Footer section */}
            <div className='Footer'>
                {/* Container for the footer content */}
                <div className="cont">
                    {/* First column of footer */}
                    <div className='Lists1'>
                        <ol className='ln'>
                            <li className='ln1'>Categories</li>
                            <li className='ln2'>Web Builder</li>
                            <li className='ln3'>Hosting</li>
                            <li className='ln4'>Data Center</li>
                            <li className='ln5'>Robotic-Automation</li>
                        </ol>
                    </div>
                    {/* Second column of footer */}
                    <div className='Lists2'>
                        <ol className='lns'>
                            <li className='lns1'>Contact</li>
                            <li className='lns2'>Contact</li>
                            <li className='lns3'>Privacy Policy</li>
                            <li className='lns4'>Terms Of Service</li>
                            <li className='lns5'>Categories</li>
                            <li className='lns6'>About</li>
                        </ol>
                    </div>
                    {/* Third column of footer */}
                    <div className='Lists3' style={{ display: 'flex', alignItems: 'center', marginLeft: '1024px', marginTop: '-248px' }}>
                        <span className='spn' style={{ display: 'flex', alignItems: 'center' }}>United States<Icon3 /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the Footer component
export default Footer;
