import React from 'react';
import Header from './components/header';
import Audio from './components/audio';

export default () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Header>Repertoire</Header>
    <Audio controls albumArt="/static/dixie-charles.jpg" albumName="Dixie-Pup">
      <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
    </Audio>
  </div>
);