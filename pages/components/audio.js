import React from 'react';
import styled from 'styled-components';

class Audio extends React.Component {

  state = {
    currentTime: 0,
    value: 0.5,
    duration: '00:00'
  }

  componentDidMount() {
    const duration = this.parseDuration(this.audio.duration);
    this.setState({
      duration
    });
  }

  onClickHandler = () => {
    this.audio.play();
  }

  parseDuration = () => {
    const duration = this.audio.duration;
    const minutes = Math.floor(duration / 60).toString();
    const seconds = Number(duration - minutes * 60).toString().substr(0, 2);
    return `${minutes}:${seconds}`;
  }

  parseCurrentTime = () => {
    const currentTime = this.audio.currentTime;
    const currentHour = parseInt(currentTime / 3600) % 24;
    const currentMinute = parseInt(currentTime / 60) % 60;
    const currentSeconds = Number(currentTime % 60).toFixed();
    return currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}` + currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`;
  }

  seek = (evt) => {
    const percent = evt.x;
    this.setState({
      currentTime: percent * this.audio.duration,
      value: percent / 100
    });
  }

  render() {

    const { className, children, albumArt, albumName } = this.props;

    return (
      <div className={className}>
        <audio ref={audio => this.audio = audio}>
          {children}
        </audio>
        <img src="http://www.lukeduncan.me/images/play-button.png" onClick={this.onClickHandler} alt="Play" className="play" />
        <div className="progress-container">
          <progress value={this.state.value} max={1} onClick={this.seek} />
          <div className="progress-label-container">
            <span className="progress-label">{this.parseCurrentTime()}</span>
            <span className="progress-label">{this.state.duration}</span>
          </div>
        </div>
        <img src={albumArt} alt={albumName} />
      </div>
    );
  }
}

const StyledAudio = styled(Audio)`
  border: 1px solid gray;
  background: aquamarine;
  display: flex;
  width: 50vw;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  margin: 1vh;
  padding-left: 1%;
  box-sizing: border-box;

  .play {
    height: 50%;
  }

  .progress-container {
    width: 30vw;
    display: flex;
    flex-direction: column;

    progress {
      width: 100%;
    }

    .progress-label-container {
      display: flex;
      justify-content: space-between;

      .progress-label {
        color: white;
      }
    }
  }

  img {
    height: 100%;
  }
`;

export default StyledAudio;