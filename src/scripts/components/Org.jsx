import React, { Component } from 'react';
import '../../styles/Org.css';

class Org extends Component {
  render() {
    return(
      <div className="Org" style={{backgroundImage: `url(${require(`../../images/${this.props.img}`)})`}}>
        <div className="Org__shade">
          <img className="Org__logo" alt={this.props.name} src={require(`../../images/${this.props.logo}`)}/>
          <div className="Org__description-wrapper">
            <p className="Org__description">{this.props.description}</p>
            <a className="Org__url" href={this.props.url} target="_blank">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Org;
