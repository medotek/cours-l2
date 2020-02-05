import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds : 0 };
    this.s = "s";
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.counter(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  counter() {
    this.setState( state => ({
      seconds: state.seconds + 1
    }));
  }
  
  
  
  render () {
    if (this.state.seconds >= 2) {
      this.s = "s";
    } else {
      this.s = "";      
    }
    return (
      <div data-testid="timer">
          <h2>{this.state.seconds}  Hindi{this.s} </h2>
      </div>
    );
  }
  
  
}

export default Timer;

