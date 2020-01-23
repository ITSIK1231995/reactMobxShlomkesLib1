import React, {Component} from 'react';

import {observer} from "mobx-react";
import {userStore} from "../stores/userStore";
import {appSettingsStore} from "../stores/appSettingsStore";

import Button from '@material-ui/core/Button';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


@observer
class MyToolBar extends React.Component {
    handleClick() {
        appSettingsStore.tuggoleDarkMode();
    }
    render(){
        return (
            <AppBar color="default">
                <Toolbar >
                    <IconButton >
                        <Link to="/MainScreen">main page</Link>
                    </IconButton>
                    <IconButton >
                        <Link to="/secondPage">second page</Link>
                    </IconButton>
                    <IconButton >
                        <Link to="/mango">mango</Link>
                    </IconButton>
                    <h1>welcome to shlomkes libreary mester {userStore.userInfo.name} !  </h1>
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/mangue-png-1.png"  />
                    <Button variant="contained" color="primary" onClick={() => this.handleClick()}>
                        dark mode is {appSettingsStore.isDarkMode? "on" :"off"}
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default MyToolBar;
