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


@observer
class App extends React.Component{
    handleClick() {
        userStore.setUserName("newName");
        appSettingsStore.tuggoleDarkMode();
    }
    render(){
        return (
            <div className="App">
            <MyToolBar></MyToolBar>
             {/*<Toolbar>*/}

             {/*    <a>welcome to shlomkes libreary mester {userStore.userInfo.name} !  </a>*/}
             {/*    <IconButton onClick={() => this.handleClick()}>*/}
             {/*        main page*/}
             {/*    </IconButton>*/}
             {/*    <IconButton  onClick={() => this.handleClick()}>*/}
             {/*        second page*/}
             {/*    </IconButton>*/}
             {/*    <div>*/}

             {/*        <Button variant="contained" color="primary" onClick={() => this.handleClick()}>*/}
             {/*            dark mode is {appSettingsStore.darkMode? "on" :"off"}*/}
             {/*        </Button>*/}
             {/*    </div>*/}
             {/*</Toolbar>*/}

                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                 <p> user name is {userStore.userInfo.name}</p>
                  dark mode is {appSettingsStore.isDarkMode? "on" :"off"}
                  <Button variant="contained" color="primary" onClick={() => this.handleClick()}>
                      change dark mode state
                  </Button>
              </header>

            </div>

        )
    }
}

export default App;
