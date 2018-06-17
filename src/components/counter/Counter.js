import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from '../../services/counter/counterActions';
import styles from './counter.scss';

class Counter extends PureComponent {
  render() {
    return (
      <div>
        {this.props.count}
        <input className={styles.btn} type="button" onClick={this.props.increment} value="Increment"/>
      </div>
    );
  }
}

Counter.propType = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  count: state.counter.count,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
