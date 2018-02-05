import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './scripts/reducers';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import './styles/index.css';
import App from './scripts/components/App';
import logger from 'redux-logger';
import registerServiceWorker from './scripts/registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);
export const store = createStore(reducers, applyMiddleware(middleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
