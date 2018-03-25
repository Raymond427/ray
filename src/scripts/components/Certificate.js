import React, { Component } from 'react';
import ReactGA from 'react-ga';
import '../../styles/Certificate.css';

class Certificate extends Component {
  render() {
    if (this.props.type === 'resume') {
      const descriptions = this._renderDescriptions();

      return(
        <div className="Certificate">
          <div className="Certificate__container">
            <img className="Certificate__logo" alt={`${this.props.school}`} src={require(`../../images/${this.props.logo}`)} />
            <div className="Certificate__info">
              <h3 className="Certificate__name">{this.props.name}</h3>
              <h4 className="Certificate__school">{this.props.school}</h4>
            </div>
            <a className="Certificate__verify" href={this.props.url} target="blank"
            onClick={() => ReactGA.event({
              category: 'Resume',
              action: `Verified ${this.props.name} Certificate`
            })}>Verify</a>
          </div>
          <ul className="Certificate__descriptions">
            {descriptions}
          </ul>
        </div>
      );
    } else if (this.props.type === 'home') {
      return(
        <div className="Certificate-home">
            <img className="Certificate-home__logo"alt={this.props.name} src={require(`../../images/${this.props.logo}`)} />
            <p className="Certificate-home__name">{this.props.name}</p>
            <p className="Certificate-home__school">{this.props.school}</p>
        </div>
      );
    }
  }

  _renderDescriptions() {
    return this.props.skillsLearned.map((skill) =>
      <li key={skill.id}>{skill.description}</li>
    );
  }
}

export default Certificate;
