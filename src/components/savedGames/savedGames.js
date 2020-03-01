import React, { Component } from "react";
import { Container, Button } from 'reactstrap';
import API from '../../utils/API';
import GamePlayJumbotron from '../GamePlay/mainGameplayJumbotron'

let savedGames = [];

API.getSavedGames()
    .then(res => {
        res.data.map(item => {
            savedGames.push(item);
        })
    })
    .catch(err => console.log(err));

class SavedGames extends Component {
    state = {
        backToMenu: ["Back To Main Menu"],
        listOfSaves: [],
        gameInterface: []
    };

    componentWillMount = (e, name) => {
        this.state.listOfSaves.push(savedGames)
        this.setState({ listOfSaves: this.state.listOfSaves })
        console.log(this.state.listOfSaves);
    }

    handleClick = (e, name) => {
        this.props.handleButtonClick(name);
    }

    savedGameClick = (e, currLevel) => {
        if (currLevel === "The First Fight") {
            console.log(currLevel);
            this.state.gameInterface.push(currLevel);
            this.setState({ gameInterface: this.state.gameInterface })
        }
    }

    render() {
        if (this.state.gameInterface[0] === "The First Fight")
            return (
                <GamePlayJumbotron></GamePlayJumbotron>
            );
        else if (this.state.listOfSaves[0].length > 0) {
            return (
                <Container>
                    {this.state.backToMenu.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                    <h1>Saved Games</h1>
                    {this.state.listOfSaves[0].map((item, index) => (
                        <Button onClick={((e) => this.savedGameClick(e, item.currentLevel))} name={item.created} key={index}>{item.playerName}<br></br>{item.created}</Button>
                    ))}
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <h1>THERE ARE CURRRENLTY NO SAVED GAMES</h1>
                    {this.state.backToMenu.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
    };
};

export default SavedGames;