// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {

  render() {
    console.log('NODE_ENV', process.env.NODE_ENV);
    const abc = 'temp var';
    debugger;
    console.log('abc: ', abc);
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
