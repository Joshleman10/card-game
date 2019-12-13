import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import StartMenu from './startMenu'
import ViewAllCards from './InfoForCards/ViewAllCards'
import './css/startMenu.css'

class PrimaryJumbotron extends Component {
    state = {
        gameInterface: [<StartMenu></StartMenu>]
    };

    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    handler = (buttonName) => {
        console.log(buttonName);
    }

    render() {
        return (
            <Jumbotron fluid className="text-center">
                <StartMenu handleButtonClick={this.handler}></StartMenu>
            </Jumbotron>
        );
    };
};

export default PrimaryJumbotron;