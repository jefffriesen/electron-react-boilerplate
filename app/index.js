import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// Notes:
// * fs-test: packaging finds iris.json just fine, npm run dev doesn't
// * trying graceful-fs with no luck:
// * https://discuss.atom.io/t/cant-find-file-when-using-fs-readfilesync-from-packaged-electron-app/24854/5
// `${process.resourcesPath}/data/db.sqlite`

// * There's just no way it should be looking in the node_modules directory for resources
// If our app writes to node_modules it's a problem.
// It needs to be with the

// npm run package (and launch):
// appPath  (working!)  :  /Users/jeffers/git/forks/electron-react-boilerplate/release/darwin-x64/thisAppName-darwin-x64/thisAppName.app/Contents/Resources/app
// process.resourcesPath:  /Users/jeffers/git/forks/electron-react-boilerplate/release/darwin-x64/thisAppName-darwin-x64/thisAppName.app/Contents/Resources

// npm run dev:
// appPath              :  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources/default_app.asar
// process.resourcesPath:  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources

// npm run hot-server, npm run start-hot (same as npm run dev)
// appPath              :  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources/default_app.asar
// process.resourcesPath:  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources

// npm run hot-server, npm start
// appPath  (working!)  :  /Users/jeffers/git/forks/electron-react-boilerplate
// process.resourcesPath:  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources

// npm run dev (switching to NODE_ENV=production in npm run start-hot)
// appPath              :  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources/default_app.asar
// process.resourcesPath:  /Users/jeffers/git/forks/electron-react-boilerplate/node_modules/electron/dist/Electron.app/Contents/Resources

// The diffference between working and not working on dev are these two lines:
// "start": "cross-env NODE_ENV=production electron ./",
// "start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./main.development",
// Setting NODE_ENV=production in start-hot doesn't fix it, so that leaves either:
// 1. babel-register and babel-polyfill
// or
// 2. main.js (works) vs. main.development.js (doesn't work)

import fs from 'fs';

const remote = require('electron').remote;
const appPath = remote.app.getAppPath();
console.log('appPath              : ', appPath);
console.log('process.resourcesPath: ', process.resourcesPath)


const irisPath0 = `${appPath}/app/data/iris.json`;
const irisPath1 = `${process.resourcesPath}/app/data/iris.json`;
const irisPath2 = `${appPath}/data/iris.json`;

const irisData = JSON.parse(fs.readFileSync(irisPath2, 'utf8'));
console.log('irisData: ', irisData);




render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
