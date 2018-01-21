import React, { Component } from 'react';

class Certificate extends Component {
  render() {
    if (this.props.type === 'resume') {
      const descriptions = this._renderDescriptions();

      return(
        <div className="Certificate">
          <img className="Certificate__logo" alt={`${this.props.school}`} src={require(`../../images/${this.props.logo}`)} />
          <div className="Certificate__info">
            <h3 className="Certificate__name">{this.props.name}</h3>
            <h4 className="Certificate__school">{this.props.school}</h4>
            <a className="Certificate__verify" href={this.props.url} target="blank">Verify</a>
            <ul className="Certificate__descriptions">
              {descriptions}
            </ul>
          </div>
        </div>
      );
    } else if (this.props.type === 'home') {
      return(
        <div className="Certificate">
          <img alt={this.props.name} src={require(`../../images/${this.props.logo}`)} />
          <p>{this.props.name}</p>
          <p>{this.props.school}</p>
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
