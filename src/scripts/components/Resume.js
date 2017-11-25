import React, { Component } from 'react';
import Experience from './Experience';
import Publication from './Publication';
import ResumeInfo from './ResumeInfo';
import Award from './Award';
import experienceData from '../../data/experience';
import publicationData from '../../data/publications';
import awardData from '../../data/awards';

class Resume extends Component {
  render() {
    const workExperiences = this._renderWorkExperiences();
    const volunteerExperiences = this._renderVolunteerExperiences();
    const publications = this._renderPublications();
    const awards = this._renderAwards();

    return(
      <div className="Resume">
        <button className="Resume__download-button">download resume pdf</button>
        <ResumeInfo/>
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
          {publications}
        </div>
        <div className="Honors">
          <h2>Honors and Awards</h2>
          {awards}
        </div>
      </div>
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

  _renderPublications() {
    return publicationData.map((pub) =>
      <Publication
        key={pub.id}
        title={pub.title}
        datePublished={pub.datePublished}
        publicationCompany={pub.publicationCompany}
        description={pub.description} />
    );
  }

  _renderAwards() {
    return awardData.map((award) =>
      <Award
        key={award.id}
        title={award.title}
        organization={award.organization}
        dateReceived={award.dateReceived}
        description={award.description} />
    );
  }
}

export default Resume;
