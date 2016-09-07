import React, { Component } from 'react';
import { Link } from 'react-router';
import fs from 'fs';
// New
import path from 'path';
import {remote} from 'electron';
const appPath = remote.app.getPath('appData')

// Old
// const remote = require('electron').remote;
//
// const appPath = remote.app.getAppPath();

import styles from './Home.css';

export default class Home extends Component {

  state = {
    data: {}
  }

  componentWillMount() {

    // New
    // const irisPath = path.join(remote.app.getPath('appData'), '/thisAppName/data/iris.json');
    // const irisData = JSON.parse(fs.readFileSync(irisPath, 'utf8'));
    // console.log('appData: ', remote.app.getPath('appData'));
    // console.log('irisPath: ', irisPath);
    // console.log('irisData: ', irisData);
    // this.setState({ data: irisData });

    // Old
    // const irisPath = `${appPath}/app/data/iris.json`;
    // const irisData = fs.readFileSync(irisPath, 'utf8');
    console.log("remote.app.getAppPath(): ", remote.app.getAppPath())
    console.log("remote.app.getPath('appData'): ", remote.app.getPath('appData'))
    // console.log('irisPath: ', irisPath);
    // console.log('irisData: ', irisData);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <div>{JSON.stringify(this.data)}</div>
        </div>
      </div>
    );
  }
}
