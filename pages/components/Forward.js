import React from 'react';

const Forward = ({ fill, stroke, onHold }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="50"
    height="50"
    viewBox="0 0 50 50"
    onHold={onHold}
  >
    <circle cx="25" cy="25" r="15" fill="transparent" stroke={stroke} />
    <polygon points="19,20 26,25 19,30" fill={fill} stroke={stroke} />
    <polygon points="26,20 33,25 26,30" fill={fill} stroke={stroke} />
  </svg>
);

export default Forward;