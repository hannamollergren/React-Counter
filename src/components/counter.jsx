import React, { Component } from "react";
import counter from "./counter.css";

class Counter extends Component {
  state = {
		count: 0,
  };
  render() {
    React.createElement("h1");
    return (
      <div>
    	<h1>React Counter</h1>
		<span className="badge badge-primary m-2">{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  formatCount(){
	  const { count } = this.state;
	  return count === 0 ? 'Zero' : count; 
  }
}

export default Counter;
