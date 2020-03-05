import React, { Component } from "react";
import Picture from "./Picture";

class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <div className="office-header">
          <h1>
            Improve the lives of millions. <br />
            Change yours forever
          </h1>

          <p>
            More than 500 team mates share our same vision, goals and passion.{" "}
            <br /> With offices in Warsaw, Barcelona, Istanbul, Rome,Czech
            Republic, <br /> Mexico City, Colombia and Curitiba, our search for
            great talent never stops.
          </p>
        </div>
        <div className="countries">
          <Picture />
        </div>
      </div>
    );
  }
}
export default Section5;
