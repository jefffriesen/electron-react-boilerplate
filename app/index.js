import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import fs from 'fs';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const remote = require('electron').remote;

const appPath = remote.app.getAppPath();
console.log('appPath              : ', appPath);
console.log('process.resourcesPath: ', process.resourcesPath);


const irisPath = `${appPath}/data/iris.json`;

const irisData = JSON.parse(fs.readFileSync(irisPath, 'utf8'));
console.log('irisData: ', irisData);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
