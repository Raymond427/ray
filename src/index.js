import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './styles/index.css';
import App from './scripts/components/App';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import ScrollToTop from './scripts/components/ScrollToTop';

ReactGA.initialize('UA-115926230-1');
const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

ReactGA.pageview('/');
