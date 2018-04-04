import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './styles/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import GoogleAnalyticsTracker from './scripts/modules/GoogleAnalyticsTracker';

ReactDOM.render(
  <HashRouter>
    <Route component={GoogleAnalyticsTracker(App)} />
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
