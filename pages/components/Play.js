import React from 'react';

const Play = ({ fill, stroke, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="50"
    height="50"
    viewBox="0 0 50 50"
    onClick={onClick}
  >
    <circle cx="25" cy="25" r="20" fill="transparent" stroke={stroke} />
    <polygon points="20,15 35,25 20,35" fill={fill} stroke={stroke} />
  </svg>
);

export default Play;