import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SecondScreen from "./components/secondScreen";
import MyToolBar from './components/myToolBar';
import MainScreen from "./components/mainScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import List from "./components/list/list";
import {observer} from "mobx-react";
import {appSettingsStore} from "./stores/appSettingsStore";
import MangoScreen from "./components/mangoScreen";


const theme = createMuiTheme({
    palette: {
        type: appSettingsStore.isDarkMode ? 'dark' : 'light',
    },
});


const Root = (
    <App></App>
);


ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
