import React, { Component } from "react";
import { Container, Button } from 'reactstrap';
import API from '../../utils/API';
import GamePlayJumbotron from '../GamePlay/mainGameplayJumbotron'

let saves = []

API.getSavedGames()
    .then(res => {
        res.data.map(item => {
            saves.push(item)
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
        this.state.listOfSaves.push(saves)
        this.setState({ listOfSaves: saves })
    }

    handleClick = (e, name) => {
        this.props.handleButtonClick(name);
    }

    savedGameClick = (e, currLevel) => {
        if (currLevel === "The First Fight") {
            this.state.gameInterface.push(currLevel);
            this.setState({ gameInterface: this.state.gameInterface })
        }
    }

    deleteSave = (e, gameToDel, index) => {
        saves.splice(index, 1);
        API.deleteSavedGame(gameToDel._id)
        this.setState({ listOfSaves: saves })
    }

    render() {
        if (this.state.gameInterface[0] === "The First Fight")
            return (
                <GamePlayJumbotron></GamePlayJumbotron>
            );
        else if (this.state.listOfSaves.length > 0) {
            return (
                <Container>
                    {this.state.backToMenu.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                    <h1>Saved Games</h1>
                    {this.state.listOfSaves.map((item, index) => (
                        <Container>
                            <Button onClick={((e) => this.savedGameClick(e, item.currentLevel))} name={item.created} key={index}>{item.playerName}<br></br>{item.created}</Button>
                            <Button onClick={((e) => this.deleteSave(e, item, index))}>Delete This Game</Button>
                        </Container>
                    ))}
                </Container>
            )
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