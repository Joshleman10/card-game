import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import StartMenu from './startMenu'
import MainStartButton from './mainStartButton'
import ViewAllCards from './InfoForCards/ViewAllCards'
import './css/startMenu.css'

class PrimaryJumbotron extends Component {
    state = {
        gameInterface: [<StartMenu></StartMenu>],
        startMenuButtons: [1, 2, 3, 4]
    };

    handleClick = (e) => {
        console.log("hi")
    }
    render() {
        return (
            <Jumbotron fluid className="text-center">
                <MainStartButton></MainStartButton>
            </Jumbotron>
        );
    };
};

export default PrimaryJumbotron;