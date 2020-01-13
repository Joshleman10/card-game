import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import BootstrapCard from '../InfoForCards/bootstrapCard';
import { creatingNewPlayerDeckArr } from '../gameStories/1stIntro'

import '../css/MainMenu.css';

class PlayersFullDeck extends Component {

    state = {
        playerDeck: []
    };

    saveInitialPlayerDeck = (initialDeck) => {
        let startingDeck = {
            "deck": initialDeck}
            console.log(startingDeck);
    }

    componentDidMount = (e, name) => {

        let deckConcat = [].concat.apply([], creatingNewPlayerDeckArr);
        this.state.playerDeck.push(deckConcat);
        this.saveInitialPlayerDeck(deckConcat);
        this.setState({ playerDeck: this.state.playerDeck })
    }

    render() {
        if (this.state.playerDeck[0] !== undefined) {
            return (
                <Container>
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
