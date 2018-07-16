import React, { Component } from 'react';
import ReactGA from 'react-ga';

class SocialMediaLink extends Component {
  render() {
    return(
      <a className="SocialMediaLink" href={this.props.url} target="_blank" rel="noopener"
      onClick={() => ReactGA.event({
          category: 'Social Media',
          action: `Visited ${this.props.name}`
        })
      }>
        <img alt={this.props.name} src={require(`../../images/${this.props.img}`)}/>
      </a>
    );
  }
}

export default SocialMediaLink;
