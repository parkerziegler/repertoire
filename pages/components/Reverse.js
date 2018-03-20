import React from 'react';

const Reverse = ({ fill, stroke, onHold }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="50"
    height="50"
    viewBox="0 0 50 50"
    onHold={onHold}
  >
    <circle cx="25" cy="25" r="15" fill="transparent" stroke={stroke} />
    <polygon points="23,20 17,25 23,30" fill={fill} stroke={stroke} />
    <polygon points="30,20 23,25 30,30" fill={fill} stroke={stroke} />
  </svg>
);

export default Reverse;