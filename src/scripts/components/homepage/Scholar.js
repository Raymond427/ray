import React, { Component } from 'react';
import Certificate from '../Certificate';
import certificateData from '../../../data/certificates';
import { Link } from 'react-router-dom';
import '../../../styles/Home.css';
import '../../../styles/Scholar.css';

class Scholar extends Component {
  render() {
    const certificates = this._renderCertificates();
    return(
      <div className="Scholar Home-section" style={{backgroundImage: `url(${require(`../../../images/scholar.png`)})`}}>
        <div className="Certificate__shade Home-overlay">
          <div className="Scholar__content Home-content">
            <h1>Scholar</h1>
            <h3>I'm an advocate for making education more accessible using
            technology, my biggest hobby is collecting certificates from
            online university courses</h3>
            <Link to='/projects'><button>check out my published research on stem education</button></Link>
            <div className="Certificates">
              {certificates}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderCertificates() {
    return certificateData.map((cert) =>
      <Certificate
        key={cert.id}
        type={`home`}
        logo={cert.logo}
        name={cert.name}
        school={cert.school} />);
  }
}

export default Scholar;
