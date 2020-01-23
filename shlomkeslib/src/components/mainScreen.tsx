import React, {Component} from 'react';

import {observer} from "mobx-react";

import {AppBar, CardActions, Container, IconButton, Toolbar, Typography} from "@material-ui/core";

import List from "./list/list";
import {Col, Row} from "react-bootstrap";
import ExpandingList from "./list/exspandingList";
import {libraryStore} from "../stores/libraryStore";

type Props = {

}
type State = {
    showMoreInfo : boolean
}

@observer
class MainScreen extends React.Component<Props, State>{

    render(){

        return (
            <div className="MainScreen">

                <header className="App-header">

                <p>this is the main screen </p>
                    <Container>
                        <Row>
                            <Col><List data={libraryStore.getBooksData()}></List></Col>
                            <Col><List data={libraryStore.getBooksData()}></List></Col>
                            <Col><ExpandingList data={libraryStore.getBooksData()}></ExpandingList></Col>
                        </Row>
                    </Container>
                </header>

            </div>
        )
    }
}

export default MainScreen;
