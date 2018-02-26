import React, { Component } from 'react';
import Slider from 'react-slick';
import SocialMediaLink from '../SocialMediaLink.js';
import socialMediaData from '../../../data/socialMedia.json';
import googleVisit from '../../../images/googleVisit.JPG';
import hackathon from '../../../images/hackathon.JPG';
import code2040Home from '../../../images/code2040Home.JPG';
import { Link } from 'react-router-dom';
import '../../../styles/Intro.css';
import '../../../styles/Home.css';

class Intro extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();
    const slickSettings = { slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, autoplay: true, speed: 1000, pauseOnHover: false };

    return(
      <div className="Intro Home-section">
        <div className="Intro__background">
          <div className="Intro__background-shade Home-overlay"></div>
          <Slider className="Intro__background-image" {...slickSettings}>
            <img alt={`googleVisit`} src={googleVisit} />
            <img alt={`hackathon`} src={hackathon} />
            <img alt={`code2040Home`} src={code2040Home} />
          </Slider>
        </div>
        <ul className="Intro__social-links">
          {socialMedia}
        </ul>
        <div className="Home-content" id="Intro__content">
          <h1>Hi, I'm Raymond</h1>
          <h3>I'm a Community Volunteer, Entrepreneur, Software Engineer and
          Web Designer. I'm interested in creating software that helps
          underpriviledged people find their passion and reach their potential.</h3>
          <Link className="Home-content__link" to='/resume'><button>check out my resume</button></Link>
          <Link className="Home-content__link" to='/projects'><button>check out my projects</button></Link>
        </div>
      </div>
    );
  }

  _renderSocialMediaLinks() {
    return socialMediaData.map((socialMedia) =>
      <li key={socialMedia.id}>
        <SocialMediaLink
        name={socialMedia.name}
        url={socialMedia.url}
        img={socialMedia.img} />
      </li>
    );
  }
}

export default Intro;
