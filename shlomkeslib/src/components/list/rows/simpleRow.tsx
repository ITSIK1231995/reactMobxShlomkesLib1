import React, {Component} from 'react';

import {observer} from "mobx-react";


import Button from '@material-ui/core/Button';
import {AppBar, CardActions, IconButton, Toolbar, Typography} from "@material-ui/core";

type Props = {
    name:string,
    extraInfo:string
}
type State = {
}


@observer
class SimpleRow extends React.Component<Props, State>{
    render(){
        return (
            <div className="MainScreen">
                <Typography  color="textSecondary" gutterBottom>
                    <Button size="small">{this.props.name}</Button>
                </Typography>
            </div>
        )
    }
}

export default SimpleRow;