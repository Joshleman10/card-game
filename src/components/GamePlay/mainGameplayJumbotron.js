import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import '../css/MainGamePlayJumbotron.css';


class GamePlayJumbotron extends Component {

    state = {
        opponentReinforcements: [1, 2, 3, 4, 5, 6],
        playerReinforcements: [1, 2, 3, 4, 5, 6],
        OMC: [1],
        PMC: [1],
        deckOpponent: [1],
        deckPlayer: [1]
    };

    handler = (buttonName) => {

    }

    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        {this.state.opponentReinforcements.map((item, index) => (
                            <Col md="2" key={index}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.OMC.map((item, index) => (
                            <Col md={{ size: 6, offset: 5 }} key={index}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.PMC.map((item, index) => (
                            <Col md={{ size: 6, offset: 5 }} key={index}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.playerReinforcements.map((item, index) => (
                            <Col md="2" key={index}>{item}</Col>
                        ))}
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
};

export default GamePlayJumbotron;