import React, { Component } from 'react';

class SocialMediaLink extends Component {
  render() {
    return(
      <a className="SocialMediaLink" href={this.props.url} target="blank">
        <img alt={this.props.name} src={require(`../../images/${this.props.img}`)}/>
      </a>
    );
  }
}

export default SocialMediaLink;
