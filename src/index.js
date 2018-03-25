import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './scripts/reducers';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import './styles/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-115926230-1');

const history = createHistory();
history.listen(
  (location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
);

const middleware = routerMiddleware(history);
export const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

ReactGA.pageview(window.location.pathname + window.location.search);
registerServiceWorker();
