import React, { Component } from 'react';
import codeLinkImg from '../../images/code.png';
import newTabLink from '../../images/openInNewWindow.png';
import '../../styles/Project.css';
import ReactGA from 'react-ga';

class Project extends Component {
  render() {
    const viewCodeLink = this._renderLinkIfPresent(this.props.codeURL, "code", codeLinkImg);
    const viewSiteLink = this._renderLinkIfPresent(this.props.siteURL, "site", newTabLink);
    return(
      <div className="Project" style={{backgroundImage: `url(${require(`../../images/${this.props.img}`)})`}}>
        <div className="Project__shade" style={{backgroundColor: `rgba(${this.props.color}, 0.8)`}}>
          <p className="Project__name">{this.props.name}</p>
          <p className="Project__type">{this.props.type}</p>
          <p className="Project__description">{this.props.description}</p>
          <div className="Project__links">
            {viewCodeLink}
            {viewSiteLink}
          </div>
        </div>
      </div>
    );
  }

  _renderLinkIfPresent(url, type, img) {
    if (url) {
      return(
        <a className={`Project__view-${type}`} href={url}
          onClick={() => ReactGA.event({
            category: 'Project',
            action: `Viewed ${type}: (${url})`
          })}>
          <img alt={`view-${type}`} src={img} />
          <p>view {type}</p>
        </a>
      );
    }
  }
}

export default Project;
