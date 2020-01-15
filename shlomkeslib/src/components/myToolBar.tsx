import React, {Component} from 'react';
import logo from './logo.svg';

import {observer} from "mobx-react";
import {userStore} from "../stores/userStore";
import {appSettingsStore} from "../stores/appSettingsStore";

import Button from '@material-ui/core/Button';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";


@observer
class MyToolBar extends React.Component{
    handleClick() {
        appSettingsStore.tuggoleDarkMode();
    }
    render(){
        return (
                <Toolbar>

                    <a>welcome to shlomkes libreary mester {userStore.userInfo.name} !  </a>
                    <IconButton onClick={() => this.handleClick()}>
                        main page
                    </IconButton>
                    <IconButton  onClick={() => this.handleClick()}>
                        second page
                    </IconButton>
                    <div>

                        <Button variant="contained" color="primary" onClick={() => this.handleClick()}>
                            dark mode is {appSettingsStore.isDarkMode? "on" :"off"}
                        </Button>
                    </div>
                </Toolbar>


        )
    }
}

export default MyToolBar;
