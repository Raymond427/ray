import React, { Component } from 'react';
import Certificate from '../Certificate';
import certificateData from '../../../data/certificates';

class Scholar extends Component {
  render() {
    const certificates = this._renderCertificates();
    return(
      <div className="Scholar">
        <h1>Scholar</h1>
        <p>I'm an advocate for making education more accessible using
        technology, my biggest hobby is collecting certificates from
        online university courses</p>
        <button>check out my published research on stem education</button>
        {certificates}
      </div>
    );
  }

  _renderCertificates() {
    return certificateData.map((cert) =>
      <Certificate
        key={cert.id}
        type={`home`}
        img={cert.img}
        name={cert.name}
        school={cert.school} />);
  }
}

export default Scholar;
