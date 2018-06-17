import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class LoadingTooMuchTime extends PureComponent {
  render() {
    return (
      <span>Taking a long time... <button onClick={this.props.retry}>Retry</button></span>
    );
  }
}

LoadingTooMuchTime.propTypes = {
  retry: PropTypes.func.isRequired,
};
export default LoadingTooMuchTime;