import React from 'react';
import Header from './components/header';
import Audio from './components/audio';

export default () => (
  <div>
    <Header>Repertoire</Header>
    <Audio controls>
      <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
    </Audio>
  </div>
);