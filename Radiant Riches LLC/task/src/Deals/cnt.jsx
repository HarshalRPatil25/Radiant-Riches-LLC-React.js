import React from 'react'
import  src from '../Images/cp.png';
import './Container.css';
import Btn4 from '../Button/btn4';
function cnt() {
  return (
    <div>
      
        <div className='cnt'>
            
            <div className='Deal1'>
                <div className='image'>
                    <img src={src} alt='img'/>
                </div>
                <div className='views'>
                    <a className='views1'>  20% off</a> 
                    <a className='views2'>Limited Time</a>
                </div>
                <div className='dealFooter'>
                    <h3 className='heading'> Webbuilder 1     </h3>  
                    <p className='paragraph'>Computer  Modern clasic with wix support</p>

                            <div className='line'>
                                <a className='a1'>$39.96</a>
                                <a className='a2'>$49.96</a>
                                <a className='a3'>(20% Off)</a>
                                
                            </div>
                            <Btn4/>

                        </div>
            </div>
            <div className='Deal1'>
                <div className='image'>
                    <img src={src} alt='img'/>
                </div>
                <div className='views'>
                    <a className='views1'>  20% off</a> 
                    <a className='views2'>Limited Time</a>
                </div>
                <div className='dealFooter'>
                    <h3> Webbuilder 1     </h3>  
                    <p>Computer  Modern clasic with wix support</p>

                            <div className='line'>
                                <a className='a1'>$39.96</a>
                                <a className='a2'>$49.96</a>
                                <a className='a3'>(20% Off)</a>
                                
                            </div>
                            <Btn4/>

                        </div>
            </div>
            <div className='Deal1'>
                <div className='image'>
                    <img src={src} alt='img'/>
                </div>
                <div className='views'>
                    <a className='views1'>  20% off</a> 
                    <a className='views2'>Limited Time</a>
                </div>
                <div className='dealFooter'>
                    <h3> Webbuilder 1     </h3>  
                    <p>Computer  Modern clasic with wix support</p>

                            <div className='line'>
                                <a className='a1'>$39.96</a>
                                <a className='a2'>$49.96</a>
                                <a className='a3'>(20% Off)</a>
                                
                            </div>
                            <Btn4/>

                        </div>
            </div>
            </div>
            
    </div>
  )
}

export default cnt;