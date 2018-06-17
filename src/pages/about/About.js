import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../../components/counter/Counter';
import Nav from '../../components/Nav';
import styles from './About.css';

class About extends PureComponent {
  render() {
    return (
      <div>
        <Nav/>
        <h1 className={styles.title}>About</h1>
        <Counter/>
      </div>
    );
  }
}

About.propTypes = {};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(About);