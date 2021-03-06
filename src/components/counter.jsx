import React, { Component } from "react";

class Counter extends Component {
  state = {
		value: this.props.value,
  };

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? 'warning' : 'primary';
		return classes;
	}
  	formatvalue(){
		const { value } = this.state;
		return value === 0 ? 'Zero' : value; 
	}
	handleIncrement = () => {				
		this.setState({ value: this.state.value + 1 });
	}
  
  render() {  
	  console.log(this.props);
	  
    return (
      <div>
	<span className={ this.getBadgeClasses() }>{ this.formatvalue() }</span>
        <button onClick={ () => this.handleIncrement() } className="btn btn-secondary btn-sm">Increment</button><button onClick={ () => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
      </div>
    );
  }
  	
}

export default Counter;
