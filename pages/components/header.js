import React from 'react';
import styled from 'styled-components';

const Header = ({ className }) => (
  <header className={className}>
    <h1>Repertoire</h1>
  </header>
);

const StyledHeader = styled(Header)`
  background-color: #222;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 3em;
  width: 100%;

  h1 {
    font-size: 25px;
    font-family: 'Space Mono', monospace;
    margin-left: 4em;
  }
`;

export default StyledHeader;
