import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import '../../css/MainGamePlayJumbotron.css';
import { allCards } from '../../InfoForCards/ViewAllCards'

console.log(allCards);

class GamePlayJumbotron extends Component {

    state = {
        oppHelmChestAndHands: ["OppH", "OppC","OppHands"],
        oppLRAndFeet: ["OppL", "OppR","OppFeet"],
        oppHandAndDeck: ["OppHand","OppDeck"],
        userLRAndFeet: ["UserL", "UserR","UserFeet"],
        userHelmChestAndHands: ["UserH", "UserC","UserHands"],
        payerHandAndDeck: ["PlayerHand", "PlayerDeck"]
    };

    attackEnemy = (e, name) => {

    }

    handler = (buttonName) => {

    }

    render() {
        return (
            <Jumbotron fluid className="text-center">
                <Container style={{ marginTop: "-6%"}}>
                    <Row>
                    {this.state.oppHandAndDeck.map((item, index) => (
                            <Col md={{ size: 6 }} key={index}  style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.oppLRAndFeet.map((item, index) => (
                            <Col md={{ size: 4 }} key={index}style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.oppHelmChestAndHands.map((item, index) => (
                            <Col md={{ size: 4 }} key={index}style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.userHelmChestAndHands.map((item, index) => (
                            <Col md={{ size: 4 }} key={index}style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.userLRAndFeet.map((item, index) => (
                            <Col md={{ size: 4 }} key={index}style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row><Row>
                        {this.state.payerHandAndDeck.map((item, index) => (
                            <Col md={{ size: 6 }} key={index}style={{border: 'solid'}}>{item}</Col>
                        ))}
                    </Row>
                    <Button onClick={() => this.attackEnemy()} key={1}>Attack Button</Button>
                    <Button onClick={() => this.check()} key={2}>TBD</Button>

                </Container>
            </Jumbotron>
        )
    }
};

export default GamePlayJumbotron;


//ADJUST OBJECTS FOR EASIER USABILITY