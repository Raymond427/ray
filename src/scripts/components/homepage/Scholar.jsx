import React, { Component } from 'react';
import Certificate from '../Certificate';
import certificateData from '../../../data/certificates';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import '../../../styles/Home.css';
import '../../../styles/Scholar.css';

class Scholar extends Component {
  render() {
    const certificates = this._renderCertificates();
    return(
      <div className="Scholar Home-section" style={{backgroundImage: `url(${require(`../../../images/scholar.jpg`)})`}}>
        <div className="Scholar__shade Home-overlay">
          <div className="Scholar__content Home-content">
            <h2>Scholar</h2>
            <h4>I'm an advocate for making education more accessible using
            technology, my biggest hobby is collecting certificates from
            online university courses</h4>
            <Link to='/projects' tabIndex='-1'><button
            onClick={() => ReactGA.event({
              category: 'Homepage',
              action: `Clicked Scholar Projects Button`
            })}>check out my published research on stem education</button></Link>
            <div className="Certificates">
              {certificates}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderCertificates() {
    return certificateData.slice(0, 6).map((cert) =>
      <Certificate
        key={cert.id}
        type={`home`}
        logo={cert.logo}
        name={cert.name}
        school={cert.school} />);
  }
}

export default Scholar;
