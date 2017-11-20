import React, { Component } from 'react';
import info from '../../data/contactInfo';
import toolData from '../../data/tools';
import socialMediaData from '../../data/socialMedia';
import SocialMediaLink from './SocialMediaLink';
import SkillLevel from './SkillLevel';

class Resume extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();
    const skillLevels = this._renderSkillLevels();

    return(
      <div className="Resume">
        <aside>
          <img className="Resume__img" alt={`${info.firstName} ${info.lastName}`} src={info.img} />
          <h2 className="Resume__name">{`${info.firstName} ${info.lastName}`}</h2>
          <div className="Resume__contact-info">
            <p className="Resume__phone-number">{`${info.phoneNumber}`}</p>
            <p className="Resume__email-address">{`${info.emailAddress}`}</p>
            <div className="Resume__social-media">
              <ul>
                {socialMedia}
              </ul>
            </div>
            <div className="skillLevels">
              {skillLevels}
            </div>
          </div>
        </aside>
        <button className="Resume__download-button">download resume pdf</button>
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

  _renderSkillLevels() {
    return toolData.map((skill) =>
      <SkillLevel
        key={skill.id}
        name={skill.name}
        skillLevel={skill.skillLevel} />
    )
  }
}

export default Resume;
