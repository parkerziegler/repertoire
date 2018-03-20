import React from 'react';
import styled from 'styled-components';
import ImagePalette from 'react-image-palette';

import Play from './Play';
import Pause from './Pause';
import Forward from './Forward';
import Reverse from './Reverse';

const PLAY = "/static/play.svg";
const PAUSE = "/static/pause.svg";

class Audio extends React.Component {

  state = {
    currentTime: '00:00',
    value: 0,
    duration: '00:00',
    isPlay: false,
  }

  parseDuration = (audio) => {
    const duration = audio.duration;
    const minutes = Math.floor(duration / 60).toString();
    const seconds = Number(duration - minutes * 60).toString().substr(0, 2);
    return `${minutes}:${seconds}`;
  }

  parseCurrentTime = (audio) => {
    const currentTime = audio.currentTime;
    const currentHour = parseInt(currentTime / 3600) % 24;
    const currentMinute = parseInt(currentTime / 60) % 60;
    const currentSeconds = Number(currentTime % 60).toFixed();
    return (currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`) + ":" + (currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`);
  }

  parseValue = (audio) => {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    return currentTime / duration;
  }

  convertValueToCurrentTime = (value) => {
    const seconds = value * this.audio.duration;
    this.audio.currentTime = seconds;
    return this.audio.currentTime;
  }

  onLoadedMetadata = (e) => {
    const currentTime = this.parseCurrentTime(e.target);
    const duration = this.parseDuration(e.target);
    this.setState({
      currentTime,
      duration
    });
  }

  onPlaying = () => {
    const currentTime = this.parseCurrentTime(this.audio);
    const value = this.parseValue(this.audio);
    this.setState({
      currentTime,
      value
    });
  }

  onInput = (e) => {
    this.convertValueToCurrentTime(e.target.value);
    const currentTime = this.parseCurrentTime(this.audio);
    this.setState({
      currentTime,
      value: e.target.value,
    });
  }

  onClickHandler = () => {
    if (!this.state.isPlaying) {
      // play the audio
      this.audio.play();
  
      // start tracking the currentTime
      setInterval(() => {
        this.onPlaying();
      }, 500);
  
      // switch the play pause icon
      this.setState({
        isPlaying: true
      });
    } else {
      // pause the audio
      this.audio.pause();
      this.setState({
        isPlaying: false
      });
    }
  }

  render() {

    const { className, children, albumArt, albumName } = this.props;
    const { currentTime, duration, isPlaying, value } = this.state;

    return (
      <ImagePalette image={albumArt}>
        {({ backgroundColor, color, alternativeColor }) => (
          <div className={className} style={{ backgroundColor }}>
            <audio ref={audio => this.audio = audio} onLoadedMetadata={this.onLoadedMetadata} onPlaying={this.onPlaying}>
              {children}
            </audio>
            <div className="controls">
              <Reverse onHold={this.onClickHandler} fill={color} stroke={color} />
              {isPlaying
                ? <Pause onClick={this.onClickHandler} fill={color} stroke={color} />
                : <Play onClick={this.onClickHandler} fill={color} stroke={color} />
              }
              <Forward onHold={this.onClickHandler} fill={color} stroke={color} />
            </div>
            <div className="progress-container">
              <span className="progress-label" style={{ color }}>{currentTime}</span>
              <input type="range" value={value} max={1} step={0.01} onInput={this.onInput} style={{ backgroundColor: color }} />
              <span className="progress-label" style={{ color }}>{duration}</span>
            </div>
            <img src={albumArt} alt={albumName} /> 
          </div>
        )}
      </ImagePalette>
    );
  }
}

const StyledAudio = styled(Audio)`
  display: flex;
  width: 50%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  margin: 1vh;
  box-sizing: border-box;

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  }

  .play {
    height: 50%;
  }

  .progress-container {
    width: 55%;
    display: flex;
    align-items: center;

    .progress-bg, .progress-fg {
      height: 7px;
    }

    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      margin: 6px;
    }

    input[type=range]:focus {
      outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 2.1px #000000, 0px 0px 1.5px #0d0d0d;
      border-radius: 1.5px;
      border: 0.2px solid rgba(0, 0, 0, 0);
    }

    input[type=range]::-webkit-slider-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid rgba(0, 0, 0, 0);
      height: 18px;
      width: 18px;
      border-radius: 9px;
      background: #fff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -6.2px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
      background: inherit;
      opacity: 0.5;
    }

    input[type=range]::-moz-range-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      box-shadow: 1.5px 1.5px 2.1px #000000, 0px 0px 1.5px #0d0d0d;
      border-radius: 1.5px;
      border: 0.2px solid rgba(0, 0, 0, 0);
    }

    input[type=range]::-moz-range-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid rgba(0, 0, 0, 0);
      height: 18px;
      width: 18px;
      border-radius: 9px;
      background: #fff;
      cursor: pointer;
    }

    input[type=range]::-ms-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    input[type=range]::-ms-fill-lower {
      background: #fc7014;
      border: 0.2px solid rgba(0, 0, 0, 0);
      border-radius: 3px;
      box-shadow: 1.5px 1.5px 2.1px #000000, 0px 0px 1.5px #0d0d0d;
    }

    input[type=range]::-ms-fill-upper {
      background: #fc7f2d;
      border: 0.2px solid rgba(0, 0, 0, 0);
      border-radius: 3px;
      box-shadow: 1.5px 1.5px 2.1px #000000, 0px 0px 1.5px #0d0d0d;
    }

    input[type=range]::-ms-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid rgba(0, 0, 0, 0);
      height: 18px;
      width: 18px;
      border-radius: 9px;
      background: #fff;
      cursor: pointer;
      height: 6px;
    }

    input[type=range]:focus::-ms-fill-lower {
      background: inherit;
    }

    input[type=range]:focus::-ms-fill-upper {
      background: inherit;
    }

    .progress-label {
      color: white;
      font-family: 'Space Mono', monospace;
    }
  }

  img {
    height: 100%;
  }
`;

export default StyledAudio;