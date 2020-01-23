import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {observer} from "mobx-react";
import {userStore} from "./stores/userStore";
import {appSettingsStore} from "./stores/appSettingsStore";

import Button from '@material-ui/core/Button';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import classes from "*.module.css";
import MyToolBar from './components/myToolBar';
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MangoScreen from "./components/mangoScreen";
import SecondScreen from "./components/secondScreen";
import MainScreen from "./components/mainScreen";
import {createMuiTheme} from "@material-ui/core/styles";


@observer
class App extends React.Component{
    createMuiTheme1 = () => {
        return  createMuiTheme({
            palette: {
                type: appSettingsStore.isDarkMode ? 'dark' : 'light',
            },
        });
    };
    render(){
        return (
            <div className="App">
                    <ThemeProvider theme={this.createMuiTheme1()}>
                        <Router>
                            <MyToolBar></MyToolBar>
                            <div>
                                <Route path="/mango" component={MangoScreen} />
                                <Route path="/secondPage" component={SecondScreen} />
                                <Route path="/MainScreen" component={MainScreen} />
                            </div>
                        </Router>
                    </ThemeProvider>
            </div>
        )
    }
}

export default App;
