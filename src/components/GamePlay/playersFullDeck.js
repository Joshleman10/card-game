import React, { Component } from "react";
import { Container, Row, Col, Button, Input } from 'reactstrap';
import BootstrapCard from '../InfoForCards/bootstrapCard';
import { creatingNewPlayerDeckArr } from '../gameStories/1stIntro'
import API from '../../utils/API';
import '../css/MainMenu.css';

class PlayersFullDeck extends Component {

    state = {
        playerDeck: [],
        playerName: ""
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
        let numOfSaves = 0
        if (numOfSaves === 0) {
            numOfSaves++;
        }
            console.log(this.state.playerName)
            console.log(numOfSaves)
            console.log(this.state.playerDeck)
            API.createNewSavedGame({
                playerName: this.state.playerName,
                playerDeck: this.state.playerDeck
            }).then(res => {
                console.log('made it past res')
                console.log(res)
                    .then(res => this.loadTasks())
            })
                .catch(err => console.log(err));
    }

    loadTasks = () => {
        API.getSavedGames()
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.playerDeck[0] !== undefined) {
            return (
                <Container>
                    <Button onClick={() => this.backToPrevMenu()} key={1}> Continue To Level 1</Button>
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


//SAVED GAME DATA IS ACHIEVED...NEED TO FIX POST REQUEST IN ORDER TO POST DATA TO MONGODB DATABASE