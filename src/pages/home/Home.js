import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from '../../components/Nav';
import styles from './Home.css';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Nav/>
        <h1 className={styles.title}>Bienvenue !</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);