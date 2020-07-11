import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Area from "./Area";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, width: 100, height: 100 };
  }

  render() {
    return (
      <>
        <Area
          position={{ x: this.state.x, y: this.state.y }}
          width={this.state.width}
          height={this.state.height}
          onDrag={(x, y) => this.setState({ x: x, y: y })}
          onResize={(width, height) => {
            console.log("height", height);
            this.setState({ width: width, height: height });
          }}
        ></Area>
        <br />
        <Area
          position={{ x: this.state.x / 2, y: this.state.y }}
          width={this.state.width}
          height={this.state.height}
          onDrag={(x, y) => this.setState({ x: x * 2, y: y })}
          onResize={(width, height) =>
            this.setState({ width: width, height: height })
          }
        ></Area>
      </>
    );
  }
}

export default App;
