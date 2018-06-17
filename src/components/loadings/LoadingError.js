import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class LoadingError extends PureComponent {
  render() {
    return (
      <span>Error ! <button onClick={this.props.retry}>Retry</button></span>
    );
  }
}

LoadingError.propTypes = {
  retry: PropTypes.func.isRequired,
};
export default LoadingError;