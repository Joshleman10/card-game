import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import StartMenu from './startMenu'

class PrimaryJumbotron extends Component {
    state = {
        gameInterface: Jumbotron
    };

    render() {
        return (
            <Jumbotron fluid className="text-center">
                <StartMenu></StartMenu>
            </Jumbotron>
        );
    };
};

export default PrimaryJumbotron;