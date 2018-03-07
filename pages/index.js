import React from 'react';
import Header from './components/header';
import Audio from './components/audio';

class App extends React.Component {

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Header>Repertoire</Header>
        <Audio
          controls
          albumArt="/static/dixie-charles.jpg"
          albumName="Dixie-Pup"
          ref={(audio) => this.audio = audio}
        >
          <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3" />
        </Audio>
      </div>
    );
  }
}

export default () => <App />;