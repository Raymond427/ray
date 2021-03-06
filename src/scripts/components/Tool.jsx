import React, { Component } from 'react';
import '../../styles/Tool.css';

class Tool extends Component {
  render () {
    return (
      <div className="Tool">
        <img src={require(`../../images/${this.props.img}`)} alt={this.props.name}/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Tool;
