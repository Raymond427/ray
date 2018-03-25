import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from './scripts/reducers';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import './styles/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-115926230-1');

const history = createHistory();
history.listen(
  (location, action) => {
    ReactGA.set({ page: location.hash.slice(1) });
    ReactGA.pageview(window.location.hash.slice(1) + window.location.search);
  }
);

const middleware = routerMiddleware(history);
export const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
