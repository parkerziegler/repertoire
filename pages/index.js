import React from 'react';
import Header from './components/header';
import Audio from './components/audio';

class App extends React.Component {

  componentDidMount() {
    console.log(this.refs.audio);
    console.log(this.audio);
    console.log("Hello");
  }

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
          <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
        </Audio>
      </div>
    );
  }
}

export default () => <App />;