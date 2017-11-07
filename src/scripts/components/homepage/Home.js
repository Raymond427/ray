import React, { Component } from 'react';
import SocialMediaLink from '../SocialMediaLink.js';
import data from '../../../data/data.js';

class Home extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();

    return(
      <div className="Home">
        <div className="Home-background--image">
          <div className="Home-background--shade">
            <div className="Home-social-links">
              <ul>
                {socialMedia}
              </ul>
            </div>
            <div className="Home-content">
              <h1>Hi, I'm Raymond</h1>
              <h2>I'm a Community Volunteer, Entrepreneur, Software Engineer and
              Web Designer. I'm interested in creating software that helps
              underpriviledged people find their passion and reach their potential.</h2>
              <button>check out my resume</button>
              <button>check out my projects</button>
              <button>contact me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderSocialMediaLinks() {
    return data.socialMediaLinks.map((socialMedia) =>
      <li key={socialMedia.id}>
        <SocialMediaLink
        name={socialMedia.name}
        url={socialMedia.url}
        img={socialMedia.img} />
      </li>
    );
  }
}

export default Home;
