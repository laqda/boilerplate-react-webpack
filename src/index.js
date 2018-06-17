import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import * as Routes from './routes';
import rootReducer from './services/rootReducer';

const history = createHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);
render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Routes.Home}/>
          <Route path="/home" component={Routes.Home}/>
          <Route path="/about" component={Routes.About}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);