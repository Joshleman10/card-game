import React, { Component } from "react";
import { Container, Row, Col, Button, Media } from 'reactstrap';
// import { allCards } from '../../InfoForCards/ViewAllCards'

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
        console.log(this.props.value.props[0])
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
                        <Col md={{ size: 12 }} style={{ border: 'solid' }}>
                            <Media object data-src='../../artAndStyles/Art/deck.jpg' alt='card deck pic'></Media>
                        </Col>
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