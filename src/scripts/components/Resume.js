import React, { Component } from 'react';
import info from '../../data/contactInfo';
import toolData from '../../data/tools';
import socialMediaData from '../../data/socialMedia';
import SocialMediaLink from './SocialMediaLink';
import SkillLevel from './SkillLevel';
import Experience from './Experience';
import experienceData from '../../data/experience';

class Resume extends Component {
  render() {
    const socialMedia = this._renderSocialMediaLinks();
    const skillLevels = this._renderSkillLevels();
    const workExperiences = this._renderWorkExperiences();
    const volunteerExperiences = this._renderVolunteerExperiences();

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
        <div className="Experiences">
          <h2>Experiences</h2>
          {workExperiences}
        </div>
        <div className="Volunteering">
          <h2>Volunteering Experience</h2>
          {volunteerExperiences}
        </div>
        <div className="Certifications">
          <h2>Certifications</h2>
        </div>
        <div className="Publications">
          <h2>Publications</h2>
        </div>
        <div className="Honors">
          <h2>Honors and Awards</h2>
        </div>
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
    );
  }
  _renderWorkExperiences() {
    return experienceData.workExperience.map((ex) =>
      <Experience
        key={ex.id}
        title={ex.title}
        company={ex.company}
        logo={ex.logo}
        startDate={ex.startDate}
        endDate={ex.endDate}
        achievements={ex.achievements} />
    );
  }
  _renderVolunteerExperiences() {
    return experienceData.volunteerExperience.map((ex) =>
      <Experience
        key={ex.id}
        title={ex.title}
        company={ex.company}
        logo={ex.logo}
        startDate={ex.startDate}
        endDate={ex.endDate}
        achievements={ex.achievements} />
    );
  }
}

export default Resume;
