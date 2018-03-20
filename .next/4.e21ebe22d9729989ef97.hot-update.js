webpackHotUpdate(4,{

/***/ "./pages/components/Audio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_image_palette__ = __webpack_require__("./node_modules/react-image-palette/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Play__ = __webpack_require__("./pages/components/Play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pause__ = __webpack_require__("./pages/components/Pause.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Forward__ = __webpack_require__("./pages/components/Forward.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Reverse__ = __webpack_require__("./pages/components/Reverse.js");
var _jsxFileName = '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var PLAY = "/static/play.svg";
var PAUSE = "/static/pause.svg";

var Audio = function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTime: '00:00',
      value: 0,
      duration: '00:00',
      isPlay: false
    }, _this.parseDuration = function (audio) {
      var duration = audio.duration;
      var minutes = Math.floor(duration / 60).toString();
      var seconds = Number(duration - minutes * 60).toString().substr(0, 2);
      return minutes + ':' + seconds;
    }, _this.parseCurrentTime = function (audio) {
      var currentTime = audio.currentTime;
      var currentHour = parseInt(currentTime / 3600) % 24;
      var currentMinute = parseInt(currentTime / 60) % 60;
      var currentSeconds = Number(currentTime % 60).toFixed();
      return (currentMinute < 10 ? '0' + currentMinute : '' + currentMinute) + ":" + (currentSeconds < 10 ? '0' + currentSeconds : '' + currentSeconds);
    }, _this.parseValue = function (audio) {
      var duration = audio.duration;
      var currentTime = audio.currentTime;
      return currentTime / duration;
    }, _this.convertValueToCurrentTime = function (value) {
      var seconds = value * _this.audio.duration;
      _this.audio.currentTime = seconds;
      return _this.audio.currentTime;
    }, _this.onLoadedMetadata = function (e) {
      var currentTime = _this.parseCurrentTime(e.target);
      var duration = _this.parseDuration(e.target);
      _this.setState({
        currentTime: currentTime,
        duration: duration
      });
    }, _this.onPlaying = function () {
      var currentTime = _this.parseCurrentTime(_this.audio);
      var value = _this.parseValue(_this.audio);
      _this.setState({
        currentTime: currentTime,
        value: value
      });
    }, _this.onInput = function (e) {
      _this.convertValueToCurrentTime(e.target.value);
      var currentTime = _this.parseCurrentTime(_this.audio);
      _this.setState({
        currentTime: currentTime,
        value: e.target.value
      });
    }, _this.onClickHandler = function () {
      if (!_this.state.isPlaying) {
        // play the audio
        _this.audio.play();

        // start tracking the currentTime
        setInterval(function () {
          _this.onPlaying();
        }, 500);

        // switch the play pause icon
        _this.setState({
          isPlaying: true
        });
      } else {
        // pause the audio
        _this.audio.pause();
        _this.setState({
          isPlaying: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Audio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          albumArt = _props.albumArt,
          albumName = _props.albumName;
      var _state = this.state,
          currentTime = _state.currentTime,
          duration = _state.duration,
          isPlaying = _state.isPlaying,
          value = _state.value;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_image_palette__["a" /* default */],
        { image: albumArt, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        function (_ref2) {
          var backgroundColor = _ref2.backgroundColor,
              color = _ref2.color,
              alternativeColor = _ref2.alternativeColor;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: className, style: { backgroundColor: backgroundColor }, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'audio',
              { ref: function ref(audio) {
                  return _this2.audio = audio;
                }, onLoadedMetadata: _this2.onLoadedMetadata, onPlaying: _this2.onPlaying, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              children
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'controls', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Reverse__["a" /* default */], { onHold: _this2.onClickHandler, fill: color, stroke: color, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              }),
              isPlaying ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Pause__["a" /* default */], { onClick: _this2.onClickHandler, fill: color, stroke: color, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Play__["a" /* default */], { onClick: _this2.onClickHandler, fill: color, stroke: color, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Forward__["a" /* default */], { onHold: _this2.onClickHandler, fill: color, stroke: color, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'progress-container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'progress-label', style: { color: color }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                },
                currentTime
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'range', value: value, max: 1, step: 0.01, onInput: _this2.onInput, style: { backgroundColor: color }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'progress-label', style: { color: color }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  }
                },
                duration
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: albumArt, alt: albumName, __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            })
          );
        }
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Audio;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var StyledAudio = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */])(Audio).withConfig({
  displayName: 'Audio__StyledAudio',
  componentId: 's1e7usdc-0'
})(['display:flex;width:50%;height:100px;justify-content:space-between;align-items:center;margin:1vh;box-sizing:border-box;.controls{display:flex;align-items:center;justify-content:center;width:25%;}.play{height:50%;}.progress-container{width:55%;display:flex;align-items:center;.progress-bg,.progress-fg{height:7px;}input[type=range]{-webkit-appearance:none;width:100%;margin:6px;}input[type=range]:focus{outline:none;}input[type=range]::-webkit-slider-runnable-track{width:100%;height:6px;cursor:pointer;box-shadow:1.5px 1.5px 2.1px #000000,0px 0px 1.5px #0d0d0d;border-radius:1.5px;border:0.2px solid rgba(0,0,0,0);}input[type=range]::-webkit-slider-thumb{box-shadow:1px 1px 1px #000000,0px 0px 1px #0d0d0d;border:1px solid rgba(0,0,0,0);height:18px;width:18px;border-radius:9px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-6.2px;}input[type=range]:focus::-webkit-slider-runnable-track{background:inherit;opacity:0.5;}input[type=range]::-moz-range-track{width:100%;height:6px;cursor:pointer;box-shadow:1.5px 1.5px 2.1px #000000,0px 0px 1.5px #0d0d0d;border-radius:1.5px;border:0.2px solid rgba(0,0,0,0);}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000000,0px 0px 1px #0d0d0d;border:1px solid rgba(0,0,0,0);height:18px;width:18px;border-radius:9px;background:#fff;cursor:pointer;}input[type=range]::-ms-track{width:100%;height:6px;cursor:pointer;background:transparent;border-color:transparent;color:transparent;}input[type=range]::-ms-fill-lower{background:#fc7014;border:0.2px solid rgba(0,0,0,0);border-radius:3px;box-shadow:1.5px 1.5px 2.1px #000000,0px 0px 1.5px #0d0d0d;}input[type=range]::-ms-fill-upper{background:#fc7f2d;border:0.2px solid rgba(0,0,0,0);border-radius:3px;box-shadow:1.5px 1.5px 2.1px #000000,0px 0px 1.5px #0d0d0d;}input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000000,0px 0px 1px #0d0d0d;border:1px solid rgba(0,0,0,0);height:18px;width:18px;border-radius:9px;background:#fff;cursor:pointer;height:6px;}input[type=range]:focus::-ms-fill-lower{background:inherit;}input[type=range]:focus::-ms-fill-upper{background:inherit;}.progress-label{color:white;font-family:\'Space Mono\',monospace;}}img{height:100%;}']);

var _default = StyledAudio;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PLAY, 'PLAY', '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js');
  reactHotLoader.register(PAUSE, 'PAUSE', '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js');
  reactHotLoader.register(Audio, 'Audio', '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js');
  reactHotLoader.register(StyledAudio, 'StyledAudio', '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js');
  reactHotLoader.register(_default, 'default', '/Users/parkerziegler/Documents/repos/repertoire/pages/components/Audio.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Audio")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e21ebe22d9729989ef97.hot-update.js.map