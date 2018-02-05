import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../../styles/Main.css';

class Main extends Component {
  render() {
    return(
      <main className={this.determineClassName()}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </main>
    );
  }

  determineClassName() {
    if (this.props.menuOpen === null) {
      return 'Main'
    } else {
      return this.props.menuOpen ? 'Main menu-open' : 'Main menu-closed';
    }
  }
}

const mapStateToProps = state => {
  return { menuOpen: state.menuReducer.menuOpen }
}

export default withRouter(connect(
  mapStateToProps
)(Main))
