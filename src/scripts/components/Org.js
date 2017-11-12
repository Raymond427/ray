import React, { Component } from 'react';

class Org extends Component {
  render() {
    return(
      <div className="Org">
        <div className="Org__background" style={{backgroundImage: `url(${this.props.img})`}}>
          <div className="Org__shade">
            <img className="Org__logo" alt={this.props.name} src={this.props.logo}/>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Org;
