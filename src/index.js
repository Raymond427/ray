import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './styles/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-115926230-1');
const fireTracker = () => { ReactGA.pageview(window.location.hash.slice(1)); console.log('FIIRREE!!!'); }
ReactDOM.render(
  <HashRouter onUpdate={fireTracker}>
      <App />
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
fireTracker(); //intial app visit
