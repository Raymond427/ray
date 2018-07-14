import React, { Component } from 'react';

class Publication extends Component {
  render() {
    return(
      <div className="Publication">
        <h4 className="Publication__date">{this.props.datePublished}</h4>
        <h4 className="Publication__title">{this.props.title}</h4>
        <h4 className="Publication__company">{this.props.publicationCompany}</h4>
        <p className="Publication__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Publication;
