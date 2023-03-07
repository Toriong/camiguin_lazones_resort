import React from 'react';

import styles from './Hero.module.css';

interface Props{
    children: React.ReactNode;
    imgSrc: string;
    className: string;
}

function Hero({ imgSrc, children, className }:Props){
  return (
    <div style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : {}} className={`${styles.hero} ${className}`}>
      <div className="container row mx-auto align-items-start">
        <div className='col offset-lg-0 col-lg-8 col-xl-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;