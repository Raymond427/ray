import React, { Component } from 'react';
import info from '../../data/contactInfo';
import toolData from '../../data/tools';
import socialMediaData from '../../data/socialMedia';
import SocialMediaLink from './SocialMediaLink';
import SkillLevel from './SkillLevel';

class ResumeInfo extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();
    const skillLevels = this._renderSkillLevels();

    return(
      <aside className="ResumeInfo">
        <img className="ResumeInfo__img" alt={`${info.firstName} ${info.lastName}`} src={info.img} />
        <h2 className="ResumeInfo__name">{`${info.firstName} ${info.lastName}`}</h2>
        <div className="ResumeInfo__contact-info">
          <p className="ResumeInfo__phone-number">{`${info.phoneNumber}`}</p>
          <p className="ResumeInfo__email-address">{`${info.emailAddress}`}</p>
          <div className="ResumeInfo__social-media">
            <ul>
              {socialMedia}
            </ul>
          </div>
          <div className="skillLevels">
            {skillLevels}
          </div>
        </div>
      </aside>
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
    );
  }
}

export default ResumeInfo;
