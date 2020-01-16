import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import StartMenu from './startMenu'
import ViewAllCards from './InfoForCards/ViewAllCards'
import IntroToGameStory from './gameStories/1stIntro'
import GamePlayJumbotron from './GamePlay/mainGameplayJumbotron'
import API from '../utils/API'
import './css/startMenu.css'

class PrimaryJumbotron extends Component {

    state = {
        gameInterface: ["Start Menu"]
    };

    handler = (buttonName) => {
        if (buttonName === "View All Cards") {
            this.state.gameInterface.unshift(buttonName)
            this.state.gameInterface.pop();
            this.setState({ gameInterface: this.state.gameInterface })
        }
        else if (buttonName === "Back To Main Menu") {
            this.state.gameInterface.unshift("Start Menu")
            this.state.gameInterface.pop();
            this.setState({ gameInterface: this.state.gameInterface })
        }
        else if (buttonName === "New Game") {
            this.state.gameInterface.unshift(buttonName)
            this.state.gameInterface.pop();
            this.setState({ gameInterface: this.state.gameInterface })
        }
        else if (buttonName === "New Game") {
            
            // this.state.gameInterface.unshift(buttonName)
            // this.state.gameInterface.pop();
            this.setState({ gameInterface: this.state.gameInterface })
        }
        else if (buttonName === "Start Your Quest"){
            this.state.gameInterface.unshift(buttonName)
            this.state.gameInterface.pop();
            this.setState({ gameInterface: this.state.gameInterface })
        }
    }

    render() {
        if (this.state.gameInterface[0] === "View All Cards") {
            return (
                <Jumbotron fluid className="text-center">
                    <ViewAllCards handleButtonClick={this.handler}></ViewAllCards>
                </Jumbotron>
            );
        }
        else if (this.state.gameInterface[0] === "New Game") {
            return (
                <Jumbotron fluid className="text-center">
                    <IntroToGameStory handleButtonClick={this.handler}></IntroToGameStory>
                </Jumbotron>
            );
        }
        else if (this.state.gameInterface[0] === "Start Your Quest") {
            return (
                <GamePlayJumbotron>
                </GamePlayJumbotron>
            );
        }
        else {
            return (
                <Jumbotron fluid className="text-center">
                    <StartMenu handleButtonClick={this.handler}></StartMenu>
                </Jumbotron>
            );
        }
    };
};

export default PrimaryJumbotron;
