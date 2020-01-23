import React, {Component} from 'react';

import {observer} from "mobx-react";


import Button from '@material-ui/core/Button';
import {AppBar, CardActions, IconButton, Toolbar, Typography} from "@material-ui/core";

type Props = {
    name:string,
    extraInfo:string
}
type State = {
    showMoreInfo : boolean
}

@observer
class ExpandingRow extends React.Component<Props, State>{

    readonly state: State = {
        showMoreInfo : false
    };

    handleClick = () => {
        this.setState({showMoreInfo : !this.state.showMoreInfo});
    };

    expandContent = () => {
        return (<div>
            { this.state.showMoreInfo ? <div >{this.props.extraInfo}</div> : null }
        </div>);
    };

    render(){
        return (
            <div className="MainScreen">
                <Typography  color="textSecondary" gutterBottom>
                    <Button onClick={() =>this.handleClick() } size="small">{this.props.name}</Button>
                    {this.expandContent()}
                </Typography>
            </div>
        )
    }
}

export default ExpandingRow;