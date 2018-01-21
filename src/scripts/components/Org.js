import React, { Component } from 'react';

class Org extends Component {
  render() {
    return(
      <div className="Org" style={{backgroundImage: `url(${require(`../../images/${this.props.img}`)})`}}>
        <div className="Org__shade">
          <img className="Org__logo" alt={this.props.name} src={require(`../../images/${this.props.logo}`)}/>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Org;
