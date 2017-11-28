import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './styles/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
