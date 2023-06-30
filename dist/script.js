import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.plusBreak = this.plusBreak.bind(this);
    this.minusBreak = this.minusBreak.bind(this);
    this.plusSession = this.plusSession.bind(this);
    this.minusSession = this.minusSession.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    this.state = {
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0,
      label: 'Session',
      running: true };

  }

  reset() {
    this.setState({
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0,
      label: "Session",
      running: true });

    this.stopAudio();
  }

  playAudio() {
    document.getElementById("beep").play();
  }

  stopAudio() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }

  start() {
    this.setState({
      running: !this.state.running });


    const interval = setInterval(() => {
      if (this.state.running === false) {

        if (this.state.seconds > 0) {
          this.setState({
            seconds: this.state.seconds - 1 });

        }

        if (this.state.seconds == 0 && this.state.minutes > 0) {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59 });

        }

        if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.label == "Session") {
          const timeEnd = setTimeout(() => {
            this.setState({
              label: "Break",
              minutes: this.state.break,
              seconds: 0 });

            this.playAudio();
          }, 1000);
        }

        if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.label == "Break") {
          const timeEndB = setTimeout(() => {
            this.setState({
              label: "Session",
              minutes: this.state.session,
              seconds: 0 });

            this.playAudio();
          }, 1000);
        }
      }

      if (this.state.running === true) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }

  plusBreak() {
    if (this.state.break <= 59 && this.state.running == true && this.state.label == "Break") {
      this.setState({
        break: this.state.break + 1,
        minutes: this.state.break + 1,
        seconds: 0 });

    }

    if (this.state.break <= 59 && this.state.running == true && this.state.label != "Break") {
      this.setState({
        break: this.state.break + 1 });

    }
  }

  minusBreak() {
    if (this.state.break >= 2 && this.state.running == true && this.state.label == "Break") {
      this.setState({
        break: this.state.break - 1,
        minutes: this.state.break - 1,
        seconds: 0 });

    }

    if (this.state.break >= 2 && this.state.running == true && this.state.label != "Break") {
      this.setState({
        break: this.state.break - 1 });

    }
  }

  minusSession() {
    if (this.state.session >= 2 && this.state.running == true && this.state.label == "Session") {
      this.setState({
        session: this.state.session - 1,
        minutes: this.state.session - 1,
        seconds: 0 });

    }

    if (this.state.session >= 2 && this.state.running == true && this.state.label != "Session") {
      this.setState({
        session: this.state.session - 1 });

    }
  }

  plusSession() {
    if (this.state.session <= 59 && this.state.running == true && this.state.label == "Session") {
      this.setState({
        session: this.state.session + 1,
        minutes: this.state.session + 1,
        seconds: 0 });

    }

    if (this.state.session <= 59 && this.state.running == true && this.state.label != "Session") {
      this.setState({
        session: this.state.session + 1 });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock" }, /*#__PURE__*/
      React.createElement("audio", { id: "beep", src: "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg" }), /*#__PURE__*/
      React.createElement("h1", null, "25 + 5 Clock"), /*#__PURE__*/
      React.createElement("div", { id: "tags-container" }, /*#__PURE__*/
      React.createElement("h2", { id: "break-label" }, "Break Lenght", /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", { id: "break-decrement", onClick: this.minusBreak }, "-"), /*#__PURE__*/React.createElement("span", { id: "break-length" }, this.state.break), /*#__PURE__*/React.createElement("button", { id: "break-increment", onClick: this.plusBreak }, "+"))), /*#__PURE__*/
      React.createElement("h2", { id: "session-label" }, "Session Lenght", /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", { id: "session-decrement", onClick: this.minusSession }, "-"), /*#__PURE__*/React.createElement("span", { id: "session-length" }, this.state.session), /*#__PURE__*/React.createElement("button", { id: "session-increment", onClick: this.plusSession }, "+")))), /*#__PURE__*/

      React.createElement("div", { id: "session-container" }, /*#__PURE__*/
      React.createElement("h1", { id: "timer-label" }, this.state.label), /*#__PURE__*/
      React.createElement("h1", { id: "time-left" }, this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes, ":", this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("button", { id: "start_stop", onClick: this.start }, "Start"), /*#__PURE__*/React.createElement("button", { id: "reset", onClick: this.reset }, "Reset")))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));