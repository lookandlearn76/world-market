import React, { Component} from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    }
  }

  increment = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  decrement = (event) => {
    event.preventDefault();
    if(this.state.count <= 1) {
      return this.state.count;
    } else {
      this.setState(prevState => ({
        value: prevState.value - 1
      }));
    };
  }



  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <input type="number" ref="feedQty" value={this.state.value} onChange={this.feed.bind(this)} />
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
