import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
