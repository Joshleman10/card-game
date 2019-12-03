import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import StartMenu from './startMenu'

class PrimaryJumbotron extends Component {
    state = {
        gameInterface: [<StartMenu></StartMenu>]
    };

    render() {
        return (
            <Jumbotron fluid className="text-center">
                {this.state.gameInterface.map((item, index)=>(
                    <StartMenu></StartMenu>
                ))}
            </Jumbotron>
        );
    };
};

export default PrimaryJumbotron;