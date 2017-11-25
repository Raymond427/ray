import React, { Component } from 'react';

class Award extends Component {
  render() {
    return(
      <div className="Award">
        <h3 className="Award__title">{this.props.title}</h3>
        <h4 className="Award__organization">{this.props.organization}</h4>
        <h4 className="Award__dateReceived">{this.props.dateReceived}</h4>
        <p className="Award__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Award;
