import React, {Component} from 'react';

import {observer} from "mobx-react";

import {AppBar, Container, IconButton, Toolbar, Typography} from "@material-ui/core";

import {Col, Row} from "react-bootstrap";
import List from "./list/list";
import {libraryStore} from "../stores/libraryStore";


@observer
class SecondScreen extends React.Component{
    render(){
        return (
            <div className="SecondScreen">
                <header className="App-header">
                    <p>this is the second screen </p>
                    <Container>
                        <Row>
                            <Col><List data={libraryStore.getBooksData()}></List></Col>
                            <Col><List data={libraryStore.getBooksData()}></List></Col>
                        </Row>
                    </Container>
                </header>

            </div>


        )
    }
}

export default SecondScreen;
