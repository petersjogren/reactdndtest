import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Area from "./Area";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  render() {
    return (
      <>
        <Area
          position={this.state}
          onDrag={(x, y) => this.setState({ x: x, y: y })}
        ></Area>
        <br />
        <Area
          position={{ x: this.state.x / 2, y: this.state.y }}
          onDrag={(x, y) => this.setState({ x: x * 2, y: y })}
        ></Area>
      </>
    );
  }
}

export default App;
