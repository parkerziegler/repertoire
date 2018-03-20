import React from 'react';

const Pause = ({ fill, stroke, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="50"
    height="50"
    viewBox="0 0 50 50"
    onClick={onClick}
  >
    <circle cx="25" cy="25" r="20" fill="transparent" stroke={stroke} />
    <rect x="17.5" y="15" width="5" height="20" fill={fill} stroke={stroke} />
    <rect x="27.5" y="15" width="5" height="20" fill={fill} stroke={stroke} />
  </svg>
);

export default Pause;