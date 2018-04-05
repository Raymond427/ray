import React, { Component } from 'react';
import Org from '../Org';
import '../../../styles/Home.css';
import '../../../styles/Hobby.css';

class Hobby extends Component {
  render() {
    const orgs = this._renderOrgs();

    return(
      <div className={`${this.props.className} Hobby Home-section`}>
        <div className="Hobby__info">
          <h2>{this.props.hobby.type}</h2>
          <p>{this.props.hobby.description}</p>
        </div>
        <div className="Org__wrapper">
          {orgs}
        </div>
      </div>
    );
  }

  _renderOrgs() {
    return (
      this.props.hobby.orgs.map((org) =>
        <Org
          name={org.name}
          logo={org.logo}
          img={org.img}
          description={org.description}
          url={org.url}
          key={org.id}/>
      )
    );
  }
}

export default Hobby;
