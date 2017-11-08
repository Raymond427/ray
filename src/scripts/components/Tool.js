import React, { Component } from 'react';

class Tool extends Component {
  render () {
    return (
      <div className="Tool">
        <img src={this.props.img} alt={this.props.name}/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Tool;
