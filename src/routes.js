/*eslint react/prop-types:0*/
/*eslint no-shadow:0*/
import axios from 'axios';
import React from 'react';
import Loadable from 'react-loadable';
import LoadingError from './components/loadings/LoadingError';
import LoadingTooMuchTime from './components/loadings/LoadingTooMuchTime';
import LoadingWait from './components/loadings/LoadingWait';

/**
 * @return {null}
 */
function Loading(props) {
  if (props.error) {
    return <LoadingError retry={props.retry}/>;
  } else if (props.pastDelay) {
    return <LoadingTooMuchTime retry={props.retry}/>;
  }
  return <LoadingWait/>;
}

export { default as Home } from './pages/home/Home';
export const About = Loadable.Map({
  loader: {
    About: () => import('./pages/about/About'),
    data: () => axios.get('https://api.github.com/').then(res => res.data),
  },
  render(loaded, props) {
    const About = loaded.About.default;
    return <About {...props} data={loaded.data}/>;
  },
  loading: Loading,
  delay: 4000,
});