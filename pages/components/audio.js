import React from 'react';
import styled from 'styled-components';

const Audio = ({ className, children, albumArt, albumName }) => (
  <div className={className}>
    <audio controls>
      {children}
    </audio>
    <img src={albumArt} alt={albumName} />
  </div>
);

const StyledAudio = styled(Audio)`
  border: 1px solid gray;
  background: aquamarine;
  display: flex;
  width: 50vw;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  margin: 1vh;
  padding-left: 2%;
  box-sizing: border-box;

  img {
    height: 100%;
  }
`;

export default StyledAudio;