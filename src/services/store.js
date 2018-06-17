import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const history = createBrowserHistory();
const initialState = {};
const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
    ...enhancers,
  ),
)