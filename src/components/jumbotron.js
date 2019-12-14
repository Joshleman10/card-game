import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import StartMenu from './startMenu'
import ViewAllCards from './InfoForCards/ViewAllCards'
import './css/startMenu.css'

class PrimaryJumbotron extends Component {

    state = {
        gameInterface: ["Start Menu"]
    };

    handler = (buttonName) => {
        if (buttonName === "View All Cards") {
            this.state.gameInterface.unshift(buttonName)
            this.state.gameInterface.pop();
            console.log(this.state.gameInterface);
            this.setState({ gameInterface: this.state.gameInterface })
        }
    }

    render() {
        if (this.state.gameInterface[0] === "Start Menu") {
            return (
                <Jumbotron fluid className="text-center">
                    <StartMenu handleButtonClick={this.handler}></StartMenu>
                </Jumbotron>
            );
        }
        else if (this.state.gameInterface[0] === "View All Cards"){
            return (
                <Jumbotron fluid className="text-center">
                    <ViewAllCards handleButtonClick={this.handler}></ViewAllCards>
                </Jumbotron>
            );
        }
    };
};

export default PrimaryJumbotron;