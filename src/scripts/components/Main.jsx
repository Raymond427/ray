import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: 'left 500ms ease-in-out',
  position: 'absolute',
  boxShadow: '0 0.44rem 0.625rem 0 rgba(0, 0, 0, .25)',
  left: 0,
}

const transitionStyles = {
  true: { left: '20rem' },
  false: { left: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={500}>
    {(menuOpen) => (
      <main style={{ ...defaultStyle, ...transitionStyles[inProp] }}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </main>
    )}
  </Transition>
);

class Main extends Component {
  render() {
    return(
      <Fade in={this.props.menuOpen}/>
    );
  }
}

const mapStateToProps = state => {
  return { menuOpen: state.menuReducer.menuOpen }
}

export default withRouter(connect(
  mapStateToProps
)(Main))
