import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    // console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="container">
        <h1>Секунд: {this.state.seconds}s</h1>
      </div>
    );
  }
}

export default Timer;
