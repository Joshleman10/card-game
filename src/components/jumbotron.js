import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import StartMenu from './startMenu'
import ViewAllCards from './InfoForCards/ViewAllCards'
import IntroToGameStory from './gameStories/1stIntro'
import GamePlayJumbotron from './GamePlay/mainGameplayJumbotron'
import API from '../utils/API';
import './css/startMenu.css'

class PrimaryJumbotron extends Component {

    state = {
        gameInterface: ["Start Menu"],
        savedGames: []
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
        else if (buttonName === "Continue Saved Game") {
            this.state.gameInterface.unshift(buttonName)
            this.state.gameInterface.pop();
            API.getSavedGames()
                .then(res => {
                    this.state.savedGames.push(res.data[0])
                    console.log(this.state.savedGames)
                    this.setState({ savedGames: this.state.savedGames })
                })
                .catch(err => console.log(err));
            this.setState({ gameInterface: this.state.gameInterface })
        }
    }

    savedGameClick = (e, currLevel) => {
        
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
        else if (this.state.gameInterface[0] === "Continue Saved Game") {
            return (
                <Jumbotron fluid className="text-center">
                    {this.state.savedGames.map((item, index) => (
                        <Button onClick={((e) => this.savedGameClick(e, item.currentLevel))} name={item.playerName} key={index}>{item.playerName}<br></br>{item.created}</Button>
                    ))}
                </Jumbotron>
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
