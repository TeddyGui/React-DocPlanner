import React, { Component } from "react";
import Services from "./Services";

class Health extends Component {
  render() {
    return (
      <div className="Services">
      <div class="Service1">
        <div className="text-2">
          <h1>
            The world's<br />biggest healthcare platform</h1>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
          </p>
        </div>

        <div className="Service2">
          <Services />
        </div>
      </div>
      </div>
    );
  }
}
export default Health;
