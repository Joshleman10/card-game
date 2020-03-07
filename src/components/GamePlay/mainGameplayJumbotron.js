import React, { Component } from "react";
import FirstLevel from './GamePlayDivs/1st_Level'

class GamePlayJumbotron extends Component {

    componentDidMount = (e, name) => {
    }

    handler = (buttonName) => {

    }

    render() {
        return (
            <FirstLevel value={this.props}></FirstLevel>
        )
    }
};

export default GamePlayJumbotron;