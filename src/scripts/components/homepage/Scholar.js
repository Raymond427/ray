import React, { Component } from 'react';
import Certificate from '../Certificate';
import certificateData from '../../../data/certificates';
import { Link } from 'react-router-dom';

class Scholar extends Component {
  render() {
    const certificates = this._renderCertificates();
    return(
      <div className="Scholar" style={{backgroundImage: `url(${require(`../../../images/scholar.png`)})`}}>
        <h1>Scholar</h1>
        <p>I'm an advocate for making education more accessible using
        technology, my biggest hobby is collecting certificates from
        online university courses</p>
        <Link to='/projects'><button>check out my published research on stem education</button></Link>
        {certificates}
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
