import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import '../../artAndStyles/css/MainGamePlayJumbotron.css';
import { allCards } from '../../InfoForCards/ViewAllCards'


/***need to get data from SAVEDGAMES.JS into 1st level.js so that representation of player object is accurate */
//Use API.getSavedGames
class GamePlayJumbotron extends Component {

    state = {
        oppHelmChestAndHands: ["OppH", "OppC", "OppHands"],
        oppLRAndFeet: ["OppL", "OppR", "OppFeet"],
        oppHandAndDeck: ["OppHand", "OppDeck"],
        userLRAndFeet: ["UserL", "UserR", "UserFeet"],
        userHelmChestAndHands: ["UserH", "UserC", "UserHands"],
        payerHandAndDeck: ["PlayerHand", "PlayerDeck"],
        actionButtons: ["Attack", "Use Ability"]
    };

    componentDidMount = (e, name) => {
        console.log(this.props)
    }
    attackEnemy = (e, name) => {
    }

    handler = (buttonName) => {

    }

    render() {
        return (
            <Container style={{ marginTop: "-5.5%" }}>
                <Row>
                    {this.state.oppHandAndDeck.map((item, index) => (
                        <Col md={{ size: 6 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.oppLRAndFeet.map((item, index) => (
                        <Col md={{ size: 4 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.oppHelmChestAndHands.map((item, index) => (
                        <Col md={{ size: 4 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.userHelmChestAndHands.map((item, index) => (
                        <Col md={{ size: 4 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.userLRAndFeet.map((item, index) => (
                        <Col md={{ size: 4 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.payerHandAndDeck.map((item, index) => (
                        <Col md={{ size: 6 }} key={index} style={{ border: 'solid' }}>{item}</Col>
                    ))}
                </Row>
                <Row>
                    {this.state.actionButtons.map((item, index) => (
                        <Col md={{ size: 6 }}>
                            <Button onClick={() => this.attackEnemy()} key={1}>{item}</Button>
                        </Col>
                    ))}
                </Row>

            </Container>
        )
    }
};

export default GamePlayJumbotron;


//ADJUST OBJECTS FOR EASIER USABILITY