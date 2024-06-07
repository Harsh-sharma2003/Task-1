import React from 'react';
import './Box_with_h_and_p.css';

export const Box_with_h_and_p = (props) => {
  return (
    <div className='wholebox'>
      <div className='pone_box'>
        <p className='pone'>{props.heading}</p>
      </div>
      <div className='ptwo_box'>
        <p className='ptwo'>{props.para}</p>
      </div>
    </div>
  );
};

export default Box_with_h_and_p;
