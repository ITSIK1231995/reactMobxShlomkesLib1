import React, {Component} from 'react';

import {observer} from "mobx-react";

import Button from '@material-ui/core/Button';
import {AppBar, CardActions, IconButton, Toolbar, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import SimpleRow from "./rows/simpleRow";
import {libraryStore} from "../../stores/libraryStore";

type Props = {
    data : Book[]
}
interface Book {
    name : string,
    extraInfo : string
}
type State = {
    data : Book[]
}

@observer
class List extends React.Component<Props, State>{

    constructor(props : Props) {
        super(props);
        this.generateRow = this.generateRow.bind(this)
    }

    generateRow = (name : string,extraInfo : string) =>{
        return <SimpleRow extraInfo={extraInfo} name={name}></SimpleRow>
    };

    generateList = () => {
            return (<div> {
                this.props.data.map((book:Book) => {
                    return this.generateRow(book.name,book.extraInfo);
                })}
            </div>);
    };

    render(){
        return (
            <Card  variant="outlined">
                <CardContent>
                    {this.generateList()}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

        )
    }
}

export default List;
