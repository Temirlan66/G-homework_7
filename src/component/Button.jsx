import React from "react";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Click" };

    this.clickHandle = this.clickHandle.bind(this);
  }

  //   componentDidMount() {
  //     console.log("componentDidMount");
  //   }
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }
  //   componentWillUnmount() {
  //     console.log("componentWillUnmount");
  //   }

  clickHandle = () => {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className });
  };
  render() {
    return (
      <div className="container-btn">
        <button onClick={this.clickHandle} className={this.state.class}>
          {this.state.label}
        </button>
      </div>
    );
  }
}
