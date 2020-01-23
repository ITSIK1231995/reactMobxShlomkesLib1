import React, {Component} from 'react';

import {observer} from "mobx-react";

@observer
class MangoScreen extends React.Component{

    render(){
        return (
            <div className="MangoScreen">
                <iframe style = {{width:1900,height:1100}} src="http://www.republiquedesmangues.fr" ></iframe>
            </div>

        )
    }
}

export default MangoScreen;
