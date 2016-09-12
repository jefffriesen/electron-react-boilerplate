import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <div className="row">
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
          </div>
        </div>
      </div>
    );
  }
}
