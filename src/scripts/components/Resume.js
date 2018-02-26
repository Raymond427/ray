import React, { Component } from 'react';
import Experience from './Experience';
import Publication from './Publication';
import ResumeInfo from './ResumeInfo';
import Award from './Award';
import contactInfoData from '../../data/contactInfo';
import experienceData from '../../data/experience';
import publicationData from '../../data/publications';
import awardData from '../../data/awards';
import Certificate from './Certificate'
import certificateData from '../../data/certificates';
import '../../styles/Resume.css';

class Resume extends Component {
  render() {
    const workExperiences = this._renderExperiences('workExperience');
    const volunteerExperiences = this._renderExperiences('volunteerExperience');
    const publications = this._renderPublications();
    const awards = this._renderAwards();
    const certificates = this._renderCertificates();

    return(
      <div className="Resume">
        <ResumeInfo contactInfo={contactInfoData} />
        <div className="Resume__content">
          <a className="Resume__download-link" download="%PUBLIC_URL%/../src/data/RaymondFerrellResume">
            <button className="Resume__download-button">download resume pdf</button>
          </a>
          <div className="Experiences Resume__experience">
            <h2>Experiences</h2>
            {workExperiences}
          </div>
          <div className="Volunteering Resume__experience">
            <h2>Volunteering Experience</h2>
            {volunteerExperiences}
          </div>
          <div className="Certifications Resume__experience">
            <h2>Certifications</h2>
            {certificates}
          </div>
          <div className="Publications Resume__experience">
            <h2>Publications</h2>
            {publications}
          </div>
          <div className="Honors Resume__experience">
            <h2>Honors and Awards</h2>
            {awards}
          </div>
        </div>
      </div>
    );
  }

  _renderExperiences(type) {
    return experienceData[type].map((ex) =>
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

  _renderCertificates() {
    return certificateData.map((cert) =>
      <Certificate
        key={cert.id}
        type={`resume`}
        logo={cert.logo}
        name={cert.name}
        school={cert.school}
        url={cert.url}
        skillsLearned={cert.skillsLearned} />
    );
  }
}

export default Resume;
