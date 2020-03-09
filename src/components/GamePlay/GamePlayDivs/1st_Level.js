import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from 'reactstrap';
import BootstrapCard from '../../InfoForCards/bootstrapCard';
// import { allCards } from '../../InfoForCards/ViewAllCards'
import '../../artAndStyles/css/MainGamePlayJumbotron.css'

// let deckSymbol = <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={() => this.dealCards(true)} src={process.env.PUBLIC_URL + 'battleImages/deck.jpg'} alt='playing card img'/>
// let handPlaceHolder = <Card style={{ width: '100%', height: '100%', objectFit: 'cover' }} onMouseEnter={(e, item, index) => this.onHover(true)} onMouseLeave={(e, item, index) => this.onHover(false)}>EMPTY</Card>

class GamePlayJumbotron extends Component {

    state = {
        entirePlayerDeck: [],
        oppHelmChestAndHands: ["OppH", "OppC", "OppHands"],
        oppLRAndFeet: ["OppL", "OppR", "OppFeet"],
        oppHandAndDeck: ["OppHand", "OppDeck"],
        userLRAndFeet: ["UserL", "UserR", "UserFeet"],
        userHelmChestAndHands: ["UserH", "UserC", "UserHands"],
        playerHandAndDeck: [[[], [], [], [], []], []],
        actionButtons: ["Attack", "Use Ability"]
    };

    componentDidMount = (e, name) => {
        this.props.value.props[0].playerDeck.map(item => {
            this.state.entirePlayerDeck.push(item);
        })
        console.log(this.state.entirePlayerDeck)
    }

    onHover = (e, card, index) => {
    }

    dealCards = (ableToDeal) => {
        if (ableToDeal === true) {
            let top5 = this.state.entirePlayerDeck[0].filter((item, index) => (index < 5) ? item : '')
            this.state.playerHandAndDeck[0].map((item, index) => {
                if (index < 5) {
                    item.push(top5.filter((thing, num) =>  (num === index) ? thing : '' ))
                }
            })
            this.setState({ playerHandAndDeck: this.state.playerHandAndDeck });
        }
        console.log(this.state.playerHandAndDeck[0])
    }


    attackEnemy = (e, name) => {

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
                    {this.state.playerHandAndDeck[0].map((item, index) => (
                        <Col md={{ size: 2 }} style={{ border: 'solid' }}>
                            {item.length > 0 ? <BootstrapCard 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} onMouseEnter={(e, item, index) => this.onHover(true)} onMouseLeave={(e, item, index) => this.onHover(false)}
                                onClick={((e) => this.handleClick(e, item))}
                                key={index} 
                                id={item[0][0].id}
                                name={item[0][0].name}
                                image={item[0][0].image}
                                rarity={item[0][0].rarity}
                                attack={item[0][0].attack}
                                defense={item[0][0].defense}
                                ability={item[0][0].ability}
                                cost={item[0][0].cost}
                            /> : <Card style={{ width: '100%', height: '100%', objectFit: 'cover' }}>EMPTY</Card>}
                        </Col>
                    ))}
                    <Col><img style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={() => this.dealCards(true)} src={process.env.PUBLIC_URL + 'battleImages/deck.jpg'} alt='playing card img'/></Col>
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