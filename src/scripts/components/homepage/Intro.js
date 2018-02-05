import React, { Component } from 'react';
import Slider from 'react-slick';
import SocialMediaLink from '../SocialMediaLink.js';
import socialMediaData from '../../../data/socialMedia.json';
import googleVisit from '../../../images/googleVisit.JPG';
import hackathon from '../../../images/hackathon.JPG';
import code2040Home from '../../../images/code2040Home.JPG';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();
    const slickSettings = { slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, autoplay: true, speed: 1000, pauseOnHover: false };

    return(
      <div className="Intro">
        <div className="Intro__background-image">
          <Slider {...slickSettings}>
            <img alt={`googleVisit`} src={googleVisit} />
            <img alt={`hackathon`} src={hackathon} />
            <img alt={`code2040Home`} src={code2040Home} />
          </Slider>
          <div className="Intro__background-shade overlay"></div>
        </div>
        <div className="Intro__social-links">
          <ul>
            {socialMedia}
          </ul>
        </div>
        <div className="Intro__content">
          <h1>Hi, I'm Raymond</h1>
          <h2>I'm a Community Volunteer, Entrepreneur, Software Engineer and
          Web Designer. I'm interested in creating software that helps
          underpriviledged people find their passion and reach their potential.</h2>
          <Link to='/resume'><button>check out my resume</button></Link>
          <Link to='/projects'><button>check out my projects</button></Link>
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
