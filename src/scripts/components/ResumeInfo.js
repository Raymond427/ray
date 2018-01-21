import React, { Component } from 'react';
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
        <img className="ResumeInfo__img" alt={`${this.props.contactInfo.firstName} ${this.props.contactInfo.lastName}`} src={require(`../../images/${this.props.contactInfo.img}`)} />
        <h2 className="ResumeInfo__name">{`${this.props.contactInfo.firstName} ${this.props.contactInfo.lastName}`}</h2>
        <div className="ResumeInfo__contact-info">
          <p className="ResumeInfo__phone-number">{`${this.props.contactInfo.phoneNumber}`}</p>
          <p className="ResumeInfo__email-address">{`${this.props.contactInfo.emailAddress}`}</p>
        </div>
        <div className="ResumeInfo__education">
          <h4>Education</h4>
          <img alt={this.props.contactInfo.school} src={require(`../../images/${this.props.contactInfo.education.bachelors.img}`)} />
          <p className="ResumeInfo__school-name">{this.props.contactInfo.education.bachelors.school}</p>
          <p className="ResumeInfo__degree">{this.props.contactInfo.education.bachelors.degree}</p>
          <p className="ResumeInfo__school-years">{`${this.props.contactInfo.education.bachelors.enrollmentYear} - ${this.props.contactInfo.education.bachelors.graduationYear}`}</p>
        </div>
        <div className="ResumeInfo__social-media">
          <ul>
            {socialMedia}
          </ul>
        </div>
        <div className="skillLevels">
          <h4>Skills</h4>
          {skillLevels}
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
