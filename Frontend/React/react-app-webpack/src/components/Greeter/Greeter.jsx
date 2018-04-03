import React, { Component } from 'react';

import './Greeter.scss';
import message from '../../assets/json/message.json';

class Greeter extends Component {
  handleClick = e => {
    alert(`Hello ${this.TextInput.value || this.props.name}`);
  };

  // // 这种写法已经不是ES2015(ES6)的写法了，干死babel
  // handleClick = e => {
  //   alert(`Hello ${this.props.name}`);
  // };

  render() {
    return (
      <div className={'root'}>
        {message.greetText}
        <br />
        Hello {this.props.name}
        <br />
        <input type="text" className={'txt'} placeholder="What`s your name?" ref={el => (this.TextInput = el)} />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Greeter;
