import React, { Component } from 'react';

class Certificate extends Component {
  render() {
    return(
      <div className="Certificate">
        <img alt={this.props.name} src={this.props.img} />
        <p>{this.props.name}</p>
        <p>{this.props.school}</p>
      </div>
    );
  }
}

export default Certificate;
