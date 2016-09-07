import React from 'react';
import fs from 'fs';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

// const remote = require('electron').remote;
// const appPath = remote.app.getAppPath();
// console.log('appPath: ', appPath);
//
// const irisPath = `/${appPath}/app/data/iris.json`;
// const irisData = JSON.parse(fs.readFileSync(irisPath, 'utf8'));
// console.log('irisData: ', irisData);

import path from 'path';
import { remote } from 'electron';

const irisPath = path.join(remote.app.getPath('appData'), '/electron-react-boilerplate/iris.json');
console.log('irisPath: ', irisPath);

const irisData = JSON.parse(fs.readFileSync(irisPath, 'utf8'));
console.log('irisData: ', irisData);

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
