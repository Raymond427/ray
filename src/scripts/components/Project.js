import React, { Component } from 'react';

class Project extends Component {
  render() {
    const viewCodeLink = this._renderLinkIfPresent(this.props.codeURL, "code", "#");
    const viewSiteLink = this._renderLinkIfPresent(this.props.siteURL, "site", "#");

    return(
      <div className="Project" style={{backgroundImage: `url(${this.props.img})`}}>
        <div className="Project__shade" style={{backgroundColor: `${this.props.color}`}}></div>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.description}</p>
        {viewCodeLink}
        {viewSiteLink}
      </div>
    );
  }

  _renderLinkIfPresent(url, type, img) {
    if (url) {
      return(
        <a className={`Project__view-${type}`} href={url}>
          <img alt={`view-${type}`} src={img} />
          <p>view {type}</p>
        </a>
      );
    }
  }
}

export default Project;
