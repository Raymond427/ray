import React, { Component } from 'react';
import Org from '../Org';

class Hobby extends Component {
  render() {
    const orgs = this._renderOrgs();

    return(
      <div className="Hobby">
        <div className="Hobby__info">
          <h2>{this.props.hobby.type}</h2>
          <p>{this.props.hobby.description}</p>
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
          key={org.id}/>
      )
    );
  }
}

export default Hobby;
