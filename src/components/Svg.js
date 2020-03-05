import React, { Component } from "react";
import List from "./List";
class Svg extends Component {
  render() {
    return (
      <div className="company">
        <div className="text-1">
          <p>
            We are a global <br /> company <br />
            with local culture
          </p>
        </div>
        <div className="svg-right">
          <List />
        </div>
      </div>
    );
  }
}
export default Svg;