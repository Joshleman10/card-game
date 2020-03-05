import React, { Component } from "react";
import { Container, Row, Col, Button, Input } from 'reactstrap';
import BootstrapCard from '../InfoForCards/bootstrapCard';
import { creatingNewPlayerDeckArr } from '../gameStories/1stIntro'
import API from '../../utils/API';
import '../artAndStyles/css/MainMenu.css';

/***need to get data from SAVEDGAMES.JS into 1st level.js so that representation of player object is accurate */

class PlayersFullDeck extends Component {

    state = {
        playerDeck: [],
        playerName: "",
        numOfSaves: 0,
        buttonType: ["Begin Your Quest"]
    };

    componentDidMount = (e, name) => {
        let deckConcat = [].concat.apply([], creatingNewPlayerDeckArr);
        this.state.playerDeck.push(deckConcat);
        this.setState({ playerDeck: this.state.playerDeck })
    }

    handlePlayerNameChange = (e) => {
        this.setState({ playerName: e.target.value });
    }

    backToPrevMenu = () => {
        if (this.state.numOfSaves === 0) {
            this.state.buttonType.unshift("Back to Previous Menu")
            API.createNewSavedGame({
                playerName: this.state.playerName,
                playerDeck: this.state.playerDeck,
                currentLevel: "The First Fight"
            }).then(res => {
                this.setState(prevState => {
                    return { numOfSaves: prevState.numOfSaves + 1 }
                })
                console.log(this.state.numOfSaves)
            })
                .catch(err => console.log(err));
        }
        else{
            API.updateSavedGameFile({
                playerName: this.state.playerName,
                playerDeck: this.state.playerDeck,
                currentLevel: "The first warrior"
            }).then(res => {
                this.setState(prevState => {
                    return { numOfSaves: prevState.numOfSaves + 1 }
                })
                console.log(this.state.numOfSaves)
            })
                .catch(err => console.log(err));
        }
    }

    loadTasks = () => {
        API.getSavedGames()
            .then(res => {
                console.log(res.data[0])
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.playerDeck[0] !== undefined) {
            return (
                <Container>
                    <Button onClick={() => this.backToPrevMenu()} key={1}>{this.state.buttonType[0]}</Button>
                    <Input type="text" value={this.state.playerName} onChange={this.handlePlayerNameChange} id="playerName" placeholder="Enter Player Name Here"></Input>
                    <Row>
                        {this.state.playerDeck[0].map((item, index) => (
                            <Col sm="3">
                                <BootstrapCard
                                    key={index} onClick={((e) => this.handleClick(e, item))}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    rarity={item.rarity}
                                    attack={item.attack}
                                    defense={item.defense}
                                    ability={item.ability}
                                    cost={item.cost}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )
        }
        else {
            return (
                <Container>
                    <Row>
                        <h1>AN ISSUE OCCURRED RENDERING THIS PAGE</h1>
                    </Row>
                </Container>
            )
        }
    }
};

export default PlayersFullDeck;

//MAKE THIS FILE AN UPDATE AND/OR CHECK YOUR DECK FILE SO THAT THE PLAYER CAN CHECK THE DECK