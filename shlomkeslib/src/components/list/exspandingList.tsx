import React, {Component} from 'react';

import {observer} from "mobx-react";
import ExpandingRow from "./rows/expandingRow";
import List from "./list";

@observer
class ExpandingList extends List{
    generateRow = (name : string,extraInfo : string) =>{
        return <ExpandingRow extraInfo={extraInfo} name={name}></ExpandingRow>
    }
}

export default ExpandingList;
